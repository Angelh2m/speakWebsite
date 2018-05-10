if(window.App == undefined) { window.App = {}; }
App.omninav = App.omninav || {};
App.omninav.footer = {
	//Public
	config: {
		showCerts: true,
		showEmail: true, //deprecated
		showEmailForm: false,
		showSocial: false
	},
	
	init: function() {
		this.hideShowCertificationLogos();
		this.hideShowEmailForm();
		this.hideShowSocial();
		this.setViewDTMSite();
		document.getElementById('footer').style["display"] = 'block';
		if(vzw_gnjq){
		vzw_gnjq("#footer").wrap("<footer></footer>");
		}
		try{
            if(vzwDL.authentication.custType){
            	    if((vzwDL.authentication.custType == 'prepay') && ($("#cart").length>0 || $("#prepayCheckoutWrapper").length>0)){
            		$("#vgn_shcart a")[0].href = window.location.origin+'/vzw/cart/cart.jsp';}
            		}
            }
		catch(err){
			console.log(err);
				}
	},
	
	handleFooterSignUpForm: function(formId){
		var form = document.getElementById(formId),
			action = this.getAttribute(form, 'action'),
			sourceid = this.getInputValueById('footerVzwOptInSourceId'),
			nav = this.getInputValueById('footerVzwOptInNav'),
			email = this.getInputValueById('footerVzwOptInEmail');

		this.setInputValueById('footerVzwOptInEmail','');
	  	window.open(action+"?SOURCEID="+sourceid+"&NAV="+nav+"&EMAIL="+encodeURI(email));
	},
	
	handleEmailOnFocus: function() {
		App.omninav.footer.addClassById('footerVzwOptInInput', 'focus');
	},
	
	handleEmailOnBlur: function() {
		App.omninav.footer.removeClassById('footerVzwOptInInput', 'focus');
	},
	
	handleEmailOnChange: function() {
		var value = this.getInputValueById('footerVzwOptInEmail');
		if(value == null || value == '') {
			App.omninav.footer.removeClassById('footerVzwOptInInput', 'has-text');
		} else {
			App.omninav.footer.addClassById('footerVzwOptInInput', 'has-text');
		}
	},
	
	handleSuperFooterColumnToggle: function(_this) {
		if(_this.parentNode && _this.parentNode.className) {
			var cn_arr = _this.parentNode.className.split(/\s+/g);
			var oc = 'open';
			var fnd = false;
			for(var i=0;i<cn_arr.length;++i) {
				if(cn_arr[i] == oc) {
					fnd = true;
					cn_arr.splice(i,1);
					break;
				}
			}
			if(!fnd) {
				cn_arr.push(oc);
			}
			_this.parentNode.className = cn_arr.join(' ');
		}
	},
	
	handleViewSiteClick: function(rmCookie, tracking) {
		var fs = 'fs=1;';
		var dmnpath = ' domain=.verizonwireless.com; path=/';
		if(rmCookie) {
			var eDate = new Date();
			eDate.setTime(eDate.getTime() - 86400 * 1000);
			document.cookie = fs+' max-age=0; '+eDate.toUTCString()+';'+dmnpath;
		} else {
			document.cookie = fs+dmnpath;
		}
		
		onf_hbLink(tracking);
	},
	
	popup: function(strURL,strType,strHeight,strWidth){
		var strOptions="";
		if (strType=="flashPopup") strOptions="resizable,height="+strHeight+",width="+strWidth;
		if (strType=="popup") strOptions="scrollbars,resizable,height="+strHeight+",width="+strWidth;
		if (strType=="fullScreen") strOptions="scrollbars,location,directories,status,menubar,toolbar,resizable";
		window.open(strURL, 'newWin', strOptions);
	},
	
	//Private
	hideShowCertificationLogos: function() {
		if(this.config.showCerts) {
			var div = document.getElementById('footerIcons');
			if(div != null) {
				div.className = 'show';
		}
		}
	},
	hideShowEmailForm: function() {
		if(this.config.showEmailForm) {
			var div = document.getElementById('footerLinksHeader');
			if(div != null) {
				div.className += (div.className && div.className.length>0 ? ' ' : '')+'footerShowEmailForm';
			}
		}
	},
	hideShowSocial: function() {
		if(this.config.showSocial) {
			var div = document.getElementById('footerLinksHeader');
			if(div != null) {
				div.className += (div.className && div.className.length>0 ? ' ' : '')+'footerShowSocial';
			}
		}
	},
	setViewDTMSite: function() {
		var e = document.getElementById('gn-viewsite');
		if(e) {
			var dv = this.deviceDetection.isMobile() ? 'm' : (this.deviceDetection.isTablet() ? 't' : 'd');
			if(dv == 'd') {
				e.parentNode.removeChild(e);
			} else {
				var fsC = this.getCookie('fs');
				var key = 'vds';
				var rmc = 'false';
				if(fsC && fsC == '1') {
					if(dv == 'm') {
						key = 'vms';
						rmc = 'true';
					} else if(dv == 't') {
						key = 'vts';
						rmc = 'true';
					}
				}
				this.setAttribute(e, 'href', this.getAttribute(e,'data-'+key+'-hrf'));
				this.setAttribute(e, 'onclick', 'App.omninav.footer.handleViewSiteClick('+rmc+',\''+this.getAttribute(e,'data-'+key+'-hbx')+'\');return true;');
				this.setAttribute(e, 'title', this.getAttribute(e,'data-'+key+'-ttl'));
				e.innerHTML = this.getAttribute(e,'data-'+key+'-txt');
				if(e.removeAttribute) {
					var ka = ['vds','vts','vms'];
					var aa = ['hrf','hbx','ttl','txt'];
					for(var i=0;i<ka.length;++i) {
						for(var j=0;j<aa.length;++j) {
							e.removeAttribute('data-'+ka[i]+'-'+aa[j]);
						}
					}
				}
			}
		}
	},
	
	getCookie: function(name) {
		var c = document.cookie.split(';');
		var n = name+'=';
		for(var i=0;i<c.length;++i) { 
			var ci = c[i].trim();
			if(ci.indexOf(n)==0) {
				return ci.substring(n.length,ci.length);
			}
		}
		return null;
	},
	addAttribute: function(element, key, value) {
		var attr = document.createAttribute(key);
		attr.value = value;
		element.setAttributeNode(attr);
	},
	getAttribute: function(element, attr) {
		if(element != null && element.getAttributeNode != undefined) {
			var attrNode = element.getAttributeNode(attr);
			if(attrNode != null && attrNode.value != undefined) {
				return attrNode.value;
			}
		}
		return null;
	},
	
	setAttribute: function(element, attr, value) {
		if(element != null && element.setAttribute != undefined) {
			element.setAttribute(attr, value);
		}
	},
	
	addClassById: function(elementId, className) {
		var ele = document.getElementById(elementId);
		if(ele != null && ele.className != undefined) {
			var hc = new RegExp('(^'+className+'$)|(^'+className+'\\s)|(\\s'+className+'$)|(\\s'+className+'\\s)','g');
			if(!hc.test(ele.className)) {
				ele.className = (ele.className+' '+className).replace(/\s+/,' ').replace(/^\s+|\s+$/, "");
			}
		}
	},
	removeClassById: function(elementId, className) {
		var ele = document.getElementById(elementId);
		if(ele != null && ele.className != undefined) {
			var hc = new RegExp('(^'+className+'$)|(^'+className+'\\s)|(\\s'+className+'$)|(\\s'+className+'\\s)','g');
			if(hc.test(ele.className)) {
				ele.className = ele.className.replace(hc,' ').replace(/\s+/,' ').replace(/^\s+|\s+$/, "");
			}
		}
	},
	
	getInputValueById: function(elementId) {
		var ele = document.getElementById(elementId);
		if(ele != null && ele.value != undefined) {
			return ele.value;
		}
		return null;
	},
	
	setInputValueById: function(elementId, value) {
		var ele = document.getElementById(elementId);
		if(ele != null && ele.value != undefined) {
			ele.value = value;
		}
	},
	
	deviceDetection: {
		mobileDevices: {
			android: "android&mobile&!kftt",
			ios: "ipod|iphone",
			windows: "windows ce|iemobile|smartphone|windows phone os|windows phone",
			blackberry: "blackberry|BB10",
			palm: "palm|avantgo|blazer|elaine|hiptop|plucker|xiino",
			opera: "opera mini|opera mobi",
			generic: "mobile&!ipad&!kftt|mmp|midp|o2|pda|pocket|psp|symbian|smartphone|treo|up.browser|up.link|vodafone|wap"
		},
		appleTabletDevices: {
			ios: "ipad"
		},
		tabletDevices: {
			tablets: "ipad|Android|kindle|kftt|silk|Silk|Touch|touch|tablet&!Tablet PC|Tablet&!Tablet PC"
		},
		_userAgentCache: null,
		userAgent: function (clearCache) {
			if (typeof (clearCache) === typeof (undefined)) {
				clearCache = false;
			}
			if (clearCache || !this._userAgentCache) {
				this._userAgentCache = navigator.userAgent.toLowerCase();
			}
			return this._userAgentCache;
		},
		_isMobileCache: null,
		isMobile: function (clearCache, userAgent) {
			if (typeof clearCache != "boolean") {
				clearCache = false;
			}
			if(typeof userAgent == "undefined") {
				userAgent = navigator.userAgent;
			}
				
			if (clearCache || !this._isMobileCache) {
				var isMobile = false;
				for (var deviceUserAgent in this.mobileDevices) {
					if (this.isDevice(this.mobileDevices[deviceUserAgent], userAgent)) {
						isMobile = true;
						break;
					}
				}
				this._isMobileCache = isMobile;
			}
			return this._isMobileCache;
		},
		_isTabletCache: null,
		isTablet: function (clearCache, userAgent) {
			if (typeof clearCache != "boolean") {
				clearCache = false;
			}
			if(typeof userAgent == "undefined") {
				userAgent = navigator.userAgent;
			}
			if (clearCache || !this._isTabletCache) {
				var isTablet = false;
				for (var deviceUserAgent in this.tabletDevices) {
					if (this.isDevice(this.tabletDevices[deviceUserAgent], userAgent)) {
						isTablet = true;
						break;
					}
				}
				this._isTabletCache = isTablet;
			}
			return this._isTabletCache;
		}, 
		_is_iPadCache: null,
		isiPad: function (clearCache, userAgent) {
			if (typeof clearCache != "boolean") {
				clearCache = false;
			}
			if(typeof userAgent == "undefined") {
				userAgent = navigator.userAgent;
			}
			if (clearCache || !this._is_iPadCache) {
				this._is_iPadCache = (this.isDevice(this.appleTabletDevices["ios"], userAgent));
			}
			return this._is_iPadCache;
		},
		isDevice: function (deviceUserAgent, userAgent) {
			if (typeof (userAgent) === typeof (undefined)) {
				userAgent = this.userAgent();
			}
			var isDevice = false;
			var devicesOR = deviceUserAgent.split("|");
			if(devicesOR) {
				for(var i=0;i<devicesOR.length;++i) {
					var deviceOR = devicesOR[i];
					var isDeviceAND = true;
					var devicesAND = deviceOR.split("&");
					if(devicesAND) {
						for(var j=0;j<devicesAND.length;++j) {
							var device = devicesAND[j];
							if(device && device.replace) {
								var regex = new RegExp(device.replace("!", ""), "gi");
								if (device.indexOf("!") == 0) {
									isDeviceAND = isDeviceAND && !regex.test(userAgent);
								} else {
									isDeviceAND = isDeviceAND && regex.test(userAgent);
								}
							}
						}
					}
					if (isDeviceAND) {
						isDevice = isDeviceAND;
						break;
					}
				}
			}
			return isDevice;
		}
	}
};

function onf_hbLink(lid, pos){
	if(typeof vzwSc != 'undefined') {
		vzwSc.trackLink(lid);
	} else if(typeof _hbLink != 'undefined'){
		_hbLink(lid.toLowerCase(), pos);
	}
}
