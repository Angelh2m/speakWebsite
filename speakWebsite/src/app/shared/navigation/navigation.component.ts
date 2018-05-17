import { Component, OnInit } from '@angular/core';
import { GoogleDialogService } from '../../services/google-dialog.service';
import { Router } from '@angular/router';

interface IWindow extends Window {
	webkitSpeechRecognition: any;
  }


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})

export class NavigationComponent implements OnInit {

  name: string = "Hello!!!!!"
  spokenText:string = '';

  makeCall(){
	console.log('DONEs');
	
	return this._googleDialogService.getCall('hello').subscribe((res)=> console.log('RESPONSE', res));

  }
  
	
  constructor( private router:Router, public _googleDialogService: GoogleDialogService) { }

  ngOnInit() {
	/*global webkitSpeechRecognition */
	this.startDialog()
  }

  startDialog(){

		let name = 'LOADED!';

		// let hello = ()=>{
		// 	this.name
		// }
		// hello();
		
		// check for support (webkit only)
		if (!('webkitSpeechRecognition' in window)) return;
	
		var talkMsg = 'Speak now';
		// seconds to wait for more input after last
		  var defaultPatienceThreshold = 6;
	
		let capitalize = (str) => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	
		var inputEls = document.getElementsByClassName('speech-input');
		// console.log("the number of input elements with speech-input "+ inputEls.lengtn);
		[].forEach.call(inputEls, (inputEl) => {

			
			var patience = parseInt(inputEl.dataset.patience, 6) || defaultPatienceThreshold;
			var micBtn, micIcon, holderIcon, newWrapper;
			var shouldCapitalize = true;
	
			// gather inputEl data
			var nextNode = inputEl.nextSibling;
			var parent = inputEl.parentNode;
			var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
			var buttonSize = 0.8 * (inputEl.dataset.buttonsize || inputEl.offsetHeight);
	
			
			/* *
			*  Button command selector
			*/
			var wrapper = inputEl.parentNode;
			var micBtn = wrapper.querySelector('.si-btn');
	
			// append wrapper where input was
			if (newWrapper) parent.insertBefore(wrapper, nextNode);
	
			// setup recognition
			var prefix = '';
			var isSentence;
			var recognizing = false;
			var timeout;
			var oldPlaceholder = null;
			var wakeup = false;
			// var recognition = new webkitSpeechRecognition();
			const {webkitSpeechRecognition} : IWindow = <IWindow>window;
			const recognition = new webkitSpeechRecognition();
			
			recognition.continuous = true;
			recognition.interimResults = true;
	
			// if lang attribute is set on field use that
			// (defaults to use the lang of the root element)
			if (inputEl.lang) recognition.lang = inputEl.lang;
	
			let restartTimer = () => {
				timeout = setTimeout(function() {
					recognition.stop();
				}, patience * 500);
			} 
			
			recognition.onstart = () => {
				oldPlaceholder = inputEl.placeholder;
				inputEl.placeholder = inputEl.dataset.ready || talkMsg;
				recognizing = true;
				inputEl.value = "";
				micBtn.classList.add('listening');
				restartTimer();
				
			};
	
			recognition.onend = () => {
				recognizing = false;
				clearTimeout(timeout);
				micBtn.classList.remove('listening');
				if (oldPlaceholder !== null){
					inputEl.placeholder = oldPlaceholder;
				} 
				
				var transcript = inputEl.value;
				if(transcript.toUpperCase() === "HELLO"){
					wakeup = true;
				}
	
				if(transcript.toUpperCase() === "SCROLL DOWN"){
					console.log("SCROLL DOWN");
					wakeup = true;
					window.scrollBy(0, 500);
				}
				
				if(transcript.toUpperCase() === "SCROLL UP"){
					console.log("GO BACK");
					wakeup = true;
					window.scrollBy(0, -500);
				}
				
				if(transcript.toUpperCase() === "GO BACK"){
					console.log("GO BACK");
					wakeup = true;
					window.history.back();
				}else{
					apicall(inputEl.value);
				}
				
				
				
			};
			
			
			let apicall = (invar) =>{
				  console.log("inside the apicall function "+invar);
				
				var myData = {
					queryInput:{
						text:{
							text: invar,
							languageCode:"en"
						}
					},
					queryParams:{
						timeZone: "America/New_York"
					}
				}
				
				var	url = "https://dialogflow.googleapis.com/v2/projects/vze-bot/agent/sessions/8d31966d-6930-4d74-aec3-2c3ff27fa4d0:detectIntent";

				
				fetch(url, {
				  method: 'POST', // or 'PUT'
				  body: JSON.stringify(myData), // data can be `string` or {object}!
				  headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ya29.c.El--Bfci_MbxhR6VQwxwCQlP54i5WJ3c_T2vdBL-4pB58Y2sf7HxfCdUKxbxuhextorKHc2jKnLV_CwsLb2zXc5JehqJfCA9Bf0Mwv7g6yyYblKGrxtGeeMvPC3H8MPcyw'
				  })
				}).then(res => res.json())
				.catch(error => console.error('Error:', error))
				.then(response =>{
				respHandle(response)
				});

				  
			}
	
			var resp, resp2;
			var fulfilmentMsg;
			var textResp;
			var intent;
			var agentResp1, agentResp2, errormessage;
			
			let respHandle = (agentResp) => {
				//resp = JSON.parse(agentResp);
				resp2 = eval(agentResp);
				//console.log(resp);
				console.log('THE RESPONSE!',resp2);
				intent = resp2.queryResult.intent.displayName;

				if(intent === "smartphones_page" || intent === "accessories"){
					fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
					agentResp1 = resp2.queryResult.fulfillmentMessages["0"].text.text["0"]
	
						  console.log("redirect to smartphone page", agentResp1);

						//   this.router.navigate([agentResp1]);
						  window.location.href = "http://localhost:4200/"+agentResp1;
				
				}else{
					fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
					[].forEach.call(fulfilmentMsg, function( index, value ) {
						  console.log( index + ": " + value );
						  textResp = eval(value);
						  console.log(textResp);
						  console.log("index "+index+" the text response "+textResp.text.text[0]);
						  errormessage = textResp.text.text[0];
						  inputEl.value = errormessage;
						  
						});
				}
				
			}
	
			var finalTranscript = '';
			recognition.onresult = function(event) {
				clearTimeout(timeout);
	
				// get SpeechRecognitionResultList object
				var resultList = event.results;
	
				// go through each SpeechRecognitionResult object in the list
				var interimTranscript = '';
				for (var i = event.resultIndex; i < resultList.length; ++i) {
					var result = resultList[i];
	
					// get this result's first SpeechRecognitionAlternative object
					var firstAlternative = result[0];
	
					if (result.isFinal) {
						finalTranscript += firstAlternative.transcript;
					} else {
						interimTranscript += firstAlternative.transcript;
					}
				}
	
				// capitalize transcript if start of new sentence
				var transcript = finalTranscript || interimTranscript;
				transcript = !prefix || isSentence ? capitalize(transcript) : transcript;
				// append transcript to cached input value
				
				/*console.log("transcript "+ transcript);
				
				else{*/
					inputEl.value = transcript;
					// set cursur and scroll to end
					inputEl.focus();
					if (inputEl.tagName === 'INPUT') {
						inputEl.scrollLeft = inputEl.scrollWidth;
					} else {
						inputEl.scrollTop = inputEl.scrollHeight;
					}
					//wakeup = false;
				//}
	
				restartTimer();
			};
	
			micBtn.addEventListener('click', function(event) {
				event.preventDefault();
	
				// stop and exit if already going
				if (recognizing) {
					recognition.stop();
					return;
				}
	
				// Cache current input value which the new transcript will be appended to
				var endsWithWhitespace = inputEl.value.slice(-1).match(/\s/);
				prefix = !inputEl.value || endsWithWhitespace ? inputEl.value : inputEl.value + ' ';
	
				// check if value ends with a sentence
				isSentence = prefix.trim().slice(-1).match(/[\.\?\!]/);
	
				// restart recognition
				finalTranscript = '';
				recognition.start();
			}, false);

		});

	
  }

}
