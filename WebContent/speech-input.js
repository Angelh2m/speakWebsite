/*global webkitSpeechRecognition */
(function($) {
	'use strict';

	// check for support (webkit only)
	if (!('webkitSpeechRecognition' in window)) return;

	var talkMsg = 'Speak now';
	// seconds to wait for more input after last
  	var defaultPatienceThreshold = 6;

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	var inputEls = document.getElementsByClassName('speech-input');
	console.log("the number of input elements with speech-input "+ inputEls.lengtn);
	[].forEach.call(inputEls, function(inputEl) {
		var patience = parseInt(inputEl.dataset.patience, 10) || defaultPatienceThreshold;
		var micBtn, micIcon, holderIcon, newWrapper;
		var shouldCapitalize = true;

		// gather inputEl data
		var nextNode = inputEl.nextSibling;
		var parent = inputEl.parentNode;
		var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
		var buttonSize = 0.8 * (inputEl.dataset.buttonsize || inputEl.offsetHeight);

		// default max size for textareas
		if (!inputEl.dataset.buttonsize && inputEl.tagName === 'TEXTAREA' && buttonSize > 26) {
			buttonSize = 26;
		}

		// create wrapper if not present
		var wrapper = inputEl.parentNode;
		if (!wrapper.classList.contains('si-wrapper')) {
			wrapper = document.createElement('div');
			wrapper.classList.add('si-wrapper');
			wrapper.appendChild(parent.removeChild(inputEl));
			newWrapper = true;
		}

		// create mic button if not present
		var micBtn = wrapper.querySelector('.si-btn');
		if (!micBtn) {
			micBtn = document.createElement('button');
			micBtn.type = 'button';
			micBtn.classList.add('si-btn');
			micBtn.textContent = 'speech input';
			var micIcon = document.createElement('span');
			var holderIcon = document.createElement('span');
			micIcon.classList.add('si-mic');
			holderIcon.classList.add('si-holder');
			micBtn.appendChild(micIcon);
			micBtn.appendChild(holderIcon);
			wrapper.appendChild(micBtn);

			// size and position mic and input
			micBtn.style.cursor = 'pointer';
			micBtn.style.top = 0.125 * buttonSize + 'px';
			micBtn.style.height = micBtn.style.width = buttonSize + 'px';
			inputEl.style.paddingRight = buttonSize - inputRightBorder + 'px';
		}

		// append wrapper where input was
		if (newWrapper) parent.insertBefore(wrapper, nextNode);

		// setup recognition
		var prefix = '';
		var isSentence;
		var recognizing = false;
		var timeout;
		var oldPlaceholder = null;
		var wakeup = false;
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;

		// if lang attribute is set on field use that
		// (defaults to use the lang of the root element)
		if (inputEl.lang) recognition.lang = inputEl.lang;

		function restartTimer() {
			timeout = setTimeout(function() {
				recognition.stop();
			}, patience * 500);
		}
		
		

		recognition.onstart = function() {
			oldPlaceholder = inputEl.placeholder;
			inputEl.placeholder = inputEl.dataset.ready || talkMsg;
			recognizing = true;
			inputEl.value = "";
			micBtn.classList.add('listening');
			restartTimer();
			
		};

		recognition.onend = function() {
			recognizing = false;
			clearTimeout(timeout);
			micBtn.classList.remove('listening');
			if (oldPlaceholder !== null) inputEl.placeholder = oldPlaceholder;
			console.log("sssssssssssstart the converse API "+inputEl.value);
			apicall(inputEl.value);
		};
		
		function apicall(invar){
			  console.log("inside the apicall function "+invar);
			 
			  $.ajax({
				    type: 'POST',
				    contentType: "application/json",
				    dataType: "json",
				    beforeSend: function (xhr) {
				        xhr.setRequestHeader('Authorization', 'Bearer ya29.c.El-1BXUkjNptOx0T6eSU7m0MOEpi0xfrBW1zCRkBq1yOEoYQJ8fjop0BkeDIWDSHnF-0S1BnutGBuiepsX5YRSINc3vF9HXklRhlQJ3KIyRgiSOxJUzya2okOlMF5EplTQ');
				    },
				    // make sure you respect the same origin policy with this url:
				    // http://en.wikipedia.org/wiki/Same_origin_policy
				    url: "https://dialogflow.googleapis.com/v2/projects/vze-bot/agent/sessions/8d31966d-6930-4d74-aec3-2c3ff27fa4d0:detectIntent",
				    data: "{\"queryInput\":{\"text\":{\"text\":\""+invar+"\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"America/New_York\"}}",
				    success: function(msg){
				        //alert('wow ' + msg);
				    	//console.log(msg);
				    	//resp = jQuery.parseJSON(msg);
				    	//resp = eval(msg);
				    	//resp = JSON.stringify(msg);
				    	//resp = JSON.parse(msg);
				    	respHandle(msg);
				        //console.log(eval(msg));
				    }
				});
			 
		  }
		var resp, resp2;
		var fulfilmentMsg;
		var textResp;
		var intent;
		var agentResp1, agentResp2, errormessage;
		
		function respHandle(agentResp){
			//resp = JSON.parse(agentResp);
			resp2 = eval(agentResp);
			//console.log(resp);
			console.log(resp2);
			intent = resp2.queryResult.intent.displayName;
			if(intent === "smartphones_page"){
				fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
				$.each(fulfilmentMsg, function( index, value ) {
					  console.log( index + ": " + value );
					  textResp = eval(value);
					  console.log(textResp);
					  console.log("index "+index+" the text response "+textResp.text.text[0]);
					  if(index === 1){
						  agentResp1 = textResp.text.text[0];
					  }else if(index == 2){
						  agentResp2 = textResp.text.text[0]
					  }
					  console.log("redirect to smartphone page");
					  window.location.href = "http://localhost:8080/praise/smartphones.html";
					  
					});
			
			}else{
				fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
				$.each(fulfilmentMsg, function( index, value ) {
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
			if(transcript.toUpperCase() === "HELLO"){
				console.log("wakeup command");
				wakeup = true;
			}
			else if(transcript.toUpperCase() === "SCROLL DOWN"){
				console.log("SCROLL DOWN");
				wakeup = true;
				window.scrollBy(0, 200);
			}
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
		
		//enable the below line to listen after page load
		//recognition.start();
	
	});
})(jQuery);
