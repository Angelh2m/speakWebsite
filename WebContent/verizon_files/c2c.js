/**
* c2c.js is used to populate the c2c link on a page based on the array configuration.
*/	

(function() {
    'use strict';
	
	var ajaxDomain = "https://testman.verizonwireless.com";
	var prodHostFlag = false;
	var spanishTestman = window.location.pathname.indexOf("sdtestman") > -1;
	var prodHosts = ["www.verizonwireless.com", "es.verizonwireless.com"];
	var currentHostName = window.location.hostname;
	if (prodHosts.indexOf(currentHostName) > -1){
		if (spanishTestman) {
			prodHostFlag = false;
		} else {
			prodHostFlag = true;
		}
	}
	if (prodHostFlag) {
		ajaxDomain = "https://www.verizonwireless.com";
	} else {
		ajaxDomain = "https://testman.verizonwireless.com";
	}	
	
	if (typeof btn_arr == "undefined") {
		var btn_arr = [
			{buttonname: "generic-c2c-container-desktop", 				 targeteddiv: ["c2c_container_desktop"], 				url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-desktop.html"},
			{buttonname: "generic-c2c-container-mobile",  				 targeteddiv: ["c2c_container_mobile"],  				url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-mobile.html"},
			{buttonname: "generic-c2c-container-support-postpay",		 targeteddiv: ["c2c_container_support_postpay"],		url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-support-postpay.html"},
			{buttonname: "generic-c2c-container-support-prepay",         targeteddiv: ["c2c_container_support_prepay"],         url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-support-prepay.html"},
			{buttonname: "generic-c2c-container-support-sales-consumer", targeteddiv: ["c2c_container_support_sales_consumer"], url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-support-sales-consumer.html"},
			{buttonname: "generic-c2c-container-support-sales-business", targeteddiv: ["c2c_container_support_sales_business"], url: "/content/vzw-engage/c2c/btn.display.generic-c2c-container-support-sales-business.html"}
		];
	}
	var filteredMap = {};	

	jQuery(document).ready(function (){		
		// looping the btn array and triggering the ajax requests, 
		//storing the result in the filtered Object with key as buttonname
		for(var i=0; i< btn_arr.length; i++){
			var targetDomElem = btn_arr[i].targeteddiv;
			if(targetDomElem.length > 0){
				var isAjaxToBeReq = false;
				filteredMap[btn_arr[i].buttonname] = {};
				// this loop is for to check the availability of class names on the dom
				for(var j=0; j< targetDomElem.length; j++){
					if(jQuery('.' + targetDomElem[j]).length > 0){
						isAjaxToBeReq = true;
						filteredMap[btn_arr[i].buttonname][targetDomElem[j]] = btn_arr[i];
					}
				}
				if(isAjaxToBeReq){
					initiateAjaxReq(btn_arr[i]);
				}
			}
		}
		
		// Initiating the ajax request based on the for loop url
		function initiateAjaxReq(list){
			var jsonpMethod = list.buttonname;
			jsonpMethod = jsonpMethod.replace(/-/g, "");
			return jQuery.ajax({
				type: 'GET',
				url: ajaxDomain + list.url,
				dataType: 'jsonp',
				jsonpCallback: jsonpMethod,
				jsonp: false,
				cache: true,
				success: function(data){
					triggerBtn(data);							
				},
				error: function(xhr, status, error){
					console.log('req failed', error);
				}
			});			
		}
		
		//Function parameters comes from ajax success response
		function triggerBtn(response){
			try{	
				if(filteredMap[response.btnname]){
					// this loop is for to append the response on the filtered dom elements class names
					for(var key in filteredMap[response.btnname]){
						if(filteredMap[response.btnname].hasOwnProperty(key)){
							var domElem = jQuery('.' + key);
							domElem.html(response.htmlSrc);
							domElem.attr("btName",response.btnname).attr("status",response.isOn);
							if(response.isOn){
								for (var k=0; k< domElem.find('a').length; k++){
									domElem.find('a')[k].addEventListener('click', initClickHandler.bind(this, response.btnname, response.isOn));													
								}
							}
						}
					}
					delete filteredMap[response.btnname];
				}
			} catch(e){
				console.log(e);
			}
		}
		
		// Initiating the ajax request based on the for loop url
		/*function initiateAjaxReq(list){
			return jQuery.ajax({
				url: list.url,
				success: function(data){
					try{
						if(data && data!=""){
							if(typeof data=="string"){
								data = JSON.parse(data);
							}
							if(filteredMap[data.btnname]){
								// this loop is for to replace the response on the filtered dom elements class names
								for(var key in filteredMap[data.btnname]){
									if(filteredMap[data.btnname].hasOwnProperty(key)){
										var domElem = jQuery('.' + key);
										domElem.html(data.htmlSrc);
										domElem.attr("btName",data.btnname).attr("status",data.isOn);
										if(data.isOn){
											//domElem.find('a')[0].addEventListener('click', initClickHandler.bind(this, data.btnname, data.isOn));
											//domElem[0].addEventListener('click', initClickHandler.bind(this, data.btnname, data.isOn));
											for (var k=0; k< domElem.find('a').length; k++){
												domElem.find('a')[k].addEventListener('click', initClickHandler.bind(this, data.btnname, data.isOn));													
											}
										}
									}
								}
								delete filteredMap[data.btnname];
							}
						}
					}
					catch(e){
						console.log(e);
					}
				},
				error: function(){}
			});
		}*/
		
		// Initializing event listener for dynamically created spans
		function initClickHandler(c2cUnit, c2cStatus, event){			
			if(c2cStatus){
				var vzgn_c2cWindowName = "vzw-c2c",
					vzgn_c2cPopUpConfig = "height=430,width=400,resizable=no,scrollbars=no",
					vzgn_c2cPopUpSuffix='',
					vzgn_c2cExtrapath = ajaxDomain + "/content/vzw-engage/c2c/";
					if(typeof vzgn_c2cuniqueId !== 'undefined' &&  vzgn_c2cuniqueId !== null && vzgn_c2cuniqueId!==''){
						 vzgn_c2cPopUpSuffix = 'display.c2c.'+c2cUnit+'.'+vzgn_c2cuniqueId+'.html';								 
					}
					else{
						 vzgn_c2cPopUpSuffix = 'display.c2c.'+c2cUnit+'.html';
					}

				if ( typeof winRefs == 'undefined' ) {
					var winRefs = {};
				}
				if ( typeof winRefs[vzgn_c2cWindowName] == 'undefined' || winRefs[vzgn_c2cWindowName].closed ) {
					if(c2cStatus){
						winRefs[vzgn_c2cWindowName] =  window.open(vzgn_c2cExtrapath + vzgn_c2cPopUpSuffix, '', vzgn_c2cPopUpConfig);
					} else {
						winRefs[vzgn_c2cWindowName].focus()
					}
				}
			}	
		}
		
	});
})();