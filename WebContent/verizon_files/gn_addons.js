/* New Search API functionality Starts */
var vzgn_jQuery= null;	
try{
   	if(typeof vzw_gnjq != 'undefined'){
   	   vzgn_jQuery = vzw_gnjq;
	}else if(typeof jQuery !='undefined'){
	   var jQVer = parseFloat(jQuery.fn.jquery);
	   if(jQVer>=1.5){
	   	vzgn_jQuery = jQuery;
	   }
	}
   if(vzgn_jQuery!=null){
		var vzgn_landingPageApi={
				userInfo:null,
				popTimeOut:4000,
			init : function(){
				vzw_gnjq(document).ready(function(){
				vzgn.gnDebug("inside vzgn_landingPageApi.init");
				try{
					if (gnlin_landingPageApiflag && vzgn.isLoggedIn) {
						vzgn_landingPageApi.landingPage();
					}
				}catch(e){
					vzgn.gnDebug("Error in vzgn_landingpage.init"); 
					vzgn_landingPageApi.popMyVLPError();
				}
			});
			},
			landingPage: function(){
				vzgn.gnDebug("inside vzgn_landingPageApi.landingPage");
	        	if(vzgn.isLoggedIn && gnlin_landingPageApiflag){
	        		var targetUrl= gnlin_asu +'/MyVerizonLandingPageApiInfo.action';
	        		vzw_gnjq.ajax({
				    	jsonp:false,
				    	url: targetUrl,
				    	data: null,
				    	dataType: 'jsonp',	
				    	type: 'GET',
				    	cache: false,			    
				    	timeout: vzgn_landingPageApi.popTimeOut,
				    	error: function(XMLHttpRequest, textStatus, errorThrown) {
				    		vzgn.gnDebug("failure in vzgn_landingPageApi.popMyVLP "+textStatus+" "+errorThrown);
				    		vzgn_landingPageApi.popMyVLPError();
				    	},
				    	success: vzgn_landingPageApi.popMyVLPInfo
				    	,
				    	jsonpCallback: "popMyVLPInfo"
					});
	        	}
	        },
	       popMyVLPInfo: function(data) {
				try {
					vzgn.gnDebug("inside popMyVLPInfo");	
					if(data==null){
						vzgn_landingPageApi.popMyVLPError();			
					}
					else {
						vzgn_landingPageApi.userInfo = data;
						if(typeof myvLPageCBFn!="undefined"){
                        	vzgn.gnDebug("call landingPageApi Callback");           
                        	myvLPageCBFn ();
                         }
					}

				} catch (e) {
					vzgn.gnDebug("error in vzgn_landingPageApi.popMyVLPInfo, "+e);
				}				
	        },
	        popMyVLPError: function(){
				try {
					vzgn.gnDebug("inside vzgn_landingPageApi.popMyVLPError, data function is null");
					if(typeof myvLPageCBFn!="undefined"){
	                    vzgn.gnDebug("call landingPageApi Callback from error");           
	                       	myvLPageCBFn ();
	                    }
	            } catch (e) {
	            	vzgn.gnDebug("error in vzgn_landingPageApi.popMyVLPInfoError function, "+e);
	            }
		 	}
		};

		var vzgn_accessManagerHeaderApi={
				userInfo:null,
				popTimeOut:4000,
			init : function(){
				vzw_gnjq(document).ready(function(){
				vzgn.gnDebug("inside vzgn_accessManagerHeaderApi.init");
				try{
					if (gnlin_accessManagerHeaderApiflag && vzgn.isLoggedIn) {
						vzgn_accessManagerHeaderApi.ajaxFunc();
					}
				}catch(e){
					vzgn.gnDebug("Error in vzgn_accessManagerHeaderApi.init"); 
					vzgn_accessManagerHeaderApi.amHeaderError();
				}
			});
			},
			ajaxFunc: function(){
				vzgn.gnDebug("inside vzgn_accessManagerHeaderApi.ajaxFunc");
	        	if(vzgn.isLoggedIn && gnlin_accessManagerHeaderApiflag){
	        		var targetUrl= gnlin_asu +'/AccessManagerHeaderInfo.action';
	        		vzw_gnjq.ajax({
				    	jsonp:false,
				    	url: targetUrl,
				    	data: null,
				    	dataType: 'jsonp',	
				    	type: 'GET',
				    	cache: false,			    
				    	timeout: vzgn_accessManagerHeaderApi.popTimeOut,
				    	error: function(XMLHttpRequest, textStatus, errorThrown) {
				    		vzgn.gnDebug("failure in vzgn_accessManagerHeaderApi.popAccessManagerHeaderInfo "+textStatus+" "+errorThrown);
				    		vzgn_accessManagerHeaderApi.amHeaderError();
				    	},
				    	success: vzgn_accessManagerHeaderApi.popAccessManagerHeaderInfo
				    	,
				    	jsonpCallback: "popAccessManagerHeaderInfo"
					});
	        	}
	        },
	       popAccessManagerHeaderInfo: function(data) {
				try {
					vzgn.gnDebug("inside popAccessManagerHeaderInfo");	
					if(data==null){
						vzgn_accessManagerHeaderApi.amHeaderError();			
					}
					else {
						vzgn_accessManagerHeaderApi.userInfo = data;
						if(typeof amHeaderCBFn!="undefined"){
                        	vzgn.gnDebug("call AccessManagerAPI Callback");           
                        	amHeaderCBFn ();
                         }
					}

				} catch (e) {
					vzgn.gnDebug("error in vzgn_accessManagerHeaderApi.popAccessManagerHeaderInfo, "+e);
				}				
	        },
	        amHeaderError: function(){
				try {
					vzgn.gnDebug("inside vzgn_accessManagerHeaderApi.amHeaderError, data function is null");
					if(typeof amHeaderCBFn!="undefined"){
	                    vzgn.gnDebug("call AccessManagerAPI Callback from error");           
	                       	amHeaderCBFn ();
	                    }
	            } catch (e) {
	            	vzgn.gnDebug("error in vzgn_accessManagerHeaderApi.amHeaderError function, "+e);
	            }
		 	}
		};
	
	
	/* New Notification functionality Start */
	var gnlinNotif={
			syncNotifTimeout:10000,
			asyncNotifTimeout:10000,
			maxAsyncNotifCnt:10,
			maxDispNotifCnt:5,
			syncNotifCnt:0,
			asyncNotifCnt:0,
			asyncMaxRetry:10,
			asyncRetryCnt:0,
			notifShown:false,
			notifHoverIcon:false,
			notifHoverTxt:false,
			notifHideDelay:300,
			init:function(){
			  try{		
			     if((vzgn.isLoggedIn) && 
			        (!gnlinNotif.isNotifDisabled()) &&
			         ((gnlin_roleFileName=="W.js") ||
				  (gnlin_roleFileName=="WITH.js") ||
				  (gnlin_roleFileName=="A.js"))){
			         gnlinNotif.getSyncNotif();
			     }
			   }catch(e){
			     gnDebug("Error in gnlinNotif - init"); 
			   }
			},
			isNotifDisabled:function(){
				if(gnlin_gnNotificationDisabled!="N"){
					return true;
				}else{
					return false;
				}			
			},
			showNotifOverlay:function(){
				var overlayBody = 	"<div style='float:left;padding:20px;'>"+
										"<div style='text-align: left;'>"+
											"<div>"+	vzw_gnjq("#vgn-notif-body-sec").html()+"</div>"+
										"</div>"+	
										"<div class='vzr_fixer' style='height:20px'></div>"+																											
										"<div class='vzr_rule' style='height:1px;background-color:#ababab;'></div>"+									
										"<div id='myvo_ok' TABINDEX='0' class='myvo_ok' onclick='vzgn.closeO();'>"+
											"<a href='javascript:void(0);' class='vzr_button' role='button'><span class='vzr_red'>OK</span></a>"+															
										"</div>"+
										"<div style='clear:both;height:5px;'>&nbsp;</div>"+
									"</div";
				
				if(vzw_gnjq("#gnlinTempNotif").length==0){
					vzw_gnjq("body").append("<div id='gnlinTempNotif' style='display:none;visibility:visible;width:650px;'>&nbsp;</div>");
				}
				vzw_gnjq("#gnlinTempNotif").addClass("vzr_modal");
				vzw_gnjq("#gnlinTempNotif").html(overlayBody);
				var oHt = vzw_gnjq("#gnlinTempNotif").height()+80;
				var oW = vzw_gnjq("#gnlinTempNotif").width();
				if(oHt>435){
					oHt=435;
				}
				vzw_gnjq("#gnlinTempNotif").removeClass("vzr_modal");
				vzw_gnjq("#gnlinTempNotif").html("&nbsp;");				
				var myOObj = {"oTitle":'Notifications',
						  "oWidth":oW,
						  "oHeight":oHt,
						  "ariaTxt":"notificationdialog",
						  "oHtml":overlayBody};
				vzgn.launchO(myOObj);		
			},
			getSyncNotif: function(){
				try{				
					var url = gnlinNotif.getNotifUrl()+"/secure/notification/retrieveSyncNotificationInfo.action";
					var params = {"pageLocation":"HOME"};
					vzw_gnjq.ajax({
					    jsonp:false,
					    url: url,
					    data: params,
					    dataType: 'jsonp',	
					    type: 'GET',
					    cache: false,
					    timeout: gnlinNotif.syncNotifTimeout,
					    error: gnlinNotif.notifErrResp,		    		    
					    success: gnlinNotif.popSyncNotifInfo,
					    jsonpCallback:"popSyncNotifInfo"
					});
				}catch(e){}
			},
			popSyncNotifInfo: function(data, textStatus){
				try{
					if((typeof data.statusCode != "undefined") && 
							(data.statusCode == "00")){
						gnlinNotif.maxAsyncNotifCnt=data.maxAsyncNotif;
						gnlinNotif.maxDispNotifCnt=data.maxDispNotif;
						var notifyArr = data.notificationArray;
						if((notifyArr!=null) && 
							(notifyArr.length>0)){
							gnlinNotif.syncNotifCnt=notifyArr.length;
							gnlinNotif.constructNotifSec(notifyArr, "vgn-syncNotif");						
						}
						gnlinNotif.getAsyncNotif();
					}	
				}catch(e){}
			},
			popAsyncNotifInfo:function(data, textStatus){
				try{
					if((typeof data.statusCode != "undefined") && 
						(data.statusCode == "00")){
						var notifyArr = data.notificationArray;
						if((notifyArr!=null) && 
							(notifyArr.length>0)){
							if(gnlinNotif.notifShown=false){
								gnlinNotif.asyncNotifCnt=gnlinNotif.asyncNotifCnt+notifyArr.length;
								gnlinNotif.constructNotifSec(notifyArr, "vgn-asyncNotif");	
							}else{								
								var notifMsg="";
								for(var i=0;i<notifyArr.length;i++){
									if(gnlinNotif.asyncRetryCnt>1){
										var retrievedMsgArr = vzw_gnjq("#vgn-notif-body-sec .vgn-asyncNotif .vgn-notif-msg-detail");
										if(retrievedMsgArr.length>0){
											var msgExists = false;
											for(var j=0;j<retrievedMsgArr.length;j++){
												var asyncMsg =vzw_gnjq.trim(vzw_gnjq(this).html()).toUpperCase();
												var newAsyncMsg = vzw_gnjq.trim(notifyArr[i].notifMsg).toUpperCase();
												if(asyncMsg!=newAsyncMsg){
													msgExists = true;
													break;
												}
											}
											if(!msgExists){
												gnlinNotif.addAsyncNotifMsg(notifyArr[i].notifMsg, notifyArr[i].notifType);
											}
										}
									}else{
										gnlinNotif.addAsyncNotifMsg(notifyArr[i].notifMsg, notifyArr[i].notifType);
									}
									
								}
							}													
						}
						//check for polling
						if ((data.inProgress == true) && 
							(gnlinNotif.asyncRetryCnt < gnlinNotif.asyncMaxRetry)) {
							gnlinNotif.getAsyncNotif();
						}						
					}	
				}catch(e){}				
			},			
			getAsyncNotif: function(){
				try{
					if((gnlinNotif.maxAsyncNotifCnt-gnlinNotif.asyncNotifCnt)>0){
						var url = gnlinNotif.getNotifUrl()+ "/secure/notification/retrieveAsyncNotificationInfo.action";
						var params = {"pageLocation":"HOME_L", "returnCount":gnlinNotif.maxAsyncNotifCnt};
						gnlinNotif.asyncRetryCnt++;
						vzw_gnjq.ajax({
						    jsonp:false,
						    url: url,
						    data: params,
						    dataType: 'jsonp',	
						    type: 'GET',
						    cache: false,
						    timeout: gnlinNotif.asyncNotifTimeout,
						    error: gnlinNotif.notifErrResp,		    		    
						    success: gnlinNotif.popAsyncNotifInfo,
						    jsonpCallback:"popAsyncNotifInfo"
						});						
					}
				}catch(e){}				
			},
			notifErrResp: function(XMLHttpRequest, textStatus, errorThrown){
				//dont do anything let it go
			},
			constructNotifSec: function (notifyArr, notifTypeClass){
				var notifImgHtml = '<li id="vgn-notif-holder" onclick="gnlinNotif.showNotifOverlay()"><a id="vgn-notif-icon" class="vgn-notif-icon" href="#"></a><span id="vgn-notif-cnt-icon"></span></li>';
				vzw_gnjq("#vgn_secnav ul.vgn_l_log").append(notifImgHtml);
				
				
				vzw_gnjq("#vgn-notif-sec").remove();
				var $notifHtml = vzw_gnjq(gnlinNotif.getNotifHtml());		
				vzw_gnjq("#vgn_mnav_in").append($notifHtml);
				var notifBodySecEl = $notifHtml.find("#vgn-notif-body-sec");
				gnlinNotif.populateNotif(notifBodySecEl, notifyArr, notifTypeClass);	
				gnlinNotif.positionNotifSec();
				vzw_gnjq(window).resize(function (event) {
					gnlinNotif.positionNotifSec();
				});
				
				$vgnNotifHeader = vzw_gnjq("#vgn-notif-sec-header");
				vzw_gnjq("#vgn-notif-holder").hover(
					function(){
						gnlinNotif.notifHoverIcon = true;
						gnlinNotif.showNotif();	
					}, 
					function(){
						gnlinNotif.notifHoverIcon = false;
						setTimeout(function(){gnlinNotif.hideNotif();}, gnlinNotif.notifHideDelay);					
					}
				);
				vzw_gnjq("#vgn-notif-sec").hover(
					function(){					
						gnlinNotif.notifHoverTxt = true;
					}, 
					function(){
						gnlinNotif.notifHoverTxt = false;
						setTimeout(function(){gnlinNotif.hideNotif();}, gnlinNotif.notifHideDelay);					
					}
				);
				//setTimeout('gnlinNotif.showHideNotif()', 3000);
				gnlinNotif.notifShown=true;				
			},
			showNotif:function(){
				vzw_gnjq("#vgn_globalNavContainer a.vgn-notif-icon").css("background-position", "0 -699px"); 
				vzw_gnjq("#vgn-notif-sec").show();
			},
			hideNotif:function(){
				if((gnlinNotif.notifHoverIcon==false) && (gnlinNotif.notifHoverTxt==false)){
					vzw_gnjq("#vgn_globalNavContainer a.vgn-notif-icon").css("background-position", "0 -729px");
					vzw_gnjq("#vgn-notif-sec").hide();	
				}
			},
			positionNotifSec: function(){
				var navEl = vzw_gnjq("#vgn-notif-icon");
				var navMenuOff = navEl.offset();
				var notifTop = (navMenuOff.top+22)+"px";
				var notifLeft = (navMenuOff.left-151)+"px";
				vzw_gnjq("#vgn-notif-sec").css({
					"top":notifTop,
					"left":notifLeft
				});
			},
			populateNotif: function(notifBodySecEl, notifyArr, notifTypeClass){
				notifBodySecEl.html("");
				for(var i=0;i<notifyArr.length;i++){
					if(i>0){
						notifBodySecEl.append("<div class='vgn-notif-separator'>&nbsp;</div>");
					}
					notifBodySecEl.append("<div class='vgn-notif-msg "+notifTypeClass+"' notifType='"+notifyArr[i].notifType +"'>"+											
											gnlinNotif.getNotifMsgHtml(notifyArr[i].notifMsg, notifyArr[i].notifType)+
										   "</div>");
				}
				gnlinNotif.resetNotifCount();
			},
			resetNotifCount:function(){
				var notifBodySecEl =vzw_gnjq("#vgn-notif-body-sec");
				var notCnt = notifBodySecEl.find("div.vgn-notif-msg").length;	
				vzw_gnjq("#vgn-notif-cnt-val, #vgn-notif-cnt-icon").html(notCnt);			
			},
			addAsyncNotifMsg:function(notifMsg, notifType){
				var notifBodySecEl =vzw_gnjq("#vgn-notif-body-sec");
				var curNotifCnt = notifBodySecEl.find("div.vgn-notif-msg").length;
				if(curNotifCnt>=gnlinNotif.maxDispNotifCnt){
					notifBodySecEl.append("<div class='vgn-notif-separator vgn-notif-sec-msg-hide'>&nbsp;</div><div class='vgn-notif-msg vgn-notif-sec-msg-hide vgn-asyncNotif' notifType='"+notifType +"'>"+gnlinNotif.getNotifMsgHtml(notifMsg,notifType)+"</div>");
				}else{
					notifBodySecEl.append("<div class='vgn-notif-separator'>&nbsp;</div><div class='vgn-notif-msg vgn-asyncNotif' notifType='"+notifType +"'>"+gnlinNotif.getNotifMsgHtml(notifMsg,notifType)+"</div>");
				}			
				gnlinNotif.resetNotifCount();
				gnlinNotif.asyncNotifCnt++;
			},
			getNotifMsgHtml: function(notifMsg, notifType){
				var notifTypeClass=notifType=="INFO"?"vgn-info-notif":"vgn-non-info-notif";
				var notifHtml = "<div class='vgn-notif "+notifTypeClass+"'>TT</div>"+
								"<div class='vgn-notif-msg-detail'>"+notifMsg+"</div>"+
								"<div class='vgn-clear'>&nbsp;</div>";
				return notifHtml;
			},
			getNotifHtml: function(){
			  return '<div class="vgn-clear">&nbsp;</div>'+
				  '<div id="vgn-notif-sec">'+
				  	'<div class="vgn-notif vgn-notif-arrow">&nbsp;</div>'+
			        '<div id="vgn-notif-sec-header">'+
			        	'<div>'+
			        	    '<div class="vgn-notif-notif-label">'+
				        		'<a href="#" onclick="gnlinNotif.showNotifOverlay()">Notifications (<span id="vgn-notif-cnt-val">&nbsp;</span>)</a>'+  
				        	'</div>'+        				        
			        	'</div>'+        	
			        '</div>'+
			        '<div class="vgn-clear">&nbsp;</div>'+
			        '<div id="vgn-notif-body-sec" class="vgn-notif-body-sec">'+
	        			'&nbsp;'+
	        		'</div>'+ 
			        '<div class="vgn-clear">&nbsp;</div>'+
			      '</div>';
			},
			getNotifUrl: function(){
				if(vzgn.acctRegion=="N"){
					return vzgn.gnConfig.nVZWUrl;
				}else if(vzgn.acctRegion=="W"){
					return vzgn.gnConfig.wVZWUrl;
				}else{
					return vzgn.gnConfig.eVZWUrl;
				}
			}
			
	};
	
	var vzgn_gloss = {
			cur_el:null,
			cur_key:null,
			init:function(){
			
				try{
					var tt_mouseEnter=function(){
						try{
							clearTimeout(vzgn_gloss.hoverhidetimer);
							vzgn_gloss.hideAllTips();
							vzgn_gloss.cur_el = vzgn_jQuery(this);
							if (vzgn_gloss.cur_el.attr('href').split('#').length > 0){
								vzgn_gloss.cur_key = vzgn_gloss.cur_el.attr('href').split('#').pop();
								var def = vzgn_gloss.cur_el.children().eq(0).children().eq(0);
								if (typeof def != 'undefined' && def.text() != "" && def.text() != 'empty'){//see if definition is already present.
									var definition = def.text();
									vzgn_gloss.showPopupDefinition();
								}else{//definition not present, get one.								
									vzgn_gloss.getDefinitionPitloot(vzgn_gloss.cur_key);
								}
							}										
						}catch (e){}
					};
					vzgn_jQuery(document).delegate(".vgn_popover", "mouseenter", tt_mouseEnter);
					var tt_mouseLeave = function(){
						try {
							vzgn_gloss.hoverhidetimer = setTimeout(function(){
								vzgn_gloss.hideAllTips();			
							},300);
							
						}catch (e){}
					};
					var tt_click = function(evt){
						try{
							evt.stopPropagation();
							var tt_url = vzgn_jQuery(this).attr("href");						
							if (tt_url.split('#').length > 0){
								tt_key= vzgn_gloss.cur_el.attr('href').split('#').pop();
							}
							window.open(gnlin_cqc+"/glossary.html#"+tt_key);
						}catch(e){
						
						}
						return false;
					};
					vzgn_jQuery(document).delegate(".vgn_popover", "click", tt_click);
					vzgn_jQuery(document).delegate(".vgn_popover", "mouseleave", tt_mouseLeave);
					if(gnlin_suppTTEnable){						
						vzgn_jQuery(document).delegate(".popover", "mouseenter", tt_mouseEnter);
						vzgn_jQuery(document).delegate(".popover", "mouseleave", tt_mouseLeave);
						vzgn_jQuery(document).delegate(".popover", "click", tt_click);
					}
				}
				catch(e){}
			},
			hideAllTips:function(){
			
				vzgn_jQuery('.vgn_popover_container').hide();				
			},
			hoverhidetimer:null,
			makePopupDefinition:function(definition,term){				
				if((typeof CQ == 'undefined') || (((typeof CQ != 'undefined') && CQ.WCM) && !(CQ.WCM.isEditMode(true)))) {
					if (term == vzgn_gloss.cur_key){					
						definition = decodeHtml(definition);
						var html = '<div class="vgn_popover_container" ><div class="vgn_ttMsg" style="display: none;">';
						html +=	definition;
						html += '</div>'+
								'<div class="vgn_ttPointer" style="display: none;"> </div>'+
								'<div class="vgn_ttPointerRight" style="display: none;"> </div>';
						vzgn_gloss.cur_el.append(html);
						vzgn_gloss.showPopupDefinition();
					}
				}	

				
				function decodeHtml(input){
					var tempdiv = document.createElement('div');
					tempdiv.innerHTML = input;
					return tempdiv.childNodes.length === 0 ? "" : tempdiv.childNodes[0].nodeValue;
				};
			},
			popDirection:function (){
				//return right, left, or up for the direction the popup will need to go.
				//determine this based on the amount of space in the window relative to the word needing poping.
				//priority is: right, left and then up (decending)
				
				//at somepoint this will need to be different to return right, left or up. 
				var winwid = vzgn_jQuery(window).width();
				var elwidth = vzgn_gloss.cur_el.width() + 266;//pointer, message box, and its shadow are 266 px wide.  
				var pitlootpos = vzgn_gloss.cur_el.position();
				//alert((pitlootpos.left + elwidth)+ 'size of stuff,   size of window ' + winwid);		
				if ((pitlootpos.left + elwidth) > winwid){
					return 'left';	
				}					
				return 'right';
			},
			showPopupDefinition:function (){
				clearTimeout(vzgn_gloss.hoverhidetimer);
				var dir = vzgn_gloss.popDirection();
				if (dir=='right'){
					vzgn_gloss.popToTheRight();			
				}else{
					vzgn_gloss.popToTheLeft();
				}
			},
			popToTheRight:function (){
				var pitlootpos = vzgn_gloss.cur_el.position();
				var elwidth = vzgn_gloss.cur_el.width();
				var pointerLeft = (pitlootpos.left - 5 + elwidth)+'px';
				var pointerTop = (pitlootpos.top - 3)+'px';
				pitlootpos.left = (pitlootpos.left + 10 + elwidth) +'px';
				pitlootpos.top = (pitlootpos.top -31)+'px';
				vzgn_gloss.cur_el.find('.vgn_ttPointer ').css({'left':pointerLeft,'top':pointerTop});
				vzgn_gloss.cur_el.find('.vgn_ttMsg').css({'left':pitlootpos.left,'top':pitlootpos.top});
				vzgn_gloss.cur_el.find('.vgn_ttShadow').css({'left':pitlootpos.left,'top':pitlootpos.top});
				vzgn_gloss.cur_el.find('.vgn_ttPointerRight').hide();
				vzgn_gloss.cur_el.find('.vgn_ttPointer ').show();
				vzgn_gloss.cur_el.find('.vgn_ttMsg').show();
				vzgn_gloss.cur_el.find('.vgn_popover_container').show();
			},
			popToTheLeft:function (){			
				var pitlootpos = vzgn_gloss.cur_el.position();		
				var elwidth = vzgn_gloss.cur_el.width();
				var pointerLeft = (pitlootpos.left-12)+'px';
				var pointerTop = (pitlootpos.top - 3)+'px';
				pitlootpos.left = (pitlootpos.left - 302) +'px';
				pitlootpos.top = (pitlootpos.top -31)+'px';
				vzgn_gloss.cur_el.find('.vgn_ttPointerRight').css({'left':pointerLeft,'top':pointerTop});
				vzgn_gloss.cur_el.find('.vgn_ttMsg').css({'left':pitlootpos.left,'top':pitlootpos.top});
				vzgn_gloss.cur_el.find('.vgn_ttShadow').css({'left':pitlootpos.left,'top':pitlootpos.top});				
				vzgn_gloss.cur_el.find('.vgn_ttPointer ').hide();
				vzgn_gloss.cur_el.find('.vgn_ttPointerRight').show();
				vzgn_gloss.cur_el.find('.vgn_ttMsg').show();
				vzgn_gloss.cur_el.find('.vgn_popover_container').show();
			},
			getDefinitionPitloot:function (textToDefine){				
				var url = gnlin_cqc + '/tooltip.'+escape(textToDefine) + '.html';
				vzgn_jQuery.ajax({
					jsonp:false,
					url:url,					
					data: null,
					dataType: 'jsonp',	
					type: 'GET',
					cache: true,
					timeout: 10000,
					error: function(XMLHttpRequest, textStatus, errorThrown) {
					
					},		    		    
					success: vzgn_gloss.vgn_defineGlossaryTerm,
					jsonpCallback:"vgn_defineGlossaryTerm"
				});
			},
			vgn_defineGlossaryTerm:function(data){				
				try{
					if((data.statusCode==0) &&
					   (data.definition!=null)&&
					   (data.definition.length>0)){								
							vzgn_gloss.makePopupDefinition(decodeURIComponent(data.definition),data.term);
						}else{
							//nothing to do here							
						}
				}catch(e){
					
				}
			}
		};



	/* New Notification functionality End */
	


	/* Click2Call functionality Start */
	try {
		vzgn_click2call = (function() {
		    var vzgn_click2call = {
		        vzgn_c2cUnit: '',
		        vzgn_c2cEnabled: 'false',
		        vzgn_c2cVarDiv:function() {
		        	try {
			            var vzgn_divCheck = vzgn_jQuery('#lpVoiceButton');
			            if(vzgn_divCheck.length == 0) {
			                vzgn_divCheck = vzgn_jQuery('#lpdynamicvoicediv');
			            }
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_c2cVarDiv error'+e);
			        }
			        return vzgn_divCheck;
		        },
		        vzgn_c2cStandAloneVarDiv:function() {
		        	try {
						var vzgn_arrayDivCheck = [];
						vzgn_jQuery('.saC2C').each(function(index) {
							var vzgn_c2cSABtnName = jQuery(this).attr('btnName');
							if(vzgn_c2cSABtnName !== undefined) {
								vzgn_arrayDivCheck[index] = this;
							}
						});
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_c2cStandAloneVarDiv error'+e);
			        }
			        return vzgn_arrayDivCheck;
		        },
		        init:function() {
		        	try {
				        vzgn_click2call.vzgn_c2cUnit = typeof vzgn_c2cPageUnit == 'undefined' ? '' : vzgn_c2cPageUnit,
				        vzgn_click2call.vzgn_c2cEnabled = typeof vzgn_c2cPageEnabled == 'undefined' ? 'false' : vzgn_c2cPageEnabled;
						vzgn_click2call.vzgn_c2cuniqueId = typeof vzgn_c2cuniqueId == 'undefined' ? '' : vzgn_c2cuniqueId;
						if(vzgn_click2call.vzgn_c2cuniqueId !== '' && vzgn_click2call.vzgn_c2cuniqueId !== null){
							vzgn_click2call.vzgn_c2cUnit = 'unique-consumer';
						}
			            if(vzgn_click2call.vzgn_c2cEnabled === 'true') {
			        		var vzgn_targetDivCheck = vzgn_jQuery(vzgn_click2call.vzgn_c2cVarDiv());
			            	if(vzgn_targetDivCheck.length != 0) {
			                	vzgn_click2call.vzgn_getC2CButtonInfo();
			            	}
			        	}
			        	//outside of checks look for a second set of c2c buttons, these are more independent and not required on js variables.
			        	var vzgn_targetArrayDivCheck = vzgn_click2call.vzgn_c2cStandAloneVarDiv();
		        		if(vzgn_targetArrayDivCheck.length != 0) {
		        			for (var vzgn_counterIndex = 0, vzgn_len = vzgn_targetArrayDivCheck.length; vzgn_counterIndex < vzgn_len; ++vzgn_counterIndex) {
							    vzgn_click2call.vzgn_getC2CSAButtonInfo(vzgn_targetArrayDivCheck[vzgn_counterIndex]);
							}
		        		}
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_c2c init error'+e);
			        }
		        },
		        vzgn_getC2CButtonInfo:function() {
					
					var paramData = "";
					if(vzgn_click2call.vzgn_c2cuniqueId !== ''){
						paramData=	{'unit' : vzgn_click2call.vzgn_c2cUnit, 'rv_uid':vzgn_click2call.vzgn_c2cuniqueId};
						}
					else{
							paramData=	{'unit' : vzgn_click2call.vzgn_c2cUnit};
					}
		        	try {
			            return vzgn_jQuery.ajax('/content/vzw-engage/c2c/btn.html', 
			             {
			                dataType: 'jsonp',
			                jsonpCallback: 'vzgn_click2call.getBtnInfo',
			                data: paramData,
			                success: function (vzgn_rawData) {
			                    vzgn_click2call.getBtnInfo(vzgn_click2call.vzgn_c2cUnit, vzgn_c2cRawData);  
			                },
			                error: function (vzgn_jqXHR, vzgn_textStatus, vzgn_errorThrown) {
			                	vzgn.gnDebug('vzgn_getC2CButtonInfo ajax errors to follow');	
			                	vzgn.gnDebug('vzgn_jqXHR'+vzgn_jqXHR);	
			                	vzgn.gnDebug('vzgn_textStatus'+vzgn_textStatus);	
			                	vzgn.gnDebug('vzgn_errorThrown'+vzgn_errorThrown);	
			                }
			             });
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_getC2CButtonInfo outer ajax error'+e);
			        }
		        },
		        vzgn_getC2CSAButtonInfo:function(entry) {
		        	try {
						var params = "";
						if(vzgn_click2call.vzgn_c2cuniqueId != ''){
							params=	{'unit' : vzgn_c2cSABtnName, 'rv_uid':vzgn_click2call.vzgn_c2cuniqueId};
							}
						else{
							params=	{'unit' : vzgn_c2cSABtnName};
						}
	        			var vzgn_c2cSABtnName = vzgn_jQuery(entry).attr('btnName');
			            return vzgn_jQuery.ajax('/content/vzw-engage/c2c/btn.html', 
			             {
			                dataType: 'jsonp',
			                jsonpCallback: 'vzgn_click2call.getBtnSAInfo',
			                data: params,
			                success: function (vzgn_rawData) {
			                	console.log('success?');
			                    vzgn_click2call.getBtnSAInfo(vzgn_c2cSABtnName, vzgn_c2cRawData);  
			                },
			                error: function (vzgn_jqXHR, vzgn_textStatus, vzgn_errorThrown) {
			                	vzgn.gnDebug('vzgn_getC2CButtonInfo ajax errors to follow');	
			                	vzgn.gnDebug('vzgn_jqXHR'+vzgn_jqXHR);	
			                	vzgn.gnDebug('vzgn_textStatus'+vzgn_textStatus);	
			                	vzgn.gnDebug('vzgn_errorThrown'+vzgn_errorThrown);	
			                }
			             });
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_getC2CSAButtonInfo outer ajax error'+e);
			        }
		        },
		        getBtnInfo:function(vzgn_c2cUnit, vzgn_c2cRawData) {
		        	try {
			            var vzgn_targetDiv = vzgn_jQuery(vzgn_click2call.vzgn_c2cVarDiv()),
			                vzgn_btnSrc = vzgn_c2cRawData.htmlSrc,
			                vzgn_c2cStatus = vzgn_c2cRawData.isOn;
			            vzgn_jQuery(vzgn_targetDiv).attr('id','vzgn_c2c_holder');    
			            if(vzgn_targetDiv){
			                vzgn_targetDiv.html(vzgn_btnSrc);
			                vzgn_targetDiv.attr('btnName',vzgn_c2cUnit);
			                vzgn_targetDiv.attr('status',vzgn_c2cStatus);
			            } else {
			                throw new NoSuchDivException('VZW Engage: Target' + '#' + vzgn_targetDiv + 'not found');
			            }
			        }catch(e) {
			        	vzgn.gnDebug('getBtnInfo outer ajax error'+e);
			        }
		        },
		        getBtnSAInfo:function(vzgn_c2cSABtnName, vzgn_c2cRawData) {
		        	try {
						var vzgn_arrayDivCheck;
						vzgn_jQuery('.saC2C').each(function(index) {
							var vzgn_c2cSABtnNameCheck = jQuery(this).attr('btnName');
							if(vzgn_c2cSABtnNameCheck == vzgn_c2cSABtnName) {
								vzgn_arrayDivCheck = this;
							}
						});
						if(typeof vzgn_arrayDivCheck !== 'undefined') {
				            var vzgn_targetDiv = vzgn_jQuery(vzgn_arrayDivCheck),
				                vzgn_btnSrc = vzgn_c2cRawData.htmlSrc,
				                vzgn_c2cStatus = vzgn_c2cRawData.isOn;
				            vzgn_jQuery(vzgn_targetDiv).attr('class','vzgn_c2c_holder-complete');    
				            if(vzgn_targetDiv){
				                vzgn_targetDiv.html(vzgn_btnSrc);
				                vzgn_targetDiv.attr('btnName',vzgn_c2cSABtnName);
				                vzgn_targetDiv.attr('status',vzgn_c2cStatus);
				            } else {
				                throw new NoSuchDivException('VZW Engage: Target' + '.' + vzgn_targetDiv + 'not found');
				            }
			        	}	
			        }catch(e) {
			        	vzgn.gnDebug('getBtnSAInfo outer ajax error'+e);
			        }
		        }
		    };

		    vzgn_jQuery(document).ready(function() { 
		    	try {
			        vzgn_click2call.init();
		        }catch(e) {
		        	vzgn.gnDebug('vzgn_C2C jQuery ready init error'+e);
		        }
		        vzgn_jQuery(document).on('click', '#vzgn_c2c_holder, .vzgn_c2c_holder-complete', function() {
	    			try {
			            var vzgn_c2cUnit = vzgn_jQuery(this).attr('btnName'),
			                vzgn_c2cStatus = vzgn_jQuery(this).attr('status');

			            if(vzgn_c2cStatus === 'true'){
			                var vzgn_c2cWindowName = "vzw-c2c",
			                    vzgn_c2cPopUpConfig = "height=430,width=400,resizable=no,scrollbars=no",
								vzgn_c2cPopUpSuffix='',
			                    vzgn_c2cExtrapath = "/content/vzw-engage/c2c/";
								if(typeof vzgn_c2cuniqueId !== 'undefined' &&  vzgn_c2cuniqueId !== null && vzgn_c2cuniqueId!==''){
									 vzgn_c2cPopUpSuffix = 'display.html?btnName='+vzgn_c2cUnit+'&rv_uid='+vzgn_c2cuniqueId;
								}
								else{
									 vzgn_c2cPopUpSuffix = 'display.html?btnName='+vzgn_c2cUnit;
								}

			                if ( typeof winRefs == 'undefined' ) {
			                    winRefs = {};
			                }
			                if ( typeof winRefs[vzgn_c2cWindowName] == 'undefined' || winRefs[vzgn_c2cWindowName].closed ) {
			                    if(vzgn_c2cStatus){
			                        winRefs[vzgn_c2cWindowName] =  window.open(vzgn_c2cExtrapath + vzgn_c2cPopUpSuffix, '', vzgn_c2cPopUpConfig);
			                    } else {
			                        winRefs[vzgn_c2cWindowName].focus()
			                    }
			                }
			            }
			        }catch(e) {
			        	vzgn.gnDebug('vzgn_C2C jQuery on click error'+e);
			        }
		        });
		    });
		    return {getBtnInfo : vzgn_click2call.getBtnInfo, getBtnSAInfo : vzgn_click2call.getBtnSAInfo, init : vzgn_click2call.init}
		})();
	}catch(e){vzgn.gnDebug('c2c outside loop error'+e);}
	/* Click2Call functionality End */

	//init notif for logged in user		
	gnlinNotif.init();
	
	//init for glossary link
	vzgn_gloss.init();
  }
  vzgn_landingPageApi.init();
  vzgn_accessManagerHeaderApi.init();
}catch(e){}	   


   /* New Search API functionality Ends*/
