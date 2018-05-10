// Global Variables
var urlCheck = false;
var salesurlCheck = false;
var careurlCheck = false;
var supporturlCheck = false;
var spnlzUrlCheck = false;
var cpnlzUrlCheck = false;
var vzwChannel = '';
var vzwSection = '';
var vzwMarket = '';
var vzwBU = '';
var deviceType = '';
var isProd = true;

var currentUrl = window.location.href;
var personalizeObj = {};
var personalizeCObj = {};
var personalizeSObj = {};
var vzwpznDL = {};
var gnpnlznCheck = false;
var devCheck = false;
var isQa = false;

//Chat Init Global variables
var vzwGNDL = {};
var authObjs = {};
var pageObjs = {};
var pageObj = {};
var personalizeObjs = {};
var lang, ppflag  = '';
var lflag = false;
var isvzwdl = true;
//var inqSiteID='';

var anEncode = false;
var olFlag = false;
var dlCheck = true;
var ndlurlCheck = false;
var ocurlcheck = false;
var ecpdCheck = false;
var $vzChat = window.jQuery;
//function to check see if jQuery is loaded. Below functions needs jQuery
try {
    window.addEventListener('load', vzwChatScript);
} catch(chatscripterror) {
    console.error("Chat script error-->", chatscripterror);
} finally {
    console.log("Chat script load continue...");
}
function base64_encode( str )
{
    if(str == null || str === undefined){
        return str;
    }
    if (window.btoa) // Internet Explorer 10 and above
        return window.btoa(unescape(encodeURIComponent( str )));
    else
    {
        // Cross-Browser Method (compressed)

        // Create Base64 Object
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
        // Encode the String
        return Base64.encode(unescape(encodeURIComponent( str )));
    }
}

function base64_decode( str )
{
    if(str == null || str === undefined){
        return str;
    }
    if (window.atob) // Internet Explorer 10 and above
        return decodeURIComponent(escape(window.atob( str )));
    else
    {
        // Cross-Browser Method (compressed)

        // Create Base64 Object
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
        // Encode the String
        return decodeURIComponent(escape(Base64.decode( str )));
    }
}

function vzwChatScript() {
    
    var propsLoc = 'https://scache.vzw.com/VZWChat/chatGNProps.js';

    //var propsLoc= 'https://stcache.vzw.com/VZWChat/chatGNProps_t.js';
    
    //window.$vzChat = window.jQuery;
    //var $vzChat = window.jQuery;
    // if(window.$vzChat) {
    if($vzChat) {
        //To read properties from chatGNProps.js file
        (function() {

            String.prototype.endsWith = function(suffix) {
                return this.indexOf(suffix, this.length - suffix.length) !== -1;
            };

            $vzChat.get(propsLoc, function(propsData) {
                var configResp = JSON.parse(propsData);
                var propsVars = [];
                for(i=0;i<configResp.chatConfig.length;i++){
                    for (var key in configResp.chatConfig[i]) {
                        propsVars[key] = configResp.chatConfig[i][key];
                    }
                }

                $vzChat.each(propsVars.pageUrls.split("|"), function(index, ulist) {
                    if(currentUrl.indexOf(ulist)> -1) {
                        urlCheck = true;
                    }
                });

                $vzChat.each(propsVars.carePageUrls.split("|"), function(index, culist) {
                    if(currentUrl.indexOf(culist)> -1) {
                        careurlCheck = true;
                    }
                });

                $vzChat.each(propsVars.salesPageUrls.split("|"), function(index, sulist) {
                    if(currentUrl.indexOf(sulist)> -1) {
                        salesurlCheck = true;
                    }
                });

                $vzChat.each(propsVars.devDomains.split("|"), function(index, dlist) {
                    if(currentUrl.search(dlist)> -1) {
                        isProd = false;
                    }
                });

                $vzChat.each(propsVars.qaEnvs.split("|"), function(index, qalist) {
                    if(currentUrl.search(qalist)> -1) {
                        isQa = true;
                    }
                });

                $vzChat.each(propsVars.salesPnlzUrls.split("|"), function(index, spzlist) {
                    if((currentUrl.indexOf(spzlist)> -1) && (currentUrl.endsWith(spzlist))) {
                        spnlzUrlCheck = true;
                    }
                });

                $vzChat.each(propsVars.carePnlzUrls.split("|"), function(index, cpzlist) {
                    if(cpzlist != "" && currentUrl.indexOf(cpzlist)> -1) {
                        cpnlzUrlCheck = true;
                    }
                });

                $vzChat.each(propsVars.gnpznlUrls.split("|"), function(index, gnpzlist) {
                    if(gnpzlist != "" && currentUrl.indexOf(gnpzlist)> -1) {
                        gnpnlznCheck = true;
                    }
                });

                $vzChat.each(propsVars.nonvzwDLUrls.split("|"), function(index, nvzdllist) {
                    if((nvzdllist != "" && currentUrl.indexOf(nvzdllist)> -1) && propsVars.nonvzwDLUrl === 'true') {
                        ndlurlCheck = true;
                    }
                });

                $vzChat.each(propsVars.orderConfUrls.split("|"), function(index, oclist) {
                    if((oclist != "" && currentUrl.indexOf(oclist)> -1) && propsVars.orderMetrics === 'true') {
                        ocurlcheck = true;
                    }
                });

                //RTD url check
                var rtdPData = false;
                $vzChat.each(propsVars.rtdPnlzUrls.split("|"), function(index, rtdlist) {
                    if((rtdlist != "" && currentUrl != null && currentUrl.indexOf(rtdlist)> -1) || (rtdlist != "" && typeof vzwDL !== 'undefined' && vzwDL != null
                        && vzwDL.page != null && vzwDL.page !== 'undefined'
                        && vzwDL.page.pageName !== 'undefined' && vzwDL.page.pageName != null
                        && vzwDL.page.flowName !== 'undefined' && vzwDL.page.flowName != null
                        && vzwDL.page.pageName.indexOf(rtdlist)> -1 && vzwDL.page.flowName === "aal") ) {
                        rtdPData = true;
                    }
                });

                //gw banner chec
                var bannerData = false;
                $vzChat.each(propsVars.gwBannerUrls.split("|"), function(index, bnrlist) {
                    if((bnrlist != "" && currentUrl.indexOf(bnrlist)> -1)) {
                        bannerData = true;
                    }
                });

                if (propsVars.encodeAN === 'true') {
                    anEncode = true;
                }

                if (propsVars.olTCCode === 'true') {
                    olFlag = true;
                }

                if (propsVars.vzwDLExists === 'false') {
                    dlCheck = false;
                }



                var id = isProd ? 'TouchCommerce' : 'TouchCommerce-Dev';
                var debugMode  = isProd ? false: true;

                var isTealium=propsVars.isTealium;
                if(isTealium==='true'){
                    var isEnsighten = typeof utag == 'object' ? true: false;
                }else {
                    var isEnsighten = typeof Bootstrapper == 'object' ? true: false;
                }

                var randomNum = Math.random();

                //BU check
                var spropCheck = '';
                var schannelCheck = '';
                var salesGNCheck = false;
                var careGNCheck = false;
                var supportGNCheck = false;
                if (typeof s == 'object') {
                    spropCheck = (typeof s.prop10 == 'undefined' || typeof s.prop10 == undefined) ? true: false;
                    schannelCheck = (typeof s.channel == 'undefined' || typeof s.channel == undefined) ? true: false;
                    if (!spropCheck && s.prop10 != 'D=ch') {
                        vzwBU = s.prop10;
                    } else if (!schannelCheck) {
                        vzwBU = s.channel;
                    }

                    if (vzwBU != '' && vzwBU.indexOf('store')> -1) {
                        salesGNCheck = true;
                    } else if (vzwBU != '' && (vzwBU.indexOf('my verizon')> -1 || vzwBU.indexOf('support')> -1 || vzwBU.indexOf('/dspt')> -1 || vzwBU.indexOf('/mspt')> -1) || vzwBU.indexOf('/tspt')> -1) {
                        careGNCheck = true;
                    } else {
                        salesGNCheck = careGNCheck = false;
                    }
                }

                var salesPData = false;
                var carePData = false;
                var PData = false;
                var authCallFlag = false;
                var pznCallFlag = false;


                if(debugMode) {
                    console.log("is Prod?:", isProd,',', 'Kill Switch?:', propsVars.killSwitch_GN === 'true',',', 'Page exists?:', propsVars.isPageExists === 'true',',', 'GN Auth?:', propsVars.gnauthData === 'true',',', 'GN url check?:', urlCheck,',');
                    console.log("vzwDL Exists?:", propsVars.vzwDLExists === 'true',',', "SalesPnlzn?:", propsVars.salesPnlznData === 'true',',',"CarePnlzn?:", propsVars.carePnlznData === 'true',',',"UFD Pnzl Call?:", propsVars.isUFDPnzlCall === 'true', ',');
                    console.log("GN Throttle:", propsVars.throttleGNValue + " Percentage :", Math.round(randomNum*100) + ' %',', ', "Pnlzn Throttle: ", propsVars.throttlePNLZNValue + " Percentage :", Math.round(randomNum*100) + ' %',',');
                    console.log("GN and PZ Check:",gnpnlznCheck,',','SPnzl Url Check? :', spnlzUrlCheck,',','CPnzl Url Check? :', cpnlzUrlCheck,',','Order Metrics Call? :', propsVars.orderMetrics === 'true',',','UFD Auth call check? :', propsVars.isUFDAuthCall === 'true',',');
                    console.log("nonvzwDLUrlCheck :", ndlurlCheck,',','dlCheck :', dlCheck,',','isQAEnv :', isQa);
                }

                salesGNCheck = true;
                // Global Nav fucntions
                if (!(propsVars.killSwitch_GN === 'true') && !isQa) {
                    if (propsVars.isPageExists === 'true') {

                        vzwChatMiscFunctions();
                        chatCookieFunctions();
                        chatPageObjectBuild();


                        if (currentUrl.indexOf("wbillpay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("nbillpay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("ebillpay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("sbillpay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("www.verizonwireless.com") != -1  	 ||
                            currentUrl.indexOf("login.verizonwireless.com") != -1    ||
                            currentUrl.indexOf("es.verizonwireless.com") != -1 		 ||
                            currentUrl.indexOf("community.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("myvpostpay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("myvprepay.verizonwireless.com") != -1 ||
                            currentUrl.indexOf("mediastore.verizonwireless.com") != -1 )
                        {
                            vzwChatFunction() ;
                        }


                        // GN Auth
                        //salesGNCheck=true;
                        if (propsVars.gnauthData === 'true' && salesGNCheck) {
                            if (propsVars.throttleGNValue && randomNum < propsVars.throttleGNValue) {
                                if (salesurlCheck) {
                                    //if(ndlurlCheck) {
                                    dlCheck = false;
                                    authCallFlag = true;
                                    //}
                                }
                            }
                        } else if (propsVars.gnauthData === 'true' && careGNCheck) {
                            if (propsVars.throttleGNValue && randomNum < propsVars.throttleGNValue) {
                                if (careurlCheck) {
                                    //if(ndlurlCheck) {
                                    dlCheck = false;
                                    authCallFlag = true;
                                    //}
                                }
                            }
                        } else {
                            dlCheck = true;
                            authCallFlag = false;
                            if (debugMode) {
                                console.log("No auth call made");
                            }
                        }

                        if (authCallFlag) {
                            try {
                                vzwChatAuthFunctions();
                                waitAPIresponse(3000);
                            } catch (autherr) {
                                if (debugMode) {
                                    console.error("Auth call error", autherr);
                                }
                            } finally {
                                if (debugMode) {
                                    console.log('AM auth call finally block, continue...');
                                }
                            }
                        }

                        //GN personalization
                        if (propsVars.salesPnlznData === 'true' && propsVars.carePnlznData === 'false') {
                            if(propsVars.throttlePNLZNValue && randomNum < propsVars.throttlePNLZNValue) {
                                salesPData = true;
                                if (spnlzUrlCheck) {
                                    pznCallFlag = true;
                                }
                            }
                        } else if (propsVars.carePnlznData === 'true' && propsVars.salesPnlznData === 'false') {
                            if(propsVars.throttlePNLZNValue && randomNum < propsVars.throttlePNLZNValue) {
                                carePData = true;
                                if (cpnlzUrlCheck) {
                                    pznCallFlag = true;
                                }
                            }
                        } else if (propsVars.salesPnlznData === 'true' && propsVars.carePnlznData === 'true') {
                            if(propsVars.throttlePNLZNValue && randomNum < propsVars.throttlePNLZNValue) {
                                if (spnlzUrlCheck && !cpnlzUrlCheck) {
                                    salesPData = true;
                                } else if (cpnlzUrlCheck && !spnlzUrlCheck) {
                                    carePData = true;
                                } else if (cpnlzUrlCheck && spnlzUrlCheck) {
                                    PData = true;
                                } else {
                                    PData = salesPData = carePData = false;
                                }
                                if (PData || salesPData || carePData) {
                                    pznCallFlag = true;
                                }
                            }
                        } else {
                            pznCallFlag = false;
                            if (debugMode) {
                                console.log("No Pzn call made");
                            }
                        }

                        if (pznCallFlag) {
                            try {
                                vzwChatPLZNFunction();
                                waitAPIresponse(3000);
                            } catch (pznerr) {
                                if (debugMode) {
                                    console.error("Sales and Care Pzn call error", pznerr);
                                }
                            } finally {
                                if (debugMode) {
                                    console.log('Sales and Care Pzn call finally block, continue...');
                                }
                            }
                        }

                        //Wait function for api response calls
                        function waitAPIresponse(waitTime) {
                            console
                            setTimeout(function() {
                                vzwChatFunction();
                            }, waitTime);
                        }

                        //Cart and purchase object build
                        try {
                            vzwChatPurchaseFunction();
                            waitAPIresponse(3000);
                        } catch (carterr) {
                            if (debugMode) {
                                console.error("vzwDL error", carterr);
                            }
                        } finally {
                            if (debugMode) {
                                console.log('Cart purchase objects build finally block, continue...');
                            }
                        }

                        //RTD
                        if (propsVars.rtdApiCall === 'true' && rtdPData) {
                            try {
                                RTDFunctions();
                                waitAPIresponse(3000);
                            } catch (rtderr) {
                                if (debugMode) {
                                    console.error("rtd api error", rtderr);
                                }
                            } finally {
                                if (debugMode) {
                                    console.log('RTD api build finally block, continue...');
                                }
                            }
                        }


                        //GW banner
                        if (propsVars.gwBannerCall === 'true' && bannerData) {
                            try {
                                gwBannerFunctions();
                            } catch (bnrerr) {
                                if (debugMode) {
                                    console.error("banner api error", bnrerr);
                                }
                            } finally {
                                if (debugMode) {
                                    console.log('banner api build finally block, continue...');
                                }
                            }
                        }

                        //waitAPIresponse(3000);

                        // Order metrics for order confirmation page. Function to post DL to ufd DB
                        if (ocurlcheck) {

                            if(typeof vzwDL !== 'undefined') {
                                try {
                                    buildOrderMetrics(vzwDL);
                                } catch (omerr) {
                                    if (debugMode) {
                                        console.error("OM call error", omerr);
                                    }
                                } finally {
                                    if (debugMode) {
                                        console.log('OM call finally block, continue...');
                                    }
                                }
                            }

                            function buildOrderMetrics(dl){
                                var OmSuccessFlag = false;
                                var ufdOMurl = isProd ? 'https://www.verizonwireless.com/UFDRender/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/StartFlow';
                                $vzChat.ajax({
                                    url :ufdOMurl,
                                    async : true,
                                    cache : true,
                                    method : "POST",
                                    contentType: 'application/json',
                                    dataType: 'json',

                                    data : $vzChat.param({
                                        "CurrentStep" : -1,
                                        "Flow" : "Wireless\\Promotions\\PromoMetrics",
                                        "Referer":currentUrl,
                                        "json": JSON.stringify(dl)
                                    }),
                                    success : function(msg, status, request) {
                                        OmSuccessFlag = true;
                                        if (debugMode) {
                                            console.log("Order metrics", status, msg);
                                        }
                                    },
                                    error: function (msg,status,error) {
                                        if(debugMode) {
                                            console.log(status + ': ' + error);
                                        }
                                    },
                                    complete: function (msg,status) {
                                        if(!OmSuccessFlag){
                                            if(debugMode) {
                                                console.log(status);
                                            }
                                        }
                                    }
                                });
                            }
                        }

                        // Get all required cookies
                        function chatCookieFunctions() {
                            function getAllChatCookies() {
                                var cookieChatGNParts = document.cookie.split(";"),
                                    allChatGNcookies = {};
                                for (var i = 0; i < cookieChatGNParts.length; i++) {
                                    var name_value = cookieChatGNParts[i],
                                        equals_pos = name_value.indexOf("="),
                                        name       = unescape(name_value.slice(0, equals_pos)).trim(),
                                        value      = unescape(name_value.slice(equals_pos + 1));

                                    allChatGNcookies[name] = value;
                                }
                                return allChatGNcookies;
                            }

                            var pageChatCookies = getAllChatCookies();
                            var cahtReqCookies = ['GLOBALID', 'MP_LANG', 'greetingName', 'loggedIn', 'role', 'disconnect'];
                            for (key in pageChatCookies) {
                                if (cahtReqCookies.indexOf(key) > -1){
                                    pageObj[key] =  pageChatCookies[key];
                                }
                            }

                        }

                        function chatPageObjectBuild(){
                            if (pageObj.MP_LANG && pageObj.MP_LANG == 'es') {lang = 'spanish';} else {lang = 'english';}
                            if (pageObj.loggedIn && pageObj.loggedIn == 'true') {lflag = true;}
                            if (pageObj.role == 'prepay') {ppflag = "1";}
                            if (pageObj.disconnect && pageObj.disconnect == '1') {pageObjs['disconnectFlag'] = '1';} else {pageObjs['disconnectFlag'] = '0'}
                            pageObjs['globalId'] = pageObj.GLOBALID;
                            pageObjs['greetingname'] = pageObj.greetingName;
                            pageObjs['language'] = lang;
                            pageObjs['section2'] = vzwSection;
                            pageObjs['channel'] = vzwChannel;
                            pageObjs['area'] = vzwMarket;
                            if (deviceType == 'mobile') {
                                pageObjs['platform'] = 'mobile';
                            } else if (deviceType == 'tablet') {
                                pageObjs['platform'] = 'tablet';
                            } else {
                                pageObjs['platform'] = 'desktop';
                            }

                            var pagedata = {};
                            pagedata['page'] = pageObjs;
                            $vzChat.extend(vzwGNDL, pagedata);
                            if (debugMode) {
                                console.log('page',vzwGNDL);
                            }
                        }

                        //GLobal nav chat code starts from here
                        //Get variables from cookie. Build cookie values.
                        function vzwChatAuthFunctions() {
                            //chatPageObjectBuild();

                            if (debugMode) {
                                console.log("Logged In? ", lflag);
                            }

                            if (!lflag){
                                sessionStorage.removeItem('storedAuthObject');
                            }

                            var authUFDCallFlag = false;
                            if(propsVars.isUFDAuthCall === 'true') {
                                authCallExecute();
                            }

                            function authCallExecute() {
                                var authChatObject = '';
                                var toStoreAuthChatGid = pageObjs.globalId;
                                if(sessionStorage.getItem('storedAuthObject')){
                                    authChatObject = sessionStorage.getItem('storedAuthObject');

                                }
                                if (toStoreAuthChatGid != sessionStorage.getItem('storedAuthChatGid') || sessionStorage.getItem('storedAuthChatGid') == undefined || sessionStorage.getItem('storedAuthObject') == null || sessionStorage.getItem('storedAuthObject') === '{}') {
                                    sessionStorage.setItem('storedAuthChatGid',toStoreAuthChatGid);
                                    if (debugMode) {
                                        console.log("changed", sessionStorage.getItem('storedAuthChatGid'));
                                    }
                                    authUFDCallFlag = true;
                                }
                            }

                            var noauthdata = {};
                            if (authUFDCallFlag) {
                                if (lflag) {
                                    //UFD call for AM authentication
                                    var authSuccessFlag = false;
                                    var ufdurl = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                                    $vzChat.ajax({
                                        url: ufdurl,
                                        async: true,
                                        cache: false,
                                        method: "GET",
                                        dataType: "text",
                                        contentType: "text/plain",
                                        xhrFields: {
                                            withCredentials: true
                                        },
                                        data:$vzChat.param({"CurrentStep":-1,"Flow":"Wireless\\Chat\\GlobalNavAuthentication","Platform":"Web","VZW_IsLoggedIn":"true","Referer":currentUrl}),
                                        success: function (msg,status,request) {
                                            authSuccessFlag = true;
                                            if (debugMode) {
                                                console.log('AM Call', JSON.parse(msg));
                                            }
                                            var amResp = JSON.parse(msg);
                                            var amTemplateRoot = amResp[0].Inputs.newTemp.Section[0].Inputs;
                                            buildAuthJson(amTemplateRoot);
                                        },
                                        error: function (msg,status,error) {
                                            if(debugMode) {
                                                console.log(status + ': ' + error);
                                            }
                                        },
                                        complete: function (msg,status) {
                                            if(!authSuccessFlag){
                                                if(debugMode) {
                                                    console.log(status);
                                                }
                                            }
                                        }
                                    });
                                } else {
                                    //sessionStorage.removeItem('storedAuthObject');
                                    //var noauthdata = {};
                                    if (currentUrl.indexOf("prepaid") != -1 ) {
                                        authObjs['custType'] = 'prepay';
                                    } else {
                                        authObjs['custType'] = 'B2C';
                                    }
                                    noauthdata['authentication'] = authObjs;
                                    //noauthdata = {authentication: {custType: 'B2C'}};
                                    $vzChat.extend(vzwGNDL, noauthdata);
                                }

                                function buildAuthJson(array) {
                                    var custtype = '';
                                    $vzChat.each(propsVars.eppEcpdId.split(","), function(index, ecpdlist) {
                                        if(ecpdlist != "" && array.AM_ECPD_ID != "" && array.AM_ECPD_ID.indexOf(ecpdlist)> -1) {
                                            ecpdCheck = true;
                                        }
                                    });
                                    authObjs['mdn'] = array.AM_MOBILE_NUMBER;
                                    if (array.Customer_Type != "" && array.Customer_Type == "ME") {
                                        custtype = 'EPP';
                                    } else if (array.Customer_Type == 'BE' || array.Customer_Type == 'BD') {
                                        if (ecpdCheck === 'true') {
                                            custtype = 'EPP';
                                        } else {
                                            custtype = 'B2E';
                                        }

                                    } else if (array.Customer_Type == 'SL') {
                                        custtype = 'SL';
                                    } else if (array.AM_ECPD_ID == "" && array.Customer_Type == "PE") {
                                        custtype = 'B2C';
                                    } else if (currentUrl.indexOf("prepaid") != -1) {
                                        custtype = 'prepay';
                                    } else {
                                        custtype = 'B2C';
                                    }

                                    authObjs['VCT'] = array.Customer_Type;
                                    authObjs['custType'] = custtype;
                                    authObjs['accountNumber'] = array.AM_ACCOUNT_NUM;
                                    if (array.Collection) {
                                        if (array.Collection === "Y" || array.Collection === "y") {
                                            authObjs['collectionsInd'] = '1';
                                        }
                                    }
                                    //authObjs['collectionsInd'] = array.Collection;
                                    authObjs['ecpdId'] = array.AM_ECPD_ID;
                                    if(ppflag == "1") {
                                        authObjs['prepayInd'] = ppflag;
                                    }
                                    authObjs['userRole'] = array.AM_ROLE;
                                    authObjs['greetingName'] = pageObjs.greetingname;

                                    //Session storage
                                    sessionStorage.setItem('storedAuthObject', JSON.stringify(authObjs));


                                } //build json end
                            } //authFlag check end

                            var authdata = {};

                            if((!authUFDCallFlag)) {

                                var retrievedObject = sessionStorage.getItem('storedAuthObject');
                                //console.log('retrievedObject: ', JSON.parse(retrievedObject));
                                //authdata['authentication'] = JSON.parse(retrievedObject);
                                vzwGNDL = {page: pageObjs, authentication: JSON.parse(retrievedObject)};
                                //$vzChat.extend(vzwGNDL, authdata);
                            } else {
                                authdata['authentication'] = authObjs;
                                $vzChat.extend(vzwGNDL, authdata);
                                //vzwGNDL = {page: pageObjs, authentication: authObjs};
                            }

                            if (debugMode) {
                                console.log('GNdl after auth', vzwGNDL);
                            }

                        } //Auth functions end


                        // Cart and purchase object info for GNDL
                        function vzwChatPurchaseFunction() {
                            var cartdata = {};
                            var purchasedata = {};
                            var dllayer='';
                            if (typeof vzwDL !== 'undefined') {
                                dllayer = vzwDL;
                                if (debugMode) {
                                    console.log("vzwDL layer", dllayer);
                                }
                                if(dllayer.cart) {
                                    cartdata['cart'] = dllayer.cart;
                                    $vzChat.extend(vzwGNDL, cartdata);
                                }
                                if(dllayer.purchase) {
                                    purchasedata['purchase'] = dllayer.purchase;
                                    $vzChat.extend(vzwGNDL, purchasedata);
                                }
                            }
                        }

                        //Personalization functions
                        function vzwChatPLZNFunction() {
                            //Get global id
                            function getChatCookieList() {
                                var cookieGNParts = document.cookie.split(";"),
                                    chatGNcookies = {};
                                for (var i = 0; i < cookieGNParts.length; i++) {
                                    var name_value = cookieGNParts[i],
                                        equals_pos = name_value.indexOf("="),
                                        name       = unescape(name_value.slice(0, equals_pos)).trim(),
                                        value      = unescape(name_value.slice(equals_pos + 1));

                                    chatGNcookies[name] = value;
                                }
                                return chatGNcookies;
                            }

                            var pnzlcookies = getChatCookieList();
                            var cookieString ='';
                            var globalID = '';
                            var pzChatSessionID = '';
                            var pzLogin = false;
                            for (key in pnzlcookies) {

                                if (key.indexOf('GLOBALID') === 0) {
                                    //console.log(key+":"+pnzlcookies[key]);
                                    cookieString = cookieString+key+'='+pnzlcookies[key]+';';
                                    globalID = pnzlcookies[key];

                                }
                                if (key.indexOf('JSIDVZW') === 0) {
                                    //console.log(key+":"+pnzlcookies[key]);
                                    cookieString = cookieString+key+'='+pnzlcookies[key]+';';
                                    pzChatSessionID = pnzlcookies[key];
                                }

                                if (key.indexOf('NSC_') === 0) {
                                    //console.log(key+":"+pnzlcookies[key]);
                                    cookieString = cookieString+key+'='+pnzlcookies[key]+';';

                                }
                                if (key.indexOf('loggedIn') === 0) {
                                    //console.log(key+":"+pnzlcookies[key]);
                                    pzLogin = pnzlcookies[key];

                                }
                            }

                            var pzCallFlag = false;
                            pzCallExecute();

                            function pzCallExecute() {
                                var toStorePzChatJsid = globalID;
                                var pzChatObject = '';
                                if(sessionStorage.getItem('storedPZObject')){
                                    pzChatObject = sessionStorage.getItem('storedPZObject');
                                }
                                if (toStorePzChatJsid != base64_decode(sessionStorage.getItem('storedPzChatJsid')) ||
                                    sessionStorage.getItem('storedSPZObject') == null ||
                                    sessionStorage.getItem('storedSPZObject') === '{}' ||
                                    sessionStorage.getItem('storedCPZObject') == null ||
                                    sessionStorage.getItem('storedSCPZObject') === '{}' ||
                                    sessionStorage.getItem('storedPZObject') == null ||
                                    sessionStorage.getItem('storedPZObject') === '{}'
                                ) {
                                    sessionStorage.setItem('storedPzChatJsid', base64_encode(toStorePzChatJsid));
                                    if (debugMode) {
                                        console.log("changed", base64_decode(sessionStorage.getItem('storedPzChatJsid')));
                                    }
                                    pzCallFlag = true;
                                } else {
                                    if (debugMode) {
                                        console.log("No change", toStorePzChatJsid);
                                    }
                                }
                            }

                            if (pzCallFlag && pzLogin) {
                                if (propsVars.isUFDPnzlCall === 'true') {
                                    var signStatus = "False";
                                    if (pzLogin) {
                                        signStatus = "True";
                                    }
                                    var pznlufdsrc = '';
                                    var pznsecure = '';

                                    //UFD api call
                                    if (pzLogin) {
                                        pznlufdsrc = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                                        pznsecure = "Secure";
                                    } else {
                                        pznlufdsrc = isProd ? 'https://www.verizonwireless.com/UFDRender/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/StartFlow';
                                    }

                                    var PznSuccessFlag = false;
                                    $vzChat.ajax({
                                        url: pznlufdsrc,
                                        //url : 'http://localhost:8081/UFDRender/StartFlow',
                                        async: true,
                                        cache: true,
                                        method: "GET",
                                        dataType: "text",
                                        contentType: "text/plain",
                                        xhrFields: {
                                            withCredentials: true
                                        },
                                        data:$vzChat.param({"CurrentStep":-1,"Flow":"Wireless\\Chat\\Personalization"+pznsecure,"SignInStatus":signStatus,"Shared":"True","Platform":"Web","Referer":currentUrl}),
                                        success: function (msg,status,request) {
                                            PznSuccessFlag = true;
                                            if(debugMode) {
                                                console.log(msg);
                                            }
                                            buildPersonalizationData(JSON.parse(msg));
                                        },
                                        error: function (msg,status,error) {
                                            if(debugMode) {
                                                console.log(status + ': ' + error);
                                            }
                                        },
                                        complete: function (msg,status) {
                                            if(!PznSuccessFlag){
                                                if(debugMode) {
                                                    console.log(status);
                                                }
                                            }
                                        }
                                    });
                                    //buildPersonalizationData(udata);

                                } //ufdflag check end

                                function buildPersonalizationData(pzarray) {

                                    var templateRoot = '';

                                    //for ufd api call
                                    if(propsVars.isUFDPnzlCall === 'true') {
                                        if (pzarray[0].Inputs.newTemp.Section.Inputs != null) {
                                            templateRoot = pzarray[0].Inputs.newTemp.Section.Inputs;
                                            getPnzlData(templateRoot);
                                        }
                                    }

                                    function checkPZVars(pzkey) {

                                        if (carePData) {
                                            $vzChat.each(propsVars.carePzVars.split(","), function(index, cvarlist) {
                                                if(cvarlist != "" && pzkey.indexOf(cvarlist)> -1) {
                                                    pzVarsFlag = true;
                                                }
                                            });
                                        } else if (salesPData) {
                                            $vzChat.each(propsVars.salesPzVars.split(","), function(index, svarlist) {
                                                if(svarlist != "" && pzkey.indexOf(svarlist)> -1) {
                                                    pzVarsFlag = true;
                                                }
                                            });
                                        } else if(PData) {
                                            $vzChat.each(propsVars.combPzVars.split(","), function(index, combvarlist) {
                                                if(combvarlist != "" && pzkey.indexOf(combvarlist)> -1) {
                                                    pzVarsFlag = true;
                                                }
                                            });
                                        } else {
                                            pzVarsFlag = false;
                                        }
                                    }

                                    function getPnzlData(pzData) {
                                        for (var key in pzData) {
                                            var pzVarsFlag = false;
                                            if(pzData[key]) {
                                                if (carePData) {
                                                    $vzChat.each(propsVars.carePzVars.split(","), function(index, cvarlist) {
                                                        if(cvarlist != "" && key.indexOf(cvarlist)> -1) {
                                                            personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = pzData[key];
                                                            sessionStorage.setItem('storedCPZObject', JSON.stringify(personalizeObj));
                                                        }
                                                    });
                                                } else if (salesPData) {
                                                    $vzChat.each(propsVars.salesPzVars.split(","), function(index, svarlist) {
                                                        if(svarlist != "" && key.indexOf(svarlist)> -1) {
                                                            personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = pzData[key];
                                                            sessionStorage.setItem('storedSPZObject', JSON.stringify(personalizeObj));
                                                        }
                                                    });
                                                } else if (PData) {
                                                    $vzChat.each(propsVars.combPzVars.split(","), function(index, combvarlist) {
                                                        if(combvarlist != "" && key.indexOf(combvarlist)> -1) {
                                                            personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = pzData[key];
                                                            sessionStorage.setItem('storedPZObject', JSON.stringify(personalizeObj));
                                                        }
                                                    });
                                                } else {
                                                    personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = pzData[key];
                                                    sessionStorage.setItem('storedPZObject', JSON.stringify(personalizeObj));
                                                }
                                            }
                                        }
                                        //session storage
                                        if(debugMode) {
                                            console.log(personalizeObj);
                                        }
                                    }
                                } //build pz object end

                                //RTDdata build function
                                /*function buildPersonalizationRTDData(rtdarray) {
                                 var rtdtemplateRoot = '';

                                 //for ufd api call
                                 if(propsVars.isUFDPnzlCall === 'true') {
                                 if (rtdarray[0].Inputs.newTemp.Section.Inputs != null) {
                                 rtdtemplateRoot = rtdarray[0].Inputs.newTemp.Section.Inputs;
                                 getRTDData(rtdtemplateRoot);
                                 }
                                 }

                                 function getRTDData(rtdData) {
                                 for (var key in rtdData) {
                                 if(rtdData[key]) {
                                 if (rtdPData) {
                                 $vzChat.each(propsVars.rtdVars.split(","), function(index, rtdvarlist) {
                                 if(rtdvarlist != "" && key.indexOf(rtdvarlist)> -1) {
                                 personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = rtdData[key];
                                 sessionStorage.setItem('storedPZObject', JSON.stringify(personalizeObj));
                                 }
                                 });
                                 }
                                 }
                                 }
                                 //session storage
                                 if(debugMode) {
                                 console.log(personalizeObj);
                                 }
                                 }
                                 }*/

                                //Banner data build function
                                /*function buildPersonalizationBannerData(bannerarray) {
                                 var bannertemplateRoot = '';

                                 //for ufd api call
                                 if(propsVars.isUFDPnzlCall === 'true') {
                                 if (bannerarray[0].Inputs.newTemp.Section.Inputs != null) {
                                 bannertemplateRoot = bannerarray[0].Inputs.newTemp.Section.Inputs;
                                 getBannerData(bannertemplateRoot);
                                 }
                                 }

                                 function getBannerData(bannerData) {
                                 for (var key in bannerData) {
                                 if(bannerData[key]) {
                                 personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = bannerData[key];
                                 sessionStorage.setItem('storedPZObject', JSON.stringify(personalizeObj));
                                 }
                                 }
                                 //session storage
                                 if(debugMode) {
                                 console.log(personalizeObj);
                                 }
                                 }
                                 }*/


                            } //pz call flag end

                            if((!pzCallFlag) && (base64_decode(sessionStorage.getItem('storedPzChatJsid')) == globalID)) {
                                var retrievedObject = "";
                                if (carePData) {
                                    retrievedObject = sessionStorage.getItem('storedCPZObject');
                                } else if (salesPData) {
                                    retrievedObject = sessionStorage.getItem('storedSPZObject');
                                } else {
                                    retrievedObject = sessionStorage.getItem('storedPZObject');
                                }
                                vzwpznDL = {PersonalizedData: JSON.parse(retrievedObject)};
                            } else {
                                vzwpznDL = {PersonalizedData: personalizeObj};
                            }

                            if (typeof vzwDL === 'undefined') {
                                $vzChat.extend(vzwGNDL, vzwpznDL);
                            } else {
                                if(debugMode) {
                                    console.log("personalized data",vzwpznDL)
                                }
                            }
                        }


                        //RTD
                        function RTDFunctions() {
                            var rtdCallFlag = false;

                            var rtdglobalID = '';
                            rtdCallExecute();


                            var rtdLogin = false;

                            function getAllChatCookies() {
                                var cookieChatGNParts = document.cookie.split(";"),
                                    allChatGNcookies = {};
                                for (var i = 0; i < cookieChatGNParts.length; i++) {
                                    var name_value = cookieChatGNParts[i],
                                        equals_pos = name_value.indexOf("="),
                                        name       = unescape(name_value.slice(0, equals_pos)).trim(),
                                        value      = unescape(name_value.slice(equals_pos + 1));

                                    allChatGNcookies[name] = value;
                                }
                                return allChatGNcookies;
                            }

                            function rtdCallExecute() {
                                var rtdChatCookies = getAllChatCookies();
                                for (key in rtdChatCookies) {
                                    if (key.indexOf('GLOBALID') === 0) {
                                        rtdglobalID = rtdChatCookies[key];
                                    }
                                    if (key.indexOf('loggedIn') === 0) {
                                        rtdLogin = rtdChatCookies[key];

                                    }
                                }
                                var toStoreRTDChatJsid = rtdglobalID;
                                var rtdChatObject = '';
                                if(sessionStorage.getItem('storedRTDObject')){
                                    rtdChatObject = sessionStorage.getItem('storedRTDObject');
                                }
                                if (toStoreRTDChatJsid != base64_decode(sessionStorage.getItem('storedRTDChatJsid')) ||
                                    sessionStorage.getItem('storedRTDObject') == null ||
                                    sessionStorage.getItem('storedRTDObject') === '{}') {
                                    sessionStorage.setItem('storedRTDChatJsid', base64_encode(toStoreRTDChatJsid));
                                    if (debugMode) {
                                        console.log("changed", base64_decode(sessionStorage.getItem('storedRTDChatJsid')));
                                    }
                                    rtdCallFlag = true;
                                } else {
                                    if (debugMode) {
                                        console.log("No change", toStoreRTDChatJsid);
                                    }
                                }
                            }


                            var signStatus = "False";
                            if (rtdLogin) {
                                signStatus = "True";
                            }
                            var rtdufdsrc = '';
                            var rtdsecure = '';

                            //RTD UFD api call
                            if (rtdLogin) {
                                rtdufdsrc = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                                rtdsecure = "Secure";
                            } else {
                                rtdufdsrc = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                                rtdsecure = "Secure";
                            }
                            var RTDSuccessFlag = false;
                            //var ufdRTDurl = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                            if (rtdCallFlag && lflag) {
                                $vzChat.ajax({
                                    url: rtdufdsrc,
                                    async: true,
                                    cache: true,
                                    method: "GET",
                                    dataType: "text",
                                    contentType: "text/plain",
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    //data:$vzChat.param({"CurrentStep":-1,"Flow":"Wireless\\Chat\\RTDAPIForCustomerChurn","SignInStatus":signStatus,"customerId":"0270135794","billAccNum":"00001","Shared":"True","Platform":"Web","Referer":currentUrl}),
                                    data:$vzChat.param({"CurrentStep":-1,"Flow":"Wireless\\Chat\\RTDAPIForCustomerChurn","SignInStatus":signStatus,"Shared":"True","Platform":"Web","Referer":currentUrl}),
                                    success: function (msg,status,request) {
                                        RTDSuccessFlag = true;
                                        if(debugMode) {
                                            console.log("RTD",msg);
                                        }
                                        buildPersonalizationRTDData(JSON.parse(msg));
                                    },
                                    error: function (msg,status,error) {
                                        if(debugMode) {
                                            console.log(status + ': ' + error);
                                        }
                                    },
                                    complete: function (msg,status) {
                                        if(!RTDSuccessFlag){
                                            if(debugMode) {
                                                console.log("RTD",status);
                                            }
                                        }
                                    }
                                });  //RTD api call end
                            }
                            //RTDdata build function
                            function buildPersonalizationRTDData(rtdarray) {
                                var rtdtemplateRoot = '';

                                //for ufd api call
                                if(propsVars.isUFDPnzlCall === 'true') {
                                    if (rtdarray[0].Inputs.newTemp.Section.Inputs != null) {
                                        rtdtemplateRoot = rtdarray[0].Inputs.newTemp.Section.Inputs;
                                        getRTDData(rtdtemplateRoot);
                                    }
                                }

                                function getRTDData(rtdData) {
                                    for (var key in rtdData) {
                                        if(rtdData[key]) {
                                            if (rtdPData) {
                                                $vzChat.each(propsVars.rtdVars.split(","), function(index, rtdvarlist) {
                                                    if(rtdvarlist != "" && key.indexOf(rtdvarlist)> -1) {
                                                        personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = rtdData[key];
                                                        sessionStorage.setItem('storedRTDObject', JSON.stringify(personalizeObj));
                                                    }
                                                });
                                            }
                                        }
                                    }
                                    //session storage
                                    if(debugMode) {
                                        console.log(personalizeObj);
                                    }
                                }
                            }

                            if((!rtdCallFlag) && (base64_decode(sessionStorage.getItem('storedRTDChatJsid')) == rtdglobalID)) {
                                var retrievedObject = "";
                                retrievedObject = sessionStorage.getItem('storedRTDObject');
                                vzwpznDL = {PersonalizedData: JSON.parse(retrievedObject)};
                            } else {
                                vzwpznDL = {PersonalizedData: personalizeObj};
                            }

                            if (typeof vzwDL === 'undefined') {
                                $vzChat.extend(vzwGNDL, vzwpznDL);
                            } else {
                                if(debugMode) {
                                    console.log("personalized data",vzwpznDL)
                                }
                            }

                        }


                        //gridwall banner
                        function gwBannerFunctions() {
                            var bannerCallFlag = false;
                            bannerCallExecute();
                            var bannerglobalID = '';

                            function getAllChatCookies() {
                                var cookieChatGNParts = document.cookie.split(";"),
                                    allChatGNcookies = {};
                                for (var i = 0; i < cookieChatGNParts.length; i++) {
                                    var name_value = cookieChatGNParts[i],
                                        equals_pos = name_value.indexOf("="),
                                        name       = unescape(name_value.slice(0, equals_pos)).trim(),
                                        value      = unescape(name_value.slice(equals_pos + 1));

                                    allChatGNcookies[name] = value;
                                }
                                return allChatGNcookies;
                            }

                            function bannerCallExecute() {
                                var bannerChatCookies = getAllChatCookies();
                                for (key in bannerChatCookies) {

                                    if (key.indexOf('GLOBALID') === 0) {
                                        bannerglobalID = bannerChatCookies[key];

                                    }
                                }
                                var toStoreBannerChatJsid = bannerglobalID;
                                var bannerChatObject = '';
                                if(sessionStorage.getItem('storedBannerObject')){
                                    bannerChatObject = sessionStorage.getItem('storedBannerObject');
                                }
                                if (toStoreBannerChatJsid != base64_decode(sessionStorage.getItem('storedBannerChatJsid')) ||
                                    sessionStorage.getItem('storedBannerObject') == null ||
                                    sessionStorage.getItem('storedBannerObject') === '{}') {
                                    sessionStorage.setItem('storedBannerChatJsid',base64_encode(toStoreBannerChatJsid));
                                    if (debugMode) {
                                        console.log("changed", base64_decode(sessionStorage.getItem('toStoreBannerChatJsid')));
                                    }
                                    bannerCallFlag = true;
                                } else {
                                    //read from session and display
                                    var storedHtml = sessionStorage.getItem('storedBannerObject');
                                    buildPersonalizationBannerHtmlData(storedHtml);
                                    if (debugMode) {
                                        console.log("No change", toStoreBannerChatJsid);
                                    }
                                }
                            }

                            //Banner api call
                            var BannerSuccessFlag = false;
                            var ufdBannerurl = isProd ? 'https://www.verizonwireless.com/UFDRender/secure/StartFlow' : 'https://testman.verizonwireless.com/UFDRender/secure/StartFlow';
                            if(bannerCallFlag) {
                                $vzChat.ajax({
                                    url: ufdBannerurl,
                                    async: true,
                                    cache: true,
                                    method: "GET",
                                    dataType: "text",
                                    contentType: "text/plain",
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    data:$vzChat.param({"CurrentStep":-1,"Flow":"Wireless\\Chat\\RTDAPIForUpgradeAALMsg","Shared":"True","Platform":"Web","Referer":currentUrl}),
                                    success: function (msg,status,request) {
                                        BannerSuccessFlag = true;
                                        if(debugMode) {
                                            console.log("Banner api",msg);
                                        }
                                        //buildPersonalizationBannerData(JSON.parse(msg));
                                        buildPersonalizationBannerHtmlData(msg);
                                        sessionStorage.setItem('storedBannerObject', msg);
                                    },
                                    error: function (msg,status,error) {
                                        if(debugMode) {
                                            console.log(status + ': ' + error);
                                        }
                                    },
                                    complete: function (msg,status) {
                                        if(!BannerSuccessFlag){
                                            if(debugMode) {
                                                console.log("Banner api",status);
                                            }
                                        }
                                    }
                                });  //Banner api call end
                            }
                            //Banner data build function
                            function buildPersonalizationBannerData(bannerarray) {
                                var bannertemplateRoot = '';

                                //for ufd api call
                                if(propsVars.isUFDPnzlCall === 'true') {
                                    if (bannerarray[0].Inputs.newTemp.Section.Inputs != null) {
                                        bannertemplateRoot = bannerarray[0].Inputs.newTemp.Section.Inputs;
                                        getBannerData(bannertemplateRoot);
                                    }
                                }

                                function getBannerData(bannerData) {
                                    for (var key in bannerData) {
                                        if(bannerData[key]) {
                                            personalizeObj[key.replace(/[\s _]+/g, '').toUpperCase()] = bannerData[key];
                                            sessionStorage.setItem('storedBannerObject', JSON.stringify(personalizeObj));
                                        }
                                    }
                                    //session storage
                                    if(debugMode) {
                                        console.log(personalizeObj);
                                    }
                                }
                            }

                            function buildPersonalizationBannerHtmlData(html) {
                                var bannerHtml = html;
                                $vzChat('#user_msg_div').append('<div>'+ bannerHtml +'</div>');

                            }

                            //Banner code
                            if (typeof vzwpznDL === 'undefined') {

                                if (debugMode) {
                                    console.log('VZ_Chat Init Warning -> vzwpznDL not found');
                                }

                            } else {
                                function gwBannerFunction() {
                                    console.log("banner DL",vzwpznDL);
                                    var bannerMsg = '';
                                    if (vzwpznDL.PersonalizedData.MSGCDUPG !='' ||
                                        vzwpznDL.PersonalizedData.MSGCDUPG1 !='' ||
                                        vzwpznDL.PersonalizedData.MSGCDUPG2 !='' ||
                                        vzwpznDL.PersonalizedData.MSGCDUPG3 !='' ||
                                        vzwpznDL.PersonalizedData.MSGCDUPG4 !='' ||
                                        vzwpznDL.PersonalizedData.MSGCDUPG5 !='') {
                                        bannerMsg = propsVars.gwBannerText;
                                    }

                                    console.log("banner",bannerMsg);
                                    $vzChat('#upgrade').append('<div align="center"><h3>'+ bannerMsg +'</h3></div>');
                                }

                            }

                        }


                        //to build InqSite ID and other required variables for global nav
                        function vzwChatMiscFunctions() {
                            //Page id url mapping and inqSiteID
                            var pageIDURLMap = [];
                            if (window.inqSiteID) {
                                var inqSiteID=window.inqSiteID;
                            } else {
                                var inqSiteID = '';
                            }
                            //var inqSiteID=window.inqSiteID;

                            //Page id for MyUsage pages
                            $vzChat(document).ready(function() {

                                if (currentUrl.indexOf("verizonwireless.com/myv/myusage/") != -1 ) {
                                    inqSiteID = 36366133;
                                    $vzChat("#myVZWUsageTabNav a").click(function() {
                                        if($vzChat(this).attr("id") == "UT-Overview") {
                                            inqSiteID = 36366133;
                                        } else if($vzChat(this).attr("id") == "UT-Data") {
                                            inqSiteID = 36366134;
                                        } else if($vzChat(this).attr("id") == "UT-Minutes") {
                                            inqSiteID = 36366135;
                                        } else if($vzChat(this).attr("id") == "UT-Messages") {
                                            inqSiteID = 36366136;
                                        } else if($vzChat(this).attr("id") == "UT-Hotspot") {
                                            inqSiteID = 36366137;
                                        } else if($vzChat(this).attr("id") == "aButtonGB") {
                                            inqSiteID = 36219651;
                                        } else if($vzChat(this).attr("id") == "aButtonPercent") {
                                            inqSiteID = 36219651;
                                        } else {
                                            inqSiteID = 36366133;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);
                                    });

                                    //for new flow
                                    $vzChat( "#dataUtilizationLink" ).click(function() {
                                        if($vzChat(this).attr("value") == "next step") {
                                            inqSiteID = 36366134;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);

                                    });
                                }



                                if (currentUrl.indexOf("verizonwireless.com/myv/productsapps/") != -1 ) {
                                    inqSiteID = 36366189;
                                    VZ_Chat_GN.reInit(inqSiteID);
                                }

                                //Page id for accessories checkout existing customer
                                if (currentUrl.indexOf("verizonwireless.com/accessories/sso/checkout.jsp") != -1 ) {

                                    if(document.getElementById("billingPage").value != null && document.getElementById("billingPage").value == 'CHECKOUT_BILLING_INFO_EXISTING') {
                                        inqSiteID = 36366239;
                                        $vzChat( "#ship-info-complete" ).click(function() {
                                            if($vzChat(this).attr("value") == "next step") {
                                                inqSiteID = 36366240;
                                            }
                                            VZ_Chat_GN.reInit(inqSiteID);

                                        });
                                        $vzChat( "#billing-info-complete" ).click(function() {
                                            if($vzChat(this).attr("value") == "next step") {
                                                inqSiteID = 36366241;
                                            }
                                            VZ_Chat_GN.reInit(inqSiteID);
                                        });

                                    }

                                }

                                //Page id for accessories checkout new customer
                                if (currentUrl.indexOf("verizonwireless.com/accessories/checkout/checkout.jsp") != -1 ) {

                                    if(document.getElementById("billingPage").value != null && document.getElementById("billingPage").value == 'CHECKOUT_BILLING_INFO_NEW') {

                                        inqSiteID = 36366236;
                                        $vzChat( "#ship-info-complete" ).click(function() {
                                            if($vzChat(this).attr("value") == "next step") {
                                                inqSiteID = 36366237;
                                            }
                                            VZ_Chat_GN.reInit(inqSiteID);
                                        });
                                        $vzChat( "#billing-info-complete" ).click(function() {
                                            if($vzChat(this).attr("value") == "next step") {
                                                inqSiteID = 36366238;
                                            }
                                            VZ_Chat_GN.reInit(inqSiteID);
                                        });

                                    }

                                }

                                //Page id for prepaid flow
                                if (currentUrl.indexOf("verizonwireless.com/prepaid/browse/reviewCart.jsp") != -1 ) {

                                    $vzChat("#shoppingWindow>li a.badge.open").on("click",function() {
                                        if($vzChat(this).attr("title") == "Set Up Your Prepaid Plan") {
                                            //alert($vzChat(this).attr("title"));
                                            inqSiteID = 36366206;
                                        }
                                        if($vzChat(this).attr("title") == "Add Accessories") {
                                            //alert($vzChat(this).attr("title"));
                                            inqSiteID = 36366207;
                                        }
                                        if($vzChat(this).attr("title") == "Add Data & Features") {
                                            //alert($vzChat("#shoppingWindow>li").attr("data-id"));
                                            //alert($vzChat(this).attr("title"));
                                            inqSiteID = 36366208;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);
                                    });

                                }


                                //Page id for checkout pages
                                if (currentUrl.indexOf("verizonwireless.com/vzw/checkout/checkout.jsp") != -1 ) {
                                    //inqSiteID = 36371660;
                                    $vzChat("#shippingInfoInclude>a").on("click",function() {
                                        if($vzChat(this).attr("title") == "Edit Shipping Information") {
                                            //alert($vzChat(this).attr("title"));
                                            inqSiteID = 36371659;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);
                                    });

                                    $vzChat("#paymentInfoInclude>a").on("click",function() {
                                        if($vzChat(this).attr("title") == "Edit Payment Information") {
                                            //alert($vzChat(this).attr("title"));
                                            inqSiteID = 36371660;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);
                                    });

                                    $vzChat("#deviceInfoInclude>a").on("click",function() {
                                        if($vzChat(this).attr("data-device") != "") {
                                            //alert($vzChat(this).attr("data-device"));
                                            inqSiteID = 36371658;
                                        }
                                        VZ_Chat_GN.reInit(inqSiteID);
                                    });
                                }


                                //Page id for switch and activate pages
                                if (currentUrl.indexOf("verizonwireless.com/vzw/browse/devicechange/home.jsp") != -1 ) {
                                    inqSiteID = 36417186;
                                    pageIDURLMap.push({id:36417194, url:'#switch/selectDevice'});
                                    pageIDURLMap.push({id:36417195, url:'#switch/reviewOrder'});
                                    pageIDURLMap.push({id:36417196, url:'#switch/backupMethod-Device1'});
                                    pageIDURLMap.push({id:36417197, url:'#switch/backupMethod-Device2'});
                                    pageIDURLMap.push({id:36417198, url:'#switch/swapDevices'});
                                    pageIDURLMap.push({id:36417199, url:'#switch/swapSIM'});
                                    pageIDURLMap.push({id:36417200, url:'#switch/activationInstructions-Device1'});
                                    pageIDURLMap.push({id:36417201, url:'#switch/activationInstructions-Device2'});

                                    for(i=0;i<pageIDURLMap.length;i++){
                                        if (currentUrl.indexOf(pageIDURLMap[i].url) != -1) {
                                            inqSiteID = pageIDURLMap[i].id;
                                        }
                                    }
                                    VZ_Chat_GN.reInit(inqSiteID);
                                }
                                //Page id for MyVerizon Billpay
                                if (currentUrl.indexOf("wbillpay.verizonwireless.com") != -1 || currentUrl.indexOf("nbillpay.verizonwireless.com") != -1 || currentUrl.indexOf("ebillpay.verizonwireless.com") != -1  || currentUrl.indexOf("sbillpay.verizonwireless.com") != -1 ) {

                                    pageIDURLMap.push({id:36366171, url:'/vzw/accountholder/mybill/BillingSummary.action'});
                                    pageIDURLMap.push({id:36366171, url:'/vzw/accountholder/mybill/mybill.action'});
                                    pageIDURLMap.push({id:36366172, url:'/vzw/accountholder/mybill/BillViewLine.action'});
                                    pageIDURLMap.push({id:36375850, url:'/vzw/accountholder/mybill/UsageSummary.action'});
                                    pageIDURLMap.push({id:36375851, url:'/vzw/accountholder/vdd/VddBilledUsage.action'});
                                    pageIDURLMap.push({id:36366173, url:'/vzw/accountholder/mybill/KBUDetails.action'});
                                    pageIDURLMap.push({id:36366174, url:'/vzw/accountholder/mybill/KBUDetails.action'});
                                    pageIDURLMap.push({id:36375852, url:'/vzw/accountholder/mybill/VoiceDetails.action'});
                                    pageIDURLMap.push({id:36366175, url:'/vzw/accountholder/rtr/RTRExt.action'});
                                    pageIDURLMap.push({id:36366176, url:'/vzw/accountholder/rtr/RTRExt.action'});
									pageIDURLMap.push({id:36366177, url:'/vzw/accountholder/rtr/RTRUpdateAlertThresholdsInCCES.action'});
									pageIDURLMap.push({id:36545487, url:'/vzw/accountholder/uc/showFBTCDashboard.action'});
                                    pageIDURLMap.push({id:36459854, url:'#/whatchanged/'});
                                    pageIDURLMap.push({id:36459855, url:'#/dttactivity/'});
                                    pageIDURLMap.push({id:36375851, url:'#/datautil/'});
                                    pageIDURLMap.push({id:36366172, url:'#/breakdown/line/'});
                                    pageIDURLMap.push({id:36459856, url:'#/breakdown/account/'});
                                    pageIDURLMap.push({id:36366173, url:'#/log/data/'});
                                    pageIDURLMap.push({id:36375852, url:'#/log/talk/'});
                                    pageIDURLMap.push({id:36375852, url:'#/log/text/'});
                                    pageIDURLMap.push({id:36366171, url:'#/whatschangedNew'});

                                    for(i=0;i<pageIDURLMap.length;i++){
                                        if (currentUrl.indexOf(pageIDURLMap[i].url) != -1) {
                                            //if ((pageIDURLMap[i].url).indexOf(currentUrl) != -1) {
                                            //pageId =  pageIDURLMap[i].id;
                                            inqSiteID = pageIDURLMap[i].id;

                                        }
                                    }

                                    VZ_Chat_GN.reInit(inqSiteID);
                                }

                            });
                            /////////////////////////end page id

                            ///// Device type detection
                            function findDevice() {
                                var platform = '';
                                var useragent = navigator.userAgent,
                                    mobile = /IEMobile|Windows Phone|Lumia/i.test(useragent) ? 'w' : /iPhone|iP[oa]d/.test(useragent) ? 'i' : /Android/.test(useragent) ? 'a' : /BlackBerry|PlayBook|BB10/.test(useragent) ? 'b' : /Mobile Safari/.test(useragent) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(useragent) ? 1 : 0,
                                    tablet = /Tablet|iPad|Nexus|GT/i.test(useragent)
                                if (tablet) {
                                    platform = 'tablet';
                                } else if (mobile != '0') {
                                    platform = 'mobile';
                                } else {
                                    platform = 'desktop';
                                }
                                return platform;
                            }
                            deviceType = findDevice();
                            ////////////// end device detection


                            ////// Setting the Channel and section
                            var isSection = '';
                            var isChannel = '';
                            var isMarket = '';
                            if (typeof s == 'object') {
                                isSection = (typeof s.prop1 == 'undefined' || typeof s.prop1 == undefined) ? true: false;
                                isChannel = (typeof s.channel == 'undefined' || typeof s.channel == undefined) ? true: false;
                                isMarket = (typeof s.eVar12 == 'undefined' || typeof s.eVar12 == undefined) ? true: false;
                                //}

                                if(!isMarket) {
                                    vzwMarket = s.eVar12;
                                }

                                if (!isSection) {
                                    vzwSection = s.prop1;
                                } else {
                                    if (currentUrl.indexOf("/smartphones") != -1) {
                                        vzwSection = "/"+deviceType+" store/devices";
                                    } else if (currentUrl.indexOf("/myv") != -1 || currentUrl.indexOf("/vzw/accountholder") != -1) {
                                        vzwSection = "/my verizon/postpay";
                                    } else if (currentUrl.indexOf("/support") != -1) {
                                        vzwSection = window.location.pathname;
                                    } else {
                                        vzwSection = window.location.pathname;
                                    }
                                }

                                if (!isChannel) {
                                    vzwChannel = s.channel;
                                } else {
                                    if (currentUrl.indexOf("/smartphones") != -1) {
                                        vzwChannel = "/"+deviceType+" store";
                                    } else if (currentUrl.indexOf("/myv") != -1 || currentUrl.indexOf("/vzw/accountholder") != -1) {
                                        vzwChannel = "/my verizon";
                                    } else if (currentUrl.indexOf("/support") != -1) {
                                        vzwChannel = "/dspt";
                                    } else {
                                        vzwChannel = "/"+deviceType+" store";
                                    }
                                }
                            } // end object type s check

                            ////////////// end section and channel setting

                        } //end misc function


                        //TC Chat Init, VZ_Chat_GN Init
                        function vzwChatFunction() {
                            var src = isProd ? 'https://verizon.inq.com/chatskins/launch/inqChatLaunch10004593.js' : 'https://verizon-dev.inq.com/chatskins/launch/inqChatLaunch10004593.js';
                            //if (!isEnsighten) {
                            VZ_Chat_GN.init({
                                'id' : id,
                                'src' : src
                            }, {
                                'debugMode' : debugMode,
                                'scrubber' : VZ_Chat_GN.TCDataScrubber,
                                'builder' : VZ_Chat_GN.TCDataBuilder

                            });
                            //} //Ensighten check end

                        }


                    } //pageExists end
                } //kill switch end

            }, 'text'); //get file function end
        })() // Kill switch, url check and pageExists function end


    } else {
        //window.setTimeout(vzwChatScript, 500);
        console.log("jQuery not found--->" + "VZ jquery is required");

    } //end of window.$vzChat check

}  // end of JQuery check

var VZ_Chat_GN = (function () {
    // Internal references
    var out = {},
        tChatTag,
        debugMode,
        legacyMode,
        chatVars,
        dl,
        fnQueue = [],
        console = window.console,
        isReady = false;

    // Setting disconnect flag cookie for retention customers.
    function setCookie(){
        if (document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html?d=yes') != -1 || 
		document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html') != -1 ||
		document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20line') != -1 ||
		document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20service') != -1)
		{
            document.cookie = "disconnect=1; domain=.verizonwireless.com; path=/;";
        }
    }

    /*   function reInit (pageId) {
     alert(pageId);
     if(typeof Inq!='undefined' && Inq!=null && pageId!='undefined' && pageId!=null) {

     Inq.reinitChat(pageId);
     }

     }*/
    //anum encryption starts

    function encode(dl) {
        //console.log("DL in encode function", dl);
        var Aes = {};
        var a = dl.authentication.accountNumber;
        var b = dl.authentication.mdn;
        Aes.cipher = function(input, w) {
            var Nb = 4;               // block size (in words): no of columns in state (fixed at 4 for AES)
            var Nr = w.length/Nb - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

            var state = [[],[],[],[]];  // initialise 4xNb byte-array 'state' with input [?3.4]
            for (var i=0; i<4*Nb; i++) state[i%4][Math.floor(i/4)] = input[i];

            state = Aes.addRoundKey(state, w, 0, Nb);

            for (var round=1; round<Nr; round++) {
                state = Aes.subBytes(state, Nb);
                state = Aes.shiftRows(state, Nb);
                state = Aes.mixColumns(state, Nb);
                state = Aes.addRoundKey(state, w, round, Nb);
            }

            state = Aes.subBytes(state, Nb);
            state = Aes.shiftRows(state, Nb);
            state = Aes.addRoundKey(state, w, Nr, Nb);

            var output = new Array(4*Nb);  // convert state to 1-d array before returning [?3.4]
            for (var i=0; i<4*Nb; i++) output[i] = state[i%4][Math.floor(i/4)];

            return output;
        };

        Aes.addRoundKey = function(state, w, rnd, Nb) {
            for (var r=0; r<4; r++) {
                for (var c=0; c<Nb; c++) state[r][c] ^= w[rnd*4+c][r];
            }
            return state;
        };

        Aes.subBytes = function(s, Nb) {
            for (var r=0; r<4; r++) {
                for (var c=0; c<Nb; c++) s[r][c] = Aes.sBox[s[r][c]];
            }
            return s;
        };

        Aes.shiftRows = function(s, Nb) {
            var t = new Array(4);
            for (var r=1; r<4; r++) {
                for (var c=0; c<4; c++) t[c] = s[r][(c+r)%Nb];  // shift into temp copy
                for (var c=0; c<4; c++) s[r][c] = t[c];         // and copy back
            }          // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
            return s;  // see asmaes.sourceforge.net/rijndael/rijndaelImplementation.pdf
        };


        Aes.mixColumns = function(s, Nb) {
            for (var c=0; c<4; c++) {
                var a = new Array(4);  // 'a' is a copy of the current column from 's'
                var b = new Array(4);  // 'b' is a?{02} in GF(2^8)
                for (var i=0; i<4; i++) {
                    a[i] = s[i][c];
                    b[i] = s[i][c]&0x80 ? s[i][c]<<1 ^ 0x011b : s[i][c]<<1;
                }
                // a[n] ^ b[n] is a?{03} in GF(2^8)
                s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // {02}?a0 + {03}?a1 + a2 + a3
                s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 ? {02}?a1 + {03}?a2 + a3
                s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + {02}?a2 + {03}?a3
                s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // {03}?a0 + a1 + a2 + {02}?a3
            }
            return s;
        };

        Aes.addRoundKey = function(state, w, rnd, Nb) {
            for (var r=0; r<4; r++) {
                for (var c=0; c<Nb; c++) state[r][c] ^= w[rnd*4+c][r];
            }
            return state;
        };

        Aes.sBox =  [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
            0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
            0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
            0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
            0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
            0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
            0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
            0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
            0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
            0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
            0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
            0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
            0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
            0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
            0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
            0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];

        Aes.rCon = [ [0x00, 0x00, 0x00, 0x00],
            [0x01, 0x00, 0x00, 0x00],
            [0x02, 0x00, 0x00, 0x00],
            [0x04, 0x00, 0x00, 0x00],
            [0x08, 0x00, 0x00, 0x00],
            [0x10, 0x00, 0x00, 0x00],
            [0x20, 0x00, 0x00, 0x00],
            [0x40, 0x00, 0x00, 0x00],
            [0x80, 0x00, 0x00, 0x00],
            [0x1b, 0x00, 0x00, 0x00],
            [0x36, 0x00, 0x00, 0x00] ];

        if (typeof String.prototype.utf8Encode == 'undefined') {
            String.prototype.utf8Encode = function() {
                return unescape( encodeURIComponent( this ) );
            };
        }

        if (typeof String.prototype.utf8Decode == 'undefined') {
            String.prototype.utf8Decode = function() {
                try {
                    return decodeURIComponent( escape( this ) );
                } catch (e) {
                    return this; // invalid UTF-8? return as-is
                }
            };
        }

        if (typeof String.prototype.base64Encode == 'undefined') {
            String.prototype.base64Encode = function() {
                if (typeof btoa != 'undefined') return btoa(this); // browser
                if (typeof Buffer != 'undefined') return new Buffer(this, 'binary').toString('base64'); // Node.js
                throw new Error('No Base64 Encode');
            };
        }

        if (typeof String.prototype.base64Decode == 'undefined') {
            String.prototype.base64Decode = function() {
                if (typeof atob != 'undefined') return atob(this); // browser
                if (typeof Buffer != 'undefined') return new Buffer(this, 'base64').toString('binary'); // Node.js
                throw new Error('No Base64 Decode');
            };
        }

        Aes.keyExpansion = function(key) {
            var Nb = 4;            // block size (in words): no of columns in state (fixed at 4 for AES)
            var Nk = key.length/4; // key length (in words): 4/6/8 for 128/192/256-bit keys
            var Nr = Nk + 6;       // no of rounds: 10/12/14 for 128/192/256-bit keys

            var w = new Array(Nb*(Nr+1));
            var temp = new Array(4);

            // initialise first Nk words of expanded key with cipher key
            for (var i=0; i<Nk; i++) {
                var r = [key[4*i], key[4*i+1], key[4*i+2], key[4*i+3]];
                w[i] = r;
            }

            // expand the key into the remainder of the schedule
            for (var i=Nk; i<(Nb*(Nr+1)); i++) {
                w[i] = new Array(4);
                for (var t=0; t<4; t++) temp[t] = w[i-1][t];
                // each Nk'th word has extra transformation
                if (i % Nk == 0) {
                    temp = Aes.subWord(Aes.rotWord(temp));
                    for (var t=0; t<4; t++) temp[t] ^= Aes.rCon[i/Nk][t];
                }
                // 256-bit key has subWord applied every 4th word
                else if (Nk > 6 && i%Nk == 4) {
                    temp = Aes.subWord(temp);
                }
                // xor w[i] with w[i-1] and w[i-Nk]
                for (var t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t];
            }

            return w;
        };

        Aes.Ctr = {};

        Aes.Ctr.encrypt= function(plaintext, password, nBits) {
            var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
            if (!(nBits==128 || nBits==192 || nBits==256)) throw new Error('Key size is not 128 / 192 / 256');
            plaintext = String(plaintext).utf8Encode();
            password = String(password).utf8Encode();

            //plaintext = Base64._utf8_decode(plaintext)
            // password = Base64._utf8_decode(password);

            // use AES itself to encrypt password to get cipher key (using plain password as source for key
            // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
            var nBytes = nBits/8;  // no bytes in key (16/24/32)
            var pwBytes = new Array(nBytes);
            for (var i=0; i<nBytes; i++) {  // use 1st 16/24/32 chars of password for key
                pwBytes[i] = i<password.length ?  password.charCodeAt(i) : 0;
            }
            var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes)); // gives us 16-byte key
            key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

            // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A ?B.2): [0-1] = millisec,
            // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
            var counterBlock = new Array(blockSize);

            var nonce = (new Date()).getTime();  // timestamp: milliseconds since 1-Jan-1970
            var nonceMs = nonce%1000;
            var nonceSec = Math.floor(nonce/1000);
            var nonceRnd = Math.floor(Math.random()*0xffff);
            // for debugging: nonce = nonceMs = nonceSec = nonceRnd = 0;

            for (var i=0; i<2; i++) counterBlock[i]   = (nonceMs  >>> i*8) & 0xff;
            for (var i=0; i<2; i++) counterBlock[i+2] = (nonceRnd >>> i*8) & 0xff;
            for (var i=0; i<4; i++) counterBlock[i+4] = (nonceSec >>> i*8) & 0xff;

            // and convert it to a string to go on the front of the ciphertext
            var ctrTxt = '';
            for (var i=0; i<8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);

            // generate key schedule - an expansion of the key into distinct Key Rounds for each round
            var keySchedule = Aes.keyExpansion(key);

            var blockCount = Math.ceil(plaintext.length/blockSize);
            var ciphertext = '';

            for (var b=0; b<blockCount; b++) {
                // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
                // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
                for (var c=0; c<4; c++) counterBlock[15-c] = (b >>> c*8) & 0xff;
                for (var c=0; c<4; c++) counterBlock[15-c-4] = (b/0x100000000 >>> c*8);

                var cipherCntr = Aes.cipher(counterBlock, keySchedule);  // -- encrypt counter block --

                // block size is reduced on final block
                var blockLength = b<blockCount-1 ? blockSize : (plaintext.length-1)%blockSize+1;
                var cipherChar = new Array(blockLength);

                for (var i=0; i<blockLength; i++) {
                    // -- xor plaintext with ciphered counter char-by-char --
                    cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b*blockSize+i);
                    cipherChar[i] = String.fromCharCode(cipherChar[i]);
                }
                ciphertext += cipherChar.join('');

                // if within web worker, announce progress every 1000 blocks (roughly every 50ms)
                if (typeof WorkerGlobalScope != 'undefined' && self instanceof WorkerGlobalScope) {
                    if (b%1000 == 0) self.postMessage({ progress: b/blockCount });
                }
            }

            //ciphertext =  (ctrTxt+ciphertext).utf8Encode();
            ciphertext =  Base64.encode(ctrTxt+ciphertext);

            return ciphertext;
        };

        Aes.subWord = function(w) {
            for (var i=0; i<4; i++) w[i] = Aes.sBox[w[i]];
            return w;
        };

        Aes.rotWord = function(w) {
            var tmp = w[0];
            for (var i=0; i<3; i++) w[i] = w[i+1];
            w[3] = tmp;
            return w;
        };

        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=0;var c1=0;var c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
        var c = Aes.Ctr.encrypt(a, b, 256);
        dl.authentication['aHash'] = c;
    }

    //anum encryption ends


    function bindDL(scrubber, builder){
        if (typeof vzwDL === 'undefined' || dlCheck === false) {
            if (debugMode) {
                console.log('VZ_Chat Init Warning -> vzwDL not found');
            }
            isvzwdl = false;
            //return;

        }

        //isvzwdl = false; //added this to test if vzwDL not found on a page. Need to remove this for prod

        if (isvzwdl) {
            dl = vzwDL;
            //$vzChat.extend(dl, vzwpznDL);
            if (debugMode) {
                console.log("DL true", dl);
            }
            dl.page = dl.page || {};
            dl.page.chat = dl.page.chat || [];
            chatVars = dl.page.chat;
            isReady = true;

        } else {
            dl = vzwGNDL;
            if (debugMode) {
                console.log("DL at GN", dl);
            }
            dl.page = dl.page || {};
            dl.page.chat = dl.page.chat || [];
            chatVars = dl.page.chat;
            isReady = true;


        } // isvzwdl else condition end

        //an encode
        if (anEncode) {
            if (dl.authentication && dl.authentication.mdn && dl.authentication.accountNumber && !(dl.authentication.prepayInd=="Y" || dl.authentication.prepayInd=="1")) {
                encode(dl);
            }
        }

    } //bindDL function end



    function downloadChatTag() {
        //if (legacyMode) {

        //disableLPChat();
        //}
        var chnageJqVer=false;
        try {

            $vzChat.ajax({
                    dataType: 'script',
                    cache: true,
                    url: tChatTag.src
                })
                .done(function (script, status) {
                    if (debugMode) {
                        console.log('Init - Tag Loaded -> { ID: ', tChatTag.id, '}');
                    }
                })
                .fail(function (jqxhr, settings, exception) {
                    if (debugMode) {
                        console.error('Init - Tag Load Error -> { ID: ', tChatTag.id, ', HTTP Status: ', jqxhr.status, '}');
                    }
                });
        } catch (tagexception) {
            chnageJqVer = true;
            if (debugMode) {
                console.error('Chat tag excpetion--->', tagexception);
            }
        } finally {
            if (chnageJqVer) {
                $vzChat.ajax({
                        dataType: 'script',
                        cache: true,
                        url: tChatTag.src
                    })
                    .success(function(script, status) {
                        if (debugMode) {
                            console.log('Init - Tag Loaded -> { ID: ', tChatTag.id, '}');
                        }
                    })
                    .error(function (jqxhr, settings, exception) {
                        if (debugMode) {
                            console.error('Init - Tag Load Error -> { ID: ', tChatTag.id, ', HTTP Status: ', jqxhr.status, '}');
                        }
                    })
                    .complete(function (msg,status) {
                        if (debugMode) {
                            console.log('Init - Tag Loaded at final block -> { ID: ', tChatTag.id, '}');
                        }

                    });
            }
        }
    }

    function addVar(name, value, scope, mobile) {
        var newVar;

        if (!chatVars) {
            throw getException('DataLayerUndefinedException', 'Data Layer is Undefined');
        }

        newVar = {
            'name'      : name,
            'value'     : value,
            'scope'     : scope,
            'mobile'    : mobile,
            'toString'  : function () {
                return '{ name: '+ name +
                    ', value: ' + value + ', scope: '+ scope +
                    ', mobile: ' + mobile + ' }';
            }
        };

        if (typeof name !== 'string' ||
            typeof value === 'undefined' ||
            (typeof scope !== 'string' || (scope !== 'page' && scope !== 'session')) ||
            typeof mobile !== 'boolean') {

            throw getException('InvalidVariableException',
                'Invalid variable format: ' + newVar.toString());
        }

        if (debugMode) {
            console.log('Adding var: ' + newVar.toString());
        }

        chatVars[chatVars.length] = newVar;
    }

    // Class utilities
    function isEventSupported(eventName) {
        var TAGNAMES =
        {
            'select':'input','change':'input',
            'submit':'form','reset':'form',
            'error':'img','load':'img','abort':'img'
        };

        var el = document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        var isSupported = (eventName in el);

        if (!isSupported) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] == 'function';
        }

        el = null;
        return isSupported;
    }

    function getException(name, msg) {
        // TODO: Use new Error();

        return {
            'name'      : name,
            'msg'       : msg,
            'toString'  : function () {return this.name + ': ' + this.msg;}
        };
    }

    /*function reInit (pageId) {

     if(typeof Inq!='undefined' && Inq!=null && pageId!='undefined' && pageId!=null) {

     Inq.reinitChat(pageId);
     }

     } */


    function initVarsGN (scrubber, builder) {

        try {

            //bindDL(scrubber, builder);
            //bindDL();


            while (fnQueue.length > 0) {
                fnQueue.pop()();
            }

            if (scrubber) {
                //console.log('DL: ',dl);
                scrubber = new scrubber(VZ_Chat_GN, dl);
                if (debugMode) {
                    console.log('Data scrubbing with: ' + scrubber.toString());
                }

                scrubber.scrub();
            } else {
                if (debugMode) {
                    console.log('Warning! -> Data scrubber is not defined');
                }
            }

            if (builder) {
                builder = new builder(VZ_Chat_GN, dl);
                if (debugMode) {
                    console.log('Data building with: ' + builder.toString());
                }

                builder.build();
            } else {
                if (debugMode) {
                    console.log('Warning! -> Data builder is not defined');
                }
            }


        } catch (err) {
            // If the DL is not found we are not going to be able
            // to provide most of the user/conversion data.
            // However, we are capturing the exception so that
            // customers don't lose the ability to chat.
            console.log('Critical [and ignored] error on init -> ' + err);
        }
    }

    function initVars (scrubber, builder) {

        try {

            bindDL(scrubber, builder);

            while (fnQueue.length > 0) {
                fnQueue.pop()();
            }

            if (typeof vzwDL === 'undefined') {
                if (debugMode) {
                    console.log('VZ_Chat Init Warning -> vzwDL not found');
                }
                return;

            }
            if (scrubber) {
                //console.log('DL: ',dl);
                scrubber = new scrubber(VZ_Chat_GN, dl);
                if (debugMode) {
                    console.log('Data scrubbing with: ' + scrubber.toString());
                }
                scrubber.scrub();
            } else {
                if (debugMode) {
                    console.log('Warning! -> Data scrubber is not defined');
                }
            }

            if (builder) {
                builder = new builder(VZ_Chat_GN, dl);
                if (debugMode) {
                    console.log('Data building with: ' + builder.toString());
                }

                builder.build();
            } else {
                if (debugMode) {
                    console.log('Warning! -> Data builder is not defined');
                }
            }




        } catch (err) {
            // If the DL is not found we are not going to be able
            // to provide most of the user/conversion data.
            // However, we are capturing the exception so that
            // customers don't lose the ability to chat.
            console.log('Critical [and ignored] error on init -> ' + err);
        }
    }

    // Public methods
    function init (chatTagDef, options) {


        // IE Console Polyfill
        if (typeof console === 'undefined') {
            window.console = {};
            console.log = function () {};
            console.error = function () {};
        }

        setInterval(keepSessionAlive, 300000);

        // String.trim() Polyfill
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        if (isEventSupported('DOMContentLoaded')) {
            console.error('Browser is not supported! IE9+ is required');
            return;
        }

        tChatTag    = chatTagDef;
        options     = options || {};
        debugMode   = options.debugMode || false;
        legacyMode  = options.legacyMode || true;

        if (document.readyState === 'interactive' || document.readyState === 'complete') { // Ensighten import fallbacks
            setCookie();
            initVars(options.scrubber, options.builder);
            //initVarsGN(options.scrubber, options.builder);
            downloadChatTag();
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                initVars(options.scrubber, options.builder);
                //initVarsGN(options.scrubber, options.builder);
                downloadChatTag();
            });
        }
    }

    function contactUsInit (chatTagDef, options) {
        // IE Console Polyfill
        if (typeof console === 'undefined') {
            window.console = {};
            console.log = function () {};
            console.error = function () {};
        }

        // String.trim() Polyfill
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        if (isEventSupported('DOMContentLoaded')) {
            console.error('Browser is not supported! IE9+ is required');
            return;
        }

        tChatTag    = chatTagDef;
        options     = options || {};
        debugMode   = options.debugMode || false;
        legacyMode  = options.legacyMode || true;

        initVars(options.scrubber, options.builder);
        downloadChatTag();
    }

    function reInit(pageId) {
        if (typeof Inq != 'undefined' && !!pageId) {
            if (Inq.isInqInitialized) {
                Inq.reinitChat(pageId);
            } else {
                setTimeout(reInit, 500);
            }
        }
    }
    

    function setVar() {
        var tName, tValue, tScope, tMobile;

        if (arguments.length >= 2) {

            // Single variable pass setVar(name, value, scope, mobile).
            // Mobile defaults to true, and scope defaults to 'page'.
            tName   = arguments[0],
                tValue  = arguments[1],
                tScope  = arguments[2] || 'page',
                tMobile = (typeof arguments[3] == 'undefined') ? true : arguments[3];

            try {
                addVar(tName, tValue, tScope, tMobile);
            } catch (err) {
                if (debugMode) {
                    console.log('setVar error ->' + err);
                }

                if (err.name == 'DataLayerUndefinedException' && !isReady) {
                    fnQueue.push(function () {
                        setVar(tName, tValue, tScope, tMobile);
                    });
                }
            }

        } else if (arguments.length == 1) {
            // TODO: Variables passed as an object
            throw getException('OperationNotSupported',
                'This operation is not supported');
        } else {
            throw getException('InvalidArgument',
                'Argument count is invalid');
        }
    }

    function getChatTag () {
        return tChatTag;
    }

    function isDebugModeOn () {
        return debugMode;
    }

    function keepSessionAlive () {
        var chatFlag = window.isChatActive;
        /*if (chatFlag) {
            var urlDomain = document.location.href.substring(0,document.location.href.indexOf('.com/'));
            //var url = urlDomain+'.com/vzw/zipwall/setLocation.jsp';
			var url = 'https://www.verizonwireless.com/vzw/zipwall/setLocation.jsp';
            $vzChat.ajax({
                url:url,
                type: "GET" });
        }*/
    }

    // External API Definitions
    out.getChatTag      = getChatTag;
    out.init            = init;
    out.reInit          = reInit;
    out.contactUsInit   = contactUsInit;
    out.setVar          = setVar;
    out.getException    = getException;
    out.isDebugModeOn   = isDebugModeOn;
    out.keepSessionAlive = keepSessionAlive;

    return out;
})();
VZ_Chat_GN.TCDataBuilder = function (that, dl) {

    var name = 'TCDataBuilder';


    //that.setVar('MobileNumber', vzwDL.mdn);
    //that.setVar('custType', vzwDL.custType);

    //Init
    if (!dl) {
        throw that.getException('InvalidParamException', 'Data layer is undefined');
    }

    function buildVisitorAttr () {
        var tVar,
            chatVars = dl.page.chat,
            isMobile = typeof dl.page.platform !== 'undefined' &&
                (dl.page.platform.toLowerCase() === 'mobile' || dl.page.platform.toLowerCase() === 'tablet');

        inqCustData = {};



        for (var i = 0; i < chatVars.length; i++) {
            tVar = chatVars[i];

            if ((isMobile && tVar.mobile) || !isMobile) {
                //console.log('tVar.name',tVar.name);
                //console.log('tVar.value',tVar.value);
                if(tVar.value != null) {inqCustData[tVar.name] = tVar.value.toString();}
                //inqCustData[tVar.name] = tVar.value.toString();
            }
        }

        buildCartInfo(inqCustData, dl);
        buildSessionVariables(inqCustData);
        buildPersonalizedData(inqCustData, dl);
        //buildGlobalSessionId(inqCustData);
        //buildCookieValues(inqCustData);

        if (that.isDebugModeOn()) {
            console.log('TCDataBuilder visitor attributes ' +
                'build complete for: inqCustData');
        }

        that.vendorData = that.vendorData || {};
        that.vendorData.inqCustData = inqCustData;
    }

    // copy the cart object from vzwDL layer to inqCustData
    function buildCartInfo(inqCustData, dl) {
        if(dl.cart){

            if (that.isDebugModeOn()) {
                console.log('TCDataBuilder cart items ' +
                    'build starts for: inqCustData');
            }
            inqCustData['cart'] = dl.cart;
            if (that.isDebugModeOn()) {
                console.log('TCDataBuilder cart items ' +
                    'build completes for: inqCustData');
            }

        }
    }

    // copy the Personlization object from vzwDL layer to inqCustData
    function buildPersonalizedData(inqCustData, dl) {
        //console.log("inside inq", dl.PersonalizedData, "test", vzwpznDL);
        /*if(dl.PersonalizedData){
         if (that.isDebugModeOn()) {
         console.log('TCDataBuilder personalized data ' +
         'build starts for: inqCustData');
         }
         inqCustData['PersonalizedData'] = dl.PersonalizedData;
         if (that.isDebugModeOn()) {
         console.log('TCDataBuilder personalized data ' +
         'build completes for: inqCustData');
         }

         } */
        if(vzwpznDL && vzwpznDL.PersonalizedData){
            if (that.isDebugModeOn()) {
                console.log('TCDataBuilder personalized data ' +
                    'build starts for: inqCustData');
            }
            inqCustData['PersonalizedData'] = vzwpznDL.PersonalizedData;
            if (that.isDebugModeOn()) {
                console.log('TCDataBuilder personalized data ' +
                    'build completes for: inqCustData');
            }

        }
    }


    function buildSessionVariables (inqCustData) {
        var name = "GLOBALID=";
        var globalSessionIDValue = "";
        var disconnectName = "disconnect="
        var disconnectFlag = "0";
        var cookies = document.cookie.split(';');

        for(var i = 0; i <cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                globalSessionIDValue=c.substring(name.length,c.length);
            }
            if (c.indexOf(disconnectName) == 0) {
                disconnectFlag=c.substring(disconnectName.length,c.length);
            }
        }
        inqCustData['globalSessionID'] = globalSessionIDValue;
        inqCustData['disconnectFlag'] = disconnectFlag;
        if (that.isDebugModeOn()) {
            console.log('Added the global session id : ' +globalSessionIDValue+ ' to inqCustData');
            console.log('Added the disconnectFlag : ' +disconnectFlag+ ' to inqCustData');
        }
    }




    function buildConvVars () {

        if (dl.purchase) {
            var aQty,
                aPrice,
                aProductType,
                anItem,
                totals;

            // TODO: Move this to the top of the file
            inqClientOrderNum       = dl.purchase.orderNumber;
            inqSalesProducts        = [];
            inqSalesQuantities      = [];
            inqSalesPrices          = [];
            inqSalesProductTypes    = [];
            inqOrderType	    = dl.purchase.orderType;

            totals = {
                'puOrderTotal'  : 0,
                'pOrderTotal'   : 0,
                'aOrderTotal'   : 0,
                'auOrderTotal'  : 0
            };

            for (var i = 0; i < dl.purchase.items.length; i++) {
                anItem = dl.purchase.items[i];

                
		if (!anItem.productId) {
			if (anItem.category.toLowerCase() == "accessory" || anItem.category.toLowerCase() == "accessories")
			{
				anItem.productId = "bundle";
			}
			else
                continue;					
         }
				

                aQty            = anItem.quantity || 1;
                aPrice          = anItem.price || 0;
                aProductType    = anItem.category || '';

                if (dl.purchase.contractType && dl.purchase.contractType.toLowerCase() == "month to month")
				{
					if (anItem.category && anItem.category.toLowerCase() != "plan" && anItem.category.toLowerCase() != "sim")
					{				
                        totals.puOrderTotal += anItem.quantity;
                        totals.pOrderTotal += Math.round(anItem.price * anItem.quantity * 100) / 100;
                        inqSalesQuantities.push(aQty);
					}
					else
					{					                
                        inqSalesQuantities.push(0);
					}
				}
				else
				{
				  switch (anItem.category.toLowerCase()) {
                    case 'device' :
                        totals.puOrderTotal += anItem.quantity;
                        totals.pOrderTotal += Math.round(anItem.price * anItem.quantity * 100) / 100;
                        inqSalesQuantities.push(aQty);
                        break;
                    case 'accessory' :
                        totals.auOrderTotal += anItem.quantity;
                        totals.aOrderTotal += Math.round(anItem.price * anItem.quantity * 100) / 100;
                        inqSalesQuantities.push(aQty);
                        break;
					case 'accessories':
						totals.auOrderTotal += anItem.quantity;
						totals.aOrderTotal += Math.round(anItem.price * anItem.quantity * 100) / 100;
						inqSalesQuantities.push(aQty);
						break;
                    default :
                        inqSalesQuantities.push(0);
                        break;
					}
				}

                inqSalesProducts.push(getProductString(anItem, dl.purchase.contractType));
                //inqSalesQuantities.push(aQty);
                inqSalesPrices.push(aPrice);
                inqSalesProductTypes.push(aProductType);

            }

            inqOtherInfo = getOtherInfoString(totals);

            if (that.isDebugModeOn()) {
                console.log('TCDataBuilder conversion vars build complete for: inqClientOrderNum, ' +
                    'inqSalesProductTypes, inqSalesProducts, inqSalesQuantities, inqSalesPrices, inqOtherInfo');
            }

            that.vendorData = that.vendorData || {};
            that.vendorData.inqClientOrderNum       = inqClientOrderNum;
            that.vendorData.inqSalesProductTypes    = inqSalesProductTypes;
            that.vendorData.inqSalesProducts        = inqSalesProducts;
            that.vendorData.inqSalesQuantities      = inqSalesQuantities;
            that.vendorData.inqSalesPrices          = inqSalesPrices;
            that.vendorData.inqOrderType	    = inqOrderType;
            that.vendorData.inqOtherInfo            = inqOtherInfo;
        }


    }

    function getProductString (item, term) {
        //TODO: Add inq* sample data
        //TODO: Add vzwDL samples

        var out     = '',
            aCat    = item.category || '',
            aName   = item.name || '',
            aTerm   = term && item.category !== 'accessory' ? term : '',
            anID    = item.productId;

        out += 'CAT:' + aCat.replace('~', '').trim() + '~';
        out += 'NAM:' + aName.replace('~', '').trim() + '~';
        out += 'TERM:' + aTerm.replace('~', '').trim() + '~';
        out += 'ID:' + anID.replace('~', '').trim();

        return out;
    }

    function getOtherInfoString (totals) {
        var out = '';
        out += 'PUOT:' + totals.puOrderTotal + '~';
        out += 'POT:' + totals.pOrderTotal + '~';
        out += 'AUOT:' + totals.auOrderTotal + '~';
        out += 'AOT:' + totals.aOrderTotal;

        return out;
    }

    // TODO: Add this to parent prototype
    this.toString = function () {
        return name;
    };

    this.build = function () {
        buildVisitorAttr();
        if(dl.purchase){
            if (dl.purchase.items && dl.purchase.items.length > 0) {
                buildConvVars();
            }
        }
    };



    //Touch Commerce Site Cat Tracking
    //chatIdCookie code
    chatEngagedListener = {
        onChatEngagedEvent: function(evt) {
            chatEngagedVariable = evt.chatID;
            document.cookie = "chatIdCookie=" + chatEngagedVariable + "; domain=.verizonwireless.com; path=/;";
        }
    };
    InqRegistry = {
        listeners: [chatEngagedListener]
    };
    //chatIdCookie code end
    //Site Cat Tracking end

};
VZ_Chat_GN.TCDataScrubber = function (that, dl) {
    var name = 'TCDataScrubber';
    //console.log("DL scrubber", dl);
    //Init
    if (!dl) {
        //throw that.getException('InvalidParamException', 'Data layer is undefined');

        console.log('Data layer is undefined');
        return;
    }

    function isValidVar (name) {
        return name === 'Source_mobile_ind' ||
            name === 'mobile_visit' ||
            name === 'tablet_visit';
    }

    function scrubLPData () {
        if (typeof arrLPvars !== 'undefined') {
            for(var i = 0; i < arrLPvars.length; i++){
                if (isValidVar(arrLPvars[i].name)) {
                    that.setVar(arrLPvars[i].name, arrLPvars[i].value);
                }
            }

        } else if (typeof App !== 'undefined' &&
            typeof App.vars !== 'undefined' &&
            typeof App.vars.livePerson !== 'undefined') {

            for (var key in App.vars.livePerson) {
                if (isValidVar(key)) {
                    that.setVar(key, App.vars.livePerson[key]);
                }
            }
        } else {
            if (that.isDebugModeOn()) {
                console.log('Warning! Found no data structure to scrub');
                return;
            }
        }
    }

    // TODO: Promote this to parent prototype
    function scrubVisitorAttr () {
        //console.log("inside visitor attr", dl);
				
		var ecpdIdList = [['ME','3431005'],['ME','815125'],['ME','754444'],['ME','824311'],['ME','2235022'],['SL','607675'],['SL','741314'],
['SL','749150'],['SL','797058'],['SL','909204'],['SL','909883'],['SL','1539215'],['SL','1695270'],['SL','1695341'],['SL','1797110'],['SL','1797132'],['SL','1867324'],
['SL','1867342'],['SL','1867410'],['SL','2551412'],['SL','2612781'],['SL','2782233'],['SL','2782614'],['SL','2782680'],['SL','2782714'],['SL','2782737'],['SL','2783314'],
['SL','2783341'],['SL','2783475'],['SL','2783533'],['SL','2783956'],['SL','2783967'],['SL','2783975'],['SL','2818567'],['SL','2869714'],['SL','3099961'],['SL','3114951'],
['SL','3139143'],['SL','3470276'],['SL','3474513'],['SL','4003605'],['SL','4003600']]

		var visionCustType;

	    if (window.vzgn_c2cuniqueId)
		{	
			//set the shared cart ref number if available
			that.setVar('cartRefNum', window.vzgn_c2cuniqueId)
		}	
		
        if (dl.page) {
            that.setVar('Section', dl.page.section2);
            that.setVar('Market', dl.page.area);
            //added language for spanish pages
            if (document.location.href.indexOf('es.verizonwireless.com') != -1) {
                that.setVar('language', 'spanish');
            } else {
                that.setVar('language', dl.page.language);
            }
            that.setVar('channel', dl.page.channel);
            that.setVar('globalSessionID', dl.page.globalId);
            that.setVar('disconnectFlag', dl.page.disconnectFlag);
			that.setVar('flowName', dl.page.flowName)

        }

       // This for setting CustType for all the pages where accountNumber is not populated
        // Changed as part of employe account
        //console.log("Authentication "+dl.authentication+" "+dl.authentication.mdn);
        if (dl.authentication && dl.authentication.custType) {
            that.setVar('custType', dl.authentication.custType);
            if (dl.authentication.VCT) {
                that.setVar('visionCustType', dl.authentication.VCT);
				visionCustType = dl.authentication.VCT;
            }
            else if (dl.authentication.vct) {
                that.setVar('visionCustType', dl.authentication.vct);
				visionCustType = dl.authentication.vct;
            }
			else if (!dl.authentication.VCT && !dl.authentication.vct) {
			    visionCustType = dl.authentication.custType;
			}
			
            if ( visionCustType == 'PE'){
                that.setVar('ChatIndicatorCare','Y');
            }
            else if (visionCustType == 'CD' || visionCustType == 'CI' ||
                visionCustType == 'DD' || visionCustType == 'DJ' || visionCustType == 'FG' ||
                visionCustType == 'FL' || visionCustType == 'FS' || visionCustType == 'FT' ||
                visionCustType == 'FL' || visionCustType == 'FS' || visionCustType == 'FT' ||
                visionCustType == 'FW' || visionCustType == 'HR' || visionCustType == 'IE' ||
                visionCustType == 'LG' || visionCustType == 'NA' || visionCustType == 'ON' ||
                visionCustType == 'SB' || visionCustType == 'SG' || visionCustType == 'SN' ||
                visionCustType == 'SG' || visionCustType == 'SS' || visionCustType == 'SW' ||
                visionCustType == 'US' || visionCustType == 'UU' || visionCustType == 'WH' )
            {
                that.setVar('ChatIndicatorBGCO','Y');
            }            

            if(dl.authentication.prepayInd=="Y" || dl.authentication.prepayInd=="1")
            {
                that.setVar('ChatIndicatorPrepaid','Y');
            }
            
        }

        if (dl.authentication && dl.authentication.mdn) {
            //console.log("inside auth", dl);
            that.setVar('LoginFlag', '1');
            that.setVar('Role', dl.authentication.userRole);
            that.setVar('MobileNumber', dl.authentication.mdn);
            if(dl.authentication.prepayInd=="Y" || dl.authentication.prepayInd=="1")
                that.setVar('accountNumber', dl.authentication.accountNumber);
            else{
                that.setVar('accountNumber', dl.authentication.aHash);
            }
			
		    //set the encrypted MDN in the inqCustData
		    if (dl.authentication.mHash2)
		    {
				that.setVar('customCRM', dl.authentication.mHash2)
		    }			
			else if (dl.authentication.mhash2)
		    {
				that.setVar('customCRM', dl.authentication.mhash2)
		    }
						
			if (dl.authentication.impType && dl.authentication.impType.toLowerCase() === 'opal')
			{
				that.setVar('suppressChat','Y');
			} 
            
            that.setVar('GreetingName', dl.authentication.greetingName);
			if (dl.authentication.collectionsInd)
			{
				that.setVar('collectionsInd', dl.authentication.collectionsInd);
			}
            that.setVar('prepayInd', dl.authentication.prepayInd);

			//Set the ecpdId flag
			if (dl.authentication.ecpdId && visionCustType)
			{
			    for (var i = 0; i < ecpdIdList.length; i++) {
						if (ecpdIdList[i].indexOf(dl.authentication.ecpdId) != -1) {
						   if (ecpdIdList[i].indexOf(visionCustType) != -1)
						   {
								that.setVar('ChatIndicatorEA','Y');
								break;
						   }
					}
				}
			}
			else if (dl.authentication.ecpdID && visionCustType)
			{
			    for (var i = 0; i < ecpdIdList.length; i++) {
						if (ecpdIdList[i].indexOf(dl.authentication.ecpdID) != -1) {
						   if (ecpdIdList[i].indexOf(visionCustType) != -1)
						   {
								that.setVar('ChatIndicatorEA','Y');
								break;
						   }
					}
				}			
			}
			
            if (dl.authentication.ecpdId) {
                that.setVar('ECPDID', dl.authentication.ecpdId);
                
                if(visionCustType == 'BE' &&  (dl.authentication.ecpdId).indexOf("E") != -1){
                    that.setVar('ChatIndicatorCare','Y');
                }
                
                if(visionCustType == 'PE' &&  (dl.authentication.ecpdId).indexOf("E") != -1){
                    that.setVar('ChatIndicatorCare','Y');
                }

                if(visionCustType == 'BE' && (dl.authentication.ecpdId != null || dl.authentication.ecpdId != "") && (isNaN(dl.authentication.ecpdId )== false)) {
                    that.setVar('ChatIndicatorBGCO','Y');
                }

                if(visionCustType == 'BE' &&  (dl.authentication.ecpdId).indexOf("C") != -1){
                    that.setVar('ChatIndicatorBGCO','Y');
                }

            } else if (dl.authentication.ecpdID) {
                that.setVar('ECPDID', dl.authentication.ecpdID);                

                if(visionCustType == 'BE' &&  (dl.authentication.ecpdID).indexOf("E") != -1){
                    that.setVar('ChatIndicatorCare','Y');
                }
                
                if(visionCustType == 'PE' &&  (dl.authentication.ecpdID).indexOf("E") != -1){
                    that.setVar('ChatIndicatorCare','Y');
                }

                if(visionCustType == 'BE' && (dl.authentication.ecpdID != null || dl.authentication.ecpdID != "") && (isNaN(dl.authentication.ecpdID )== false)) {
                    that.setVar('ChatIndicatorBGCO','Y');
                }

                if(visionCustType == 'BE' &&  (dl.authentication.ecpdID).indexOf("C") != -1){
                    that.setVar('ChatIndicatorBGCO','Y');
                }

            }			
			else
			{
				if(visionCustType == 'BE' && (dl.authentication.ecpdId == null || dl.authentication.ecpdId == "")) {
                    that.setVar('ChatIndicatorCare','Y');
					
                } else if(visionCustType == 'BE' && (dl.authentication.ecpdID == null || dl.authentication.ecpdID == "")) {
                    that.setVar('ChatIndicatorCare','Y');
                }
			
			}

        }


    }

    // TODO: Add this to parent prototype
    this.toString = function () {
        return name;
    };

    this.scrub = function () {
        scrubLPData();
        scrubVisitorAttr();
    };
};

VZ_Chat_GN.TCSiteIdBuilder = function () {


};