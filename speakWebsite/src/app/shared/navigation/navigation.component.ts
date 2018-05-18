import { Component, OnInit } from '@angular/core';
import { GoogleDialogService } from '../../services/google-dialog.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { IphoneXComponent } from '../../phones/iphone-x/iphone-x.component';

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
	spokenText: string = '';
	refreshedToken: any = 'ya29.c.Elq_BewclRdCAfCUTe1YTIAWRvGFn_vNuCcAKCpFqBXlPLK6w63b68GA1hHlR2QteGP6d5iKmQtUATiN1qVfroCH__LBHziQBVYK08jBSJr_MCAbevTtRMobKus';
	listening: boolean = false;
	errorToken: boolean = true;
	firstLog = false;


	constructor(private router: Router, public _googleDialogService: GoogleDialogService) { }

	ngOnInit() {
		this.startDialog()
	}

	getToken(){
		this._googleDialogService.getToken()
		.subscribe( (resp) =>{
			this.refreshedToken = resp;
			return this.refreshedToken;
		})
	}

	startDialog() {

		let name = 'LOADED!';

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

			const { webkitSpeechRecognition }: IWindow = <IWindow>window;
			const recognition = new webkitSpeechRecognition();

			var fetchAllLinks: any = document.querySelectorAll('a');
			var newhtmlArr: any = Array.from(fetchAllLinks);
			var allValidPaths = this.router.config.map( (el, index ,arr) =>{
				return el.path
			});

			

			recognition.continuous = true;
			recognition.interimResults = true;

			// if lang attribute is set on field use that
			// (defaults to use the lang of the root element)
			if (inputEl.lang) recognition.lang = inputEl.lang;

			let restartTimer = () => {
				timeout = setTimeout(function () {
					recognition.stop();
				}, patience * 250);
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

				var intent = inputEl.value.toString().toLowerCase().replace(' ', '');
				console.log(intent);
				var gettingTheFullPath;
				var regex;
				var result;
				var foundIndex;


				var x = allValidPaths.map(function(event , index) {

					gettingTheFullPath = event.replace(/[.\-]/gim, '')
					regex = new RegExp(intent,"g");
					
					result = regex.test(event);
					if (result && intent) {
						foundIndex = index;
					}					
					return intent.indexOf(event) !== -1
				})
				var indexNew = allValidPaths.indexOf(intent)
				
				recognizing = false;
				clearTimeout(timeout);
				micBtn.classList.remove('listening');
				if (oldPlaceholder !== null) {
					inputEl.placeholder = oldPlaceholder;
				}

				var transcript = inputEl.value;
				if (transcript.toUpperCase() === "HELLO") {
					wakeup = true;
				}

				if (transcript.toUpperCase() === "SCROLL DOWN") {
					wakeup = true;
					window.scrollBy(0, 1100);
					return
				}

				if (transcript.toUpperCase() === "SCROLL UP") {
					wakeup = true;
					window.scrollBy(0, -1100);
					return
				}

				if (transcript.toUpperCase() === "GO BACK") {
					wakeup = true;
					window.history.back();
					return
				} 

				apicall(inputEl.value);

			};


			let apicall = (invar) => {

				var TOKEN;
				var myData = {
					queryInput: {
						text: {
							text: invar,
							languageCode: "en"
						}
					},
					queryParams: {
						timeZone: "America/New_York"
					}
				}

				var url = "https://dialogflow.googleapis.com/v2/projects/ivory-studio-204003/agent/sessions/dbb63b89-a91c-404c-b31e-8b10d57a857b:detectIntent";
				/* *
				*  API CALL
				*/
				var url2= `http://localhost:3000/getFreshToken`;

				let callToServer2 = () => {
					fetch(url2)
					.then(function(response) {

						return response.json();
					})
					.then(function(myJson) {
						TOKEN = myJson.token;
						// console.log("Token ",TOKEN);
						apiCallToGoogleDialog(myJson.token.body);
						return myJson.token.body
					});
				} 

				callToServer2();

				let apiCallToGoogleDialog = function(token) {

					fetch(url, {
						method: 'POST', // or 'PUT'
						body: JSON.stringify(myData), // data can be `string` or {object}!
						headers: new Headers({
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						})
					}).then(res =>{
						try{
							return res.json();
						}catch(err) {
							console.log(err);
						}
					})
						.catch(error => console.log(error))
						.then(response => {
							console.log('RESPONSE. : ', response , token );
							respHandle(response)
						});
				}
				
				/* *
				*  If Token has thrown an error
				*/
				if (this.errorToken) {
					// this.refreshedToken = 'ya29.c.Elq_BewclRdCAfCUTe1YTIAWRvGFn_vNuCcAKCpFqBXlPLK6w63b68GA1hHlR2QteGP6d5iKmQtUATiN1qVfroCH__LBHziQBVYK08jBSJr_MCAbevTtRMobKus'
					this.refreshedToken = this.getToken();
					// apiCallToGoogleDialog();
				}

			}

			var resp, resp2;
			var fulfilmentMsg;
			var textResp;
			var intent;
			var agentResp1, agentResp2, errormessage;


			let respHandle = (agentResp) => {

				resp2 = eval(agentResp);
				// console.log('THE RESPONSE!', resp2);
				intent = resp2.queryResult.intent.displayName;
		
				if (intent === "smartphones_page" 
				|| intent === "accessories"
				|| intent === "homepage" 
				|| intent === "iphonex" 
				|| intent === "samsung-galaxy" 
				|| intent === "fitbit" 
				|| intent === "shop" 
				|| intent === "my_account" 
				|| intent === "login") {

					fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
					agentResp1 = resp2.queryResult.fulfillmentMessages["0"].text.text["0"];

					if (this.firstLog == false && intent == 'my_account' ) {
						// localStorage.setItem('login', 'true');
						agentResp1 = 'login';
						this.firstLog = true;
					}
					
					window.location.href = "http://localhost:4200/" + agentResp1;
					//   this.router.navigate([agentResp1]);
					// window.location.href = "http://localhost:4200/" + agentResp1;

				} else {
					fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
					[].forEach.call(fulfilmentMsg, function (index, value) {
						textResp = eval(value);
						inputEl.value = ' ';
					});
				}

			}

			var finalTranscript = '';
			recognition.onresult = function (event) {
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

			micBtn.addEventListener('click', function (event) {
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
