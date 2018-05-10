//tealium universal tag - utag.49 ut4.0.201804110426, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){tealiumChatProdScript=function(){VZ_Chat=(function(){var out={},tChatTag,debugMode,legacyMode,chatVars,dl,fnQueue=[],console=window.console,isReady=false;function setCookie(){if(document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html?d=yes')!=-1||document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html')!=-1||document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20line')!=-1||document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20service')!=-1)
{document.cookie="disconnect=1; domain=.verizonwireless.com; path=/;";}
}
function encode(dl){var Aes={};var a=dl.authentication.accountNumber;var b=dl.authentication.mdn;Aes.cipher=function(input,w){var Nb=4;var Nr=w.length/Nb-1;var state=[[],[],[],[]];for(var i=0;i<4*Nb;i++)state[i%4][Math.floor(i/4)]=input[i];state=Aes.addRoundKey(state,w,0,Nb);for(var round=1;round<Nr;round++){state=Aes.subBytes(state,Nb);state=Aes.shiftRows(state,Nb);state=Aes.mixColumns(state,Nb);state=Aes.addRoundKey(state,w,round,Nb);}
state=Aes.subBytes(state,Nb);state=Aes.shiftRows(state,Nb);state=Aes.addRoundKey(state,w,Nr,Nb);var output=new Array(4*Nb);for(var i=0;i<4*Nb;i++)output[i]=state[i%4][Math.floor(i/4)];return output;};Aes.addRoundKey=function(state,w,rnd,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)state[r][c]^=w[rnd*4+c][r];}
return state;};Aes.subBytes=function(s,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)s[r][c]=Aes.sBox[s[r][c]];}
return s;};Aes.shiftRows=function(s,Nb){var t=new Array(4);for(var r=1;r<4;r++){for(var c=0;c<4;c++)t[c]=s[r][(c+r)%Nb];for(var c=0;c<4;c++)s[r][c]=t[c];}
return s;};Aes.mixColumns=function(s,Nb){for(var c=0;c<4;c++){var a=new Array(4);var b=new Array(4);for(var i=0;i<4;i++){a[i]=s[i][c];b[i]=s[i][c]&0x80?s[i][c]<<1^0x011b:s[i][c]<<1;}
s[0][c]=b[0]^a[1]^b[1]^a[2]^a[3];s[1][c]=a[0]^b[1]^a[2]^b[2]^a[3];s[2][c]=a[0]^a[1]^b[2]^a[3]^b[3];s[3][c]=a[0]^b[0]^a[1]^a[2]^b[3];}
return s;};Aes.addRoundKey=function(state,w,rnd,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)state[r][c]^=w[rnd*4+c][r];}
return state;};Aes.sBox=[0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];Aes.rCon=[[0x00,0x00,0x00,0x00],[0x01,0x00,0x00,0x00],[0x02,0x00,0x00,0x00],[0x04,0x00,0x00,0x00],[0x08,0x00,0x00,0x00],[0x10,0x00,0x00,0x00],[0x20,0x00,0x00,0x00],[0x40,0x00,0x00,0x00],[0x80,0x00,0x00,0x00],[0x1b,0x00,0x00,0x00],[0x36,0x00,0x00,0x00]];if(typeof String.prototype.utf8Encode=='undefined'){String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this));};}
if(typeof String.prototype.utf8Decode=='undefined'){String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this));}catch(e){return this;}};}
if(typeof String.prototype.base64Encode=='undefined'){String.prototype.base64Encode=function(){if(typeof btoa!='undefined')return btoa(this);if(typeof Buffer!='undefined')return new Buffer(this,'binary').toString('base64');throw new Error('No Base64 Encode');};}
if(typeof String.prototype.base64Decode=='undefined'){String.prototype.base64Decode=function(){if(typeof atob!='undefined')return atob(this);if(typeof Buffer!='undefined')return new Buffer(this,'base64').toString('binary');throw new Error('No Base64 Decode');};}
Aes.keyExpansion=function(key){var Nb=4;var Nk=key.length/4;var Nr=Nk+6;var w=new Array(Nb*(Nr+1));var temp=new Array(4);for(var i=0;i<Nk;i++){var r=[key[4*i],key[4*i+1],key[4*i+2],key[4*i+
3]];w[i]=r;}
for(var i=Nk;i<(Nb*(Nr+1));i++){w[i]=new Array(4);for(var t=0;t<4;t++)temp[t]=w[i-1][t];if(i%Nk==0){temp=Aes.subWord(Aes.rotWord(temp));for(var t=0;t<4;t++)temp[t]^=Aes.rCon[i/Nk][t];}
else if(Nk>6&&i%Nk==4){temp=Aes.subWord(temp);}
for(var t=0;t<4;t++)w[i][t]=w[i-Nk][t]^temp[t];}
return w;};Aes.Ctr={};Aes.Ctr.encrypt=function(plaintext,password,nBits){var blockSize=16;if(!(nBits==128||nBits==192||nBits==256))throw new Error('Key size is not 128 / 192 / 256');plaintext=String(plaintext).utf8Encode();password=String(password).utf8Encode();var nBytes=nBits/8;var pwBytes=new Array(nBytes);for(var i=0;i<nBytes;i++){pwBytes[i]=i<password.length?password.charCodeAt(i):0;}
var key=Aes.cipher(pwBytes,Aes.keyExpansion(pwBytes));key=key.concat(key.slice(0,nBytes-16));var counterBlock=new Array(blockSize);var nonce=(new Date()).getTime();var nonceMs=nonce%1000;var nonceSec=Math.floor(nonce/1000);var nonceRnd=Math.floor(Math.random()*0xffff);for(var i=0;i<2;i++)counterBlock[i]=(nonceMs>>>i*8)&0xff;for(var i=0;i<2;i++)counterBlock[i+2]=(nonceRnd>>>i*8)&0xff;for(var i=0;i<4;i++)counterBlock[i+4]=(nonceSec>>>i*8)&0xff;var ctrTxt='';for(var i=0;i<8;i++)ctrTxt+=String.fromCharCode(counterBlock[i]);var keySchedule=Aes.keyExpansion(key);var blockCount=Math.ceil(plaintext.length/blockSize);var ciphertext='';for(var b=0;b<blockCount;b++){for(var c=0;c<4;c++)counterBlock[15-c]=(b>>>c*8)&0xff;for(var c=0;c<4;c++)counterBlock[15-c-4]=(b/
0x100000000>>>c*8);var cipherCntr=Aes.cipher(counterBlock,keySchedule);var blockLength=b<blockCount-1?blockSize:(plaintext.length-
1)%blockSize+1;var cipherChar=new Array(blockLength);for(var i=0;i<blockLength;i++){cipherChar[i]=cipherCntr[i]^plaintext.charCodeAt(b*blockSize+i);cipherChar[i]=String.fromCharCode(cipherChar[i]);}
ciphertext+=cipherChar.join('');if(typeof WorkerGlobalScope!='undefined'&&self instanceof WorkerGlobalScope){if(b%1000==0)self.postMessage({progress:b/blockCount});}}
ciphertext=Base64.encode(ctrTxt+ciphertext);return ciphertext;};Aes.subWord=function(w){for(var i=0;i<4;i++)w[i]=Aes.sBox[w[i]];return w;};Aes.rotWord=function(w){var tmp=w[0];for(var i=0;i<3;i++)w[i]=w[i+1];w[3]=tmp;return w;};var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}
t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+
this._keyStr.charAt(u)+this._keyStr.charAt(a)}
return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}
if(a!=64){t=t+String.fromCharCode(i)}}
t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}
return t},_utf8_decode:function(e){var t="";var n=0;var r=0;var c1=0;var c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}
return t}};var c=Aes.Ctr.encrypt(a,b,256);dl.authentication['aHash']=c;}
function bindDL(){if(typeof vzwDL==='undefined'){inqCustData={};console.log('VZ_Chat Init Warning -> vzwDL not found');return;}
dl=vzwDL;dl.page=dl.page||{};dl.page.chat=dl.page.chat||[];chatVars=dl.page.chat;isReady=true;}
function downloadChatTag(){jQuery.ajax({dataType:'script',cache:true,url:tChatTag.src})
.done(function(script,status){if(debugMode){console.log('Init - Tag Loaded -> { ID: ',tChatTag.id,'}');}})
.fail(function(jqxhr,settings,exception){if(debugMode){console.error('Init - Tag Load Error -> { ID: ',tChatTag.id,', HTTP Status: ',jqxhr.status,'}');}});}
function addVar(name,value,scope,mobile){var newVar;if(!chatVars){throw getException('DataLayerUndefinedException','Data Layer is Undefined');}
newVar={'name':name,'value':value,'scope':scope,'mobile':mobile,'toString':function(){return'{ name: '+name+
', value: '+value+', scope: '+scope+
', mobile: '+mobile+' }';}};if(typeof name!=='string'||typeof value==='undefined'||(typeof scope!=='string'||(scope!=='page'&&scope!=='session'))||typeof mobile!=='boolean'){throw getException('InvalidVariableException','Invalid variable format: '+newVar.toString());}
if(debugMode){console.log('Adding var: '+newVar.toString());}
chatVars[chatVars.length]=newVar;}
function isEventSupported(eventName){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};var el=document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,'return;');isSupported=typeof el[eventName]=='function';}
el=null;return isSupported;}
function getException(name,msg){return{'name':name,'msg':msg,'toString':function(){return this.name+': '+this.msg;}};}
function initVars(scrubber,builder){try{setCookie()
bindDL();if(dl.authentication&&dl.authentication.mdn&&dl.authentication.accountNumber&&!(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")){encode(dl);}
while(fnQueue.length>0){fnQueue.pop()();}
if(scrubber){scrubber=new scrubber(VZ_Chat,dl);console.log('Data scrubbing with: '+scrubber.toString());scrubber.scrub();}else{console.log('Warning! -> Data scrubber is not defined');}
if(builder){builder=new builder(VZ_Chat,dl);console.log('Data building with: '+builder.toString());builder.build();}else{console.log('Warning! -> Data builder is not defined');}}catch(err){console.log('Critical [and ignored] error on init -> '+err);}}
function init(chatTagDef,options){if(typeof console==='undefined'){window.console={};console.log=function(){};console.error=function(){};}
setInterval(keepSessionAlive,300000);if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};}
if(isEventSupported('DOMContentLoaded')){console.error('Browser is not supported! IE9+ is required');return;}
tChatTag=chatTagDef;options=options||{};debugMode=options.debugMode||false;legacyMode=options.legacyMode||true;if(document.readyState==='interactive'||document.readyState==='complete'){initVars(options.scrubber,options.builder);downloadChatTag();}else{document.addEventListener('DOMContentLoaded',function(){initVars(options.scrubber,options.builder);downloadChatTag();});}}
function contactUsInit(chatTagDef,options){if(typeof console==='undefined'){window.console={};console.log=function(){};console.error=function(){};}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};}
if(isEventSupported('DOMContentLoaded')){console.error('Browser is not supported! IE9+ is required');return;}
tChatTag=chatTagDef;options=options||{};debugMode=options.debugMode||false;legacyMode=options.legacyMode||true;initVars(options.scrubber,options.builder);downloadChatTag();}
function reInit(pageId){if(typeof Inq!='undefined'&&!!pageId){if(Inq.isInqInitialized){Inq.reinitChat(pageId);}else{setTimeout(reInit,500);}}}
function setVar(){var tName,tValue,tScope,tMobile;if(arguments.length>=2){tName=arguments[0],tValue=arguments[1],tScope=arguments[2]||'page',tMobile=(typeof arguments[3]=='undefined')?true:arguments[3];try{addVar(tName,tValue,tScope,tMobile);}catch(err){if(debugMode){console.log('setVar error ->'+err);}
if(err.name=='DataLayerUndefinedException'&&!isReady){fnQueue.push(function(){setVar(tName,tValue,tScope,tMobile);});}}}else if(arguments.length==1){throw getException('OperationNotSupported','This operation is not supported');}else{throw getException('InvalidArgument','Argument count is invalid');}}
function getChatTag(){return tChatTag;}
function isDebugModeOn(){return debugMode;}
function keepSessionAlive(){var flag=window.isChatActive;if(flag){var urlDomain=document.location.href.substring(0,document.location.href.indexOf('.com/'));var url='https://www.verizonwireless.com/vzw/zipwall/setLocation.jsp';$.ajax({url:url,type:"GET"});}}
out.getChatTag=getChatTag;out.init=init;out.reInit=reInit;out.contactUsInit=contactUsInit;out.setVar=setVar;out.getException=getException;out.isDebugModeOn=isDebugModeOn;out.keepSessionAlive=keepSessionAlive;return out;})();VZ_Chat.LPMobileDataScrubber=function(that,dl){var name='LPMobileDataScrubber';if(!dl){throw that.getException('InvalidParamException','Data layer is undefined');}
function isValidVar(name){return name==='Source_mobile_ind'||name==='mobile_visit'||name==='tablet_visit';}
function scrubLPData(){if(typeof arrLPvars!=='undefined'){for(var i=0;i<arrLPvars.length;i++){if(isValidVar(arrLPvars[i].name)){that.setVar(arrLPvars[i].name,arrLPvars[i].value);}}}else if(typeof App!=='undefined'&&typeof App.vars!=='undefined'&&typeof App.vars.livePerson!=='undefined'){for(var key in App.vars.livePerson){if(isValidVar(key)){that.setVar(key,App.vars.livePerson[key]);}}}else{if(that.isDebugModeOn()){console.log('Warning! Found no data structure to scrub');return;}}}
function scrubVisitorAttr(){var ecpdIdList=[['ME','3431005'],['ME','815125'],['ME','754444'],['ME','824311'],['ME','2235022'],['SL','607675'],['SL','741314'],['SL','749150'],['SL','797058'],['SL','909204'],['SL','909883'],['SL','1539215'],['SL','1695270'],['SL','1695341'],['SL','1797110'],['SL','1797132'],['SL','1867324'],['SL','1867342'],['SL','1867410'],['SL','2551412'],['SL','2612781'],['SL','2782233'],['SL','2782614'],['SL','2782680'],['SL','2782714'],['SL','2782737'],['SL','2783314'],['SL','2783341'],['SL','2783475'],['SL','2783533'],['SL','2783956'],['SL','2783967'],['SL','2783975'],['SL','2818567'],['SL','2869714'],['SL','3099961'],['SL','3114951'],['SL','3139143'],['SL','3470276'],['SL','3474513'],['SL','4003605'],['SL','4003600']]
var visionCustType;if(window.vzgn_c2cuniqueId)
{that.setVar('cartRefNum',window.vzgn_c2cuniqueId)}
if(dl.page){that.setVar('Section',dl.page.section2);that.setVar('Market',dl.page.area);if(document.location.href.indexOf('es.verizonwireless.com')!=-1){that.setVar('language','spanish');}else{that.setVar('language',dl.page.language);}
that.setVar('channel',dl.page.channel);that.setVar('globalSessionID',dl.page.globalId);that.setVar('disconnectFlag',dl.page.disconnectFlag);that.setVar('flowName',dl.page.flowName)}
if(dl.authentication&&dl.authentication.custType){that.setVar('custType',dl.authentication.custType);if(dl.authentication.VCT){that.setVar('visionCustType',dl.authentication.VCT);visionCustType=dl.authentication.VCT;}
else if(dl.authentication.vct){that.setVar('visionCustType',dl.authentication.vct);visionCustType=dl.authentication.vct;}
else if(!dl.authentication.vct&&!dl.authentication.VCT){visionCustType=dl.authentication.custType;}
if(visionCustType=='PE'){that.setVar('ChatIndicatorCare','Y');}
else if(visionCustType=='CD'||visionCustType=='CI'||visionCustType=='DD'||visionCustType=='DJ'||visionCustType=='FG'||visionCustType=='FL'||visionCustType=='FS'||visionCustType=='FT'||visionCustType=='FL'||visionCustType=='FS'||visionCustType=='FT'||visionCustType=='FW'||visionCustType=='HR'||visionCustType=='IE'||visionCustType=='LG'||visionCustType=='NA'||visionCustType=='ON'||visionCustType=='SB'||visionCustType=='SG'||visionCustType=='SN'||visionCustType=='SG'||visionCustType=='SS'||visionCustType=='SW'||visionCustType=='US'||visionCustType=='UU'||visionCustType=='WH')
{that.setVar('ChatIndicatorBGCO','Y');}
if(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")
{that.setVar('ChatIndicatorPrepaid','Y');}}
if(dl.authentication&&dl.authentication.mdn){that.setVar('LoginFlag','1');that.setVar('Role',dl.authentication.userRole);that.setVar('MobileNumber',dl.authentication.mdn);if(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")
that.setVar('accountNumber',dl.authentication.accountNumber);else{that.setVar('accountNumber',dl.authentication.aHash);}
if(dl.authentication.mHash2)
{that.setVar('customCRM',dl.authentication.mHash2)}
else if(dl.authentication.mhash2)
{that.setVar('customCRM',dl.authentication.mhash2)}
if(dl.authentication.impType&&dl.authentication.impType.toLowerCase()==='opal')
{that.setVar('suppressChat','Y');}
that.setVar('GreetingName',dl.authentication.greetingName);if(dl.authentication.collectionsInd)
{that.setVar('collectionsInd',dl.authentication.collectionsInd);}
that.setVar('prepayInd',dl.authentication.prepayInd);if(dl.authentication.ecpdId&&visionCustType)
{for(var i=0;i<ecpdIdList.length;i++){if(ecpdIdList[i].indexOf(dl.authentication.ecpdId)!=-1){if(ecpdIdList[i].indexOf(visionCustType)!=-1)
{that.setVar('ChatIndicatorEA','Y');break;}}}}
else if(dl.authentication.ecpdID&&visionCustType)
{for(var i=0;i<ecpdIdList.length;i++){if(ecpdIdList[i].indexOf(dl.authentication.ecpdID)!=-1){if(ecpdIdList[i].indexOf(visionCustType)!=-1)
{that.setVar('ChatIndicatorEA','Y');break;}}}}
if(dl.authentication.ecpdId){that.setVar('ECPDID',dl.authentication.ecpdId);if(visionCustType=='BE'&&(dl.authentication.ecpdId).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='PE'&&(dl.authentication.ecpdId).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdId!=null||dl.authentication.ecpdId!="")&&(isNaN(dl.authentication.ecpdId)==false)){that.setVar('ChatIndicatorBGCO','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdId).indexOf("C")!=-1){that.setVar('ChatIndicatorBGCO','Y');}}else if(dl.authentication.ecpdID){that.setVar('ECPDID',dl.authentication.ecpdID);if(visionCustType=='BE'&&(dl.authentication.ecpdID).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='PE'&&(dl.authentication.ecpdID).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdID!=null||dl.authentication.ecpdID!="")&&(isNaN(dl.authentication.ecpdID)==false)){that.setVar('ChatIndicatorBGCO','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdID).indexOf("C")!=-1){that.setVar('ChatIndicatorBGCO','Y');}}
else
{if(visionCustType=='BE'&&(dl.authentication.ecpdId==null||dl.authentication.ecpdId=="")){that.setVar('ChatIndicatorCare','Y');}else if(visionCustType=='BE'&&(dl.authentication.ecpdID==null||dl.authentication.ecpdID=="")){that.setVar('ChatIndicatorCare','Y');}}}}
this.toString=function(){return name;};this.scrub=function(){scrubLPData();scrubVisitorAttr();};};VZ_Chat.TCMobileDataBuilder=function(that,dl){var name='TCMobileDataBuilder';if(!dl){throw that.getException('InvalidParamException','Data layer is undefined');}
function buildVisitorAttr(){var tVar,chatVars=dl.page.chat,isMobile=typeof dl.page.platform!=='undefined'&&(dl.page.platform.toLowerCase()==='mobile'||dl.page.platform.toLowerCase()==='tablet');inqCustData={};for(var i=0;i<chatVars.length;i++){tVar=chatVars[i];if((isMobile&&tVar.mobile)||!isMobile){inqCustData[tVar.name]=tVar.value.toString();}}
buildCartInfo(inqCustData,dl);buildSessionVariables(inqCustData);if(that.isDebugModeOn()){console.log('TCMobileDataBuilder visitor attributes '+
'build complete for: inqCustData');}
that.vendorData=that.vendorData||{};that.vendorData.inqCustData=inqCustData;}
function buildCartInfo(inqCustData,dl){if(dl.cart){if(that.isDebugModeOn()){console.log('TCMobileDataBuilder cart items '+
'build starts for: inqCustData');}
inqCustData['cart']=dl.cart;if(that.isDebugModeOn()){console.log('TCMobileDataBuilder cart items '+
'build completes for: inqCustData');}}}
function buildSessionVariables(inqCustData){var name="GLOBALID=";var globalSessionIDValue="";var disconnectName="disconnect="
var disconnectFlag="0";var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var c=cookies[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){globalSessionIDValue=c.substring(name.length,c.length);}
if(c.indexOf(disconnectName)==0){disconnectFlag=c.substring(disconnectName.length,c.length);}}
inqCustData['globalSessionID']=globalSessionIDValue;inqCustData['disconnectFlag']=disconnectFlag;if(that.isDebugModeOn()){console.log('Added the global session id : '+globalSessionIDValue+
' to inqCustData');console.log('Added the disconnectFlag : '+disconnectFlag+
' to inqCustData');}}
function buildConvVars(){if(dl.purchase){var aQty,aPrice,aProductType,anItem,totals;inqClientOrderNum=dl.purchase.orderNumber;inqSalesProducts=[];inqSalesQuantities=[];inqSalesPrices=[];inqSalesProductTypes=[];inqOrderType=dl.purchase.orderType;totals={'puOrderTotal':0,'pOrderTotal':0,'aOrderTotal':0,'auOrderTotal':0};for(var i=0;i<dl.purchase.items.length;i++){anItem=dl.purchase.items[i];if(!anItem.productId){if(anItem.category.toLowerCase()=="accessory"||anItem.category.toLowerCase()=="accessories")
{anItem.productId="bundle";}
else
continue;}
aQty=anItem.quantity||1;aPrice=anItem.price||0;aProductType=anItem.category||'';if(dl.purchase.contractType&&dl.purchase.contractType.toLowerCase()=="month to month")
{if(anItem.category&&anItem.category.toLowerCase()!="plan"&&anItem.category.toLowerCase()!="sim")
{totals.puOrderTotal+=anItem.quantity;totals.pOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);}
else
{inqSalesQuantities.push(0);}}
else
{switch(anItem.category.toLowerCase()){case'device':totals.puOrderTotal+=anItem.quantity;totals.pOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;case'accessory':totals.auOrderTotal+=anItem.quantity;totals.aOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;case'accessories':totals.auOrderTotal+=anItem.quantity;totals.aOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;default:inqSalesQuantities.push(0);break;}}
inqSalesProducts.push(getProductString(anItem,dl.purchase.contractType));inqSalesPrices.push(aPrice);inqSalesProductTypes.push(aProductType);}
inqOtherInfo=getOtherInfoString(totals);if(that.isDebugModeOn()){console.log('TCMobileDataBuilder conversion vars build complete for: inqClientOrderNum, '+
'inqSalesProductTypes, inqSalesProducts, inqSalesQuantities, inqSalesPrices, inqOtherInfo');}
that.vendorData=that.vendorData||{};that.vendorData.inqClientOrderNum=inqClientOrderNum;that.vendorData.inqSalesProductTypes=inqSalesProductTypes;that.vendorData.inqSalesProducts=inqSalesProducts;that.vendorData.inqSalesQuantities=inqSalesQuantities;that.vendorData.inqSalesPrices=inqSalesPrices;that.vendorData.inqOrderType=inqOrderType;that.vendorData.inqOtherInfo=inqOtherInfo;}}
function getProductString(item,term){var out='',aCat=item.category||'',aName=item.name||'',aTerm=term&&item.category!=='accessory'?term:'',anID=item.productId;out+='CAT:'+aCat.replace('~','').trim()+'~';out+='NAM:'+aName.replace('~','').trim()+'~';out+='TERM:'+aTerm.replace('~','').trim()+'~';out+='ID:'+anID.replace('~','').trim();return out;}
function getOtherInfoString(totals){var out='';out+='PUOT:'+totals.puOrderTotal+'~';out+='POT:'+totals.pOrderTotal+'~';out+='AUOT:'+totals.auOrderTotal+'~';out+='AOT:'+totals.aOrderTotal;return out;}
this.toString=function(){return name;};this.build=function(){buildVisitorAttr();if(dl.purchase){if(dl.purchase.items&&dl.purchase.items.length>0){buildConvVars();}}};chatEngagedListener={onChatEngagedEvent:function(evt){chatEngagedVariable=evt.chatID;document.cookie="chatIdCookie="+chatEngagedVariable+"; domain=.verizonwireless.com; path=/;";}};InqRegistry={listeners:[chatEngagedListener]};};}
tealiumChatDev=function(){VZ_Chat=(function(){var out={},tChatTag,debugMode,legacyMode,chatVars,dl,fnQueue=[],console=window.console,isReady=false;function setCookie(){if(document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html?d=yes')!=-1||document.location.href.indexOf('verizonwireless.com/wcms/myverizon/customer-retention.html')!=-1||document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20line')!=-1||document.location.href.indexOf('verizonwireless.com/search/vzwSearch?Ntt=disconnect%20service')!=-1)
{document.cookie="disconnect=1; domain=.verizonwireless.com; path=/;";}
}
function encode(dl){var Aes={};var a=dl.authentication.accountNumber;var b=dl.authentication.mdn;Aes.cipher=function(input,w){var Nb=4;var Nr=w.length/Nb-1;var state=[[],[],[],[]];for(var i=0;i<4*Nb;i++)state[i%4][Math.floor(i/4)]=input[i];state=Aes.addRoundKey(state,w,0,Nb);for(var round=1;round<Nr;round++){state=Aes.subBytes(state,Nb);state=Aes.shiftRows(state,Nb);state=Aes.mixColumns(state,Nb);state=Aes.addRoundKey(state,w,round,Nb);}
state=Aes.subBytes(state,Nb);state=Aes.shiftRows(state,Nb);state=Aes.addRoundKey(state,w,Nr,Nb);var output=new Array(4*Nb);for(var i=0;i<4*Nb;i++)output[i]=state[i%4][Math.floor(i/4)];return output;};Aes.addRoundKey=function(state,w,rnd,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)state[r][c]^=w[rnd*4+c][r];}
return state;};Aes.subBytes=function(s,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)s[r][c]=Aes.sBox[s[r][c]];}
return s;};Aes.shiftRows=function(s,Nb){var t=new Array(4);for(var r=1;r<4;r++){for(var c=0;c<4;c++)t[c]=s[r][(c+r)%Nb];for(var c=0;c<4;c++)s[r][c]=t[c];}
return s;};Aes.mixColumns=function(s,Nb){for(var c=0;c<4;c++){var a=new Array(4);var b=new Array(4);for(var i=0;i<4;i++){a[i]=s[i][c];b[i]=s[i][c]&0x80?s[i][c]<<1^0x011b:s[i][c]<<1;}
s[0][c]=b[0]^a[1]^b[1]^a[2]^a[3];s[1][c]=a[0]^b[1]^a[2]^b[2]^a[3];s[2][c]=a[0]^a[1]^b[2]^a[3]^b[3];s[3][c]=a[0]^b[0]^a[1]^a[2]^b[3];}
return s;};Aes.addRoundKey=function(state,w,rnd,Nb){for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)state[r][c]^=w[rnd*4+c][r];}
return state;};Aes.sBox=[0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];Aes.rCon=[[0x00,0x00,0x00,0x00],[0x01,0x00,0x00,0x00],[0x02,0x00,0x00,0x00],[0x04,0x00,0x00,0x00],[0x08,0x00,0x00,0x00],[0x10,0x00,0x00,0x00],[0x20,0x00,0x00,0x00],[0x40,0x00,0x00,0x00],[0x80,0x00,0x00,0x00],[0x1b,0x00,0x00,0x00],[0x36,0x00,0x00,0x00]];if(typeof String.prototype.utf8Encode=='undefined'){String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this));};}
if(typeof String.prototype.utf8Decode=='undefined'){String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this));}catch(e){return this;}};}
if(typeof String.prototype.base64Encode=='undefined'){String.prototype.base64Encode=function(){if(typeof btoa!='undefined')return btoa(this);if(typeof Buffer!='undefined')return new Buffer(this,'binary').toString('base64');throw new Error('No Base64 Encode');};}
if(typeof String.prototype.base64Decode=='undefined'){String.prototype.base64Decode=function(){if(typeof atob!='undefined')return atob(this);if(typeof Buffer!='undefined')return new Buffer(this,'base64').toString('binary');throw new Error('No Base64 Decode');};}
Aes.keyExpansion=function(key){var Nb=4;var Nk=key.length/4;var Nr=Nk+6;var w=new Array(Nb*(Nr+1));var temp=new Array(4);for(var i=0;i<Nk;i++){var r=[key[4*i],key[4*i+1],key[4*i+2],key[4*i+
3]];w[i]=r;}
for(var i=Nk;i<(Nb*(Nr+1));i++){w[i]=new Array(4);for(var t=0;t<4;t++)temp[t]=w[i-1][t];if(i%Nk==0){temp=Aes.subWord(Aes.rotWord(temp));for(var t=0;t<4;t++)temp[t]^=Aes.rCon[i/Nk][t];}
else if(Nk>6&&i%Nk==4){temp=Aes.subWord(temp);}
for(var t=0;t<4;t++)w[i][t]=w[i-Nk][t]^temp[t];}
return w;};Aes.Ctr={};Aes.Ctr.encrypt=function(plaintext,password,nBits){var blockSize=16;if(!(nBits==128||nBits==192||nBits==256))throw new Error('Key size is not 128 / 192 / 256');plaintext=String(plaintext).utf8Encode();password=String(password).utf8Encode();var nBytes=nBits/8;var pwBytes=new Array(nBytes);for(var i=0;i<nBytes;i++){pwBytes[i]=i<password.length?password.charCodeAt(i):0;}
var key=Aes.cipher(pwBytes,Aes.keyExpansion(pwBytes));key=key.concat(key.slice(0,nBytes-16));var counterBlock=new Array(blockSize);var nonce=(new Date()).getTime();var nonceMs=nonce%1000;var nonceSec=Math.floor(nonce/1000);var nonceRnd=Math.floor(Math.random()*0xffff);for(var i=0;i<2;i++)counterBlock[i]=(nonceMs>>>i*8)&0xff;for(var i=0;i<2;i++)counterBlock[i+2]=(nonceRnd>>>i*8)&0xff;for(var i=0;i<4;i++)counterBlock[i+4]=(nonceSec>>>i*8)&0xff;var ctrTxt='';for(var i=0;i<8;i++)ctrTxt+=String.fromCharCode(counterBlock[i]);var keySchedule=Aes.keyExpansion(key);var blockCount=Math.ceil(plaintext.length/blockSize);var ciphertext='';for(var b=0;b<blockCount;b++){for(var c=0;c<4;c++)counterBlock[15-c]=(b>>>c*8)&0xff;for(var c=0;c<4;c++)counterBlock[15-c-4]=(b/
0x100000000>>>c*8);var cipherCntr=Aes.cipher(counterBlock,keySchedule);var blockLength=b<blockCount-1?blockSize:(plaintext.length-
1)%blockSize+1;var cipherChar=new Array(blockLength);for(var i=0;i<blockLength;i++){cipherChar[i]=cipherCntr[i]^plaintext.charCodeAt(b*blockSize+i);cipherChar[i]=String.fromCharCode(cipherChar[i]);}
ciphertext+=cipherChar.join('');if(typeof WorkerGlobalScope!='undefined'&&self instanceof WorkerGlobalScope){if(b%1000==0)self.postMessage({progress:b/blockCount});}}
ciphertext=Base64.encode(ctrTxt+ciphertext);return ciphertext;};Aes.subWord=function(w){for(var i=0;i<4;i++)w[i]=Aes.sBox[w[i]];return w;};Aes.rotWord=function(w){var tmp=w[0];for(var i=0;i<3;i++)w[i]=w[i+1];w[3]=tmp;return w;};var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}
t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+
this._keyStr.charAt(u)+this._keyStr.charAt(a)}
return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}
if(a!=64){t=t+String.fromCharCode(i)}}
t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}
return t},_utf8_decode:function(e){var t="";var n=0;var r=0;var c1=0;var c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}
return t}};var c=Aes.Ctr.encrypt(a,b,256);dl.authentication['aHash']=c;}
function bindDL(){if(typeof vzwDL==='undefined'){inqCustData={};console.log('VZ_Chat Init Warning -> vzwDL not found');return;}
dl=vzwDL;dl.page=dl.page||{};dl.page.chat=dl.page.chat||[];chatVars=dl.page.chat;isReady=true;}
function downloadChatTag(){jQuery.ajax({dataType:'script',cache:true,url:tChatTag.src})
.done(function(script,status){if(debugMode){console.log('Init - Tag Loaded -> { ID: ',tChatTag.id,'}');}})
.fail(function(jqxhr,settings,exception){if(debugMode){console.error('Init - Tag Load Error -> { ID: ',tChatTag.id,', HTTP Status: ',jqxhr.status,'}');}});}
function addVar(name,value,scope,mobile){var newVar;if(!chatVars){throw getException('DataLayerUndefinedException','Data Layer is Undefined');}
newVar={'name':name,'value':value,'scope':scope,'mobile':mobile,'toString':function(){return'{ name: '+name+
', value: '+value+', scope: '+scope+
', mobile: '+mobile+' }';}};if(typeof name!=='string'||typeof value==='undefined'||(typeof scope!=='string'||(scope!=='page'&&scope!=='session'))||typeof mobile!=='boolean'){throw getException('InvalidVariableException','Invalid variable format: '+newVar.toString());}
if(debugMode){console.log('Adding var: '+newVar.toString());}
chatVars[chatVars.length]=newVar;}
function isEventSupported(eventName){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};var el=document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,'return;');isSupported=typeof el[eventName]=='function';}
el=null;return isSupported;}
function getException(name,msg){return{'name':name,'msg':msg,'toString':function(){return this.name+': '+this.msg;}};}
function initVars(scrubber,builder){try{setCookie()
bindDL();if(dl.authentication&&dl.authentication.mdn&&dl.authentication.accountNumber&&!(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")){encode(dl);}
while(fnQueue.length>0){fnQueue.pop()();}
if(scrubber){scrubber=new scrubber(VZ_Chat,dl);console.log('Data scrubbing with: '+scrubber.toString());scrubber.scrub();}else{console.log('Warning! -> Data scrubber is not defined');}
if(builder){builder=new builder(VZ_Chat,dl);console.log('Data building with: '+builder.toString());builder.build();}else{console.log('Warning! -> Data builder is not defined');}}catch(err){console.log('Critical [and ignored] error on init -> '+err);}}
function init(chatTagDef,options){if(typeof console==='undefined'){window.console={};console.log=function(){};console.error=function(){};}
setInterval(keepSessionAlive,300000);if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};}
if(isEventSupported('DOMContentLoaded')){console.error('Browser is not supported! IE9+ is required');return;}
tChatTag=chatTagDef;options=options||{};debugMode=options.debugMode||false;legacyMode=options.legacyMode||true;if(document.readyState==='interactive'||document.readyState==='complete'){initVars(options.scrubber,options.builder);downloadChatTag();}else{document.addEventListener('DOMContentLoaded',function(){initVars(options.scrubber,options.builder);downloadChatTag();});}}
function contactUsInit(chatTagDef,options){if(typeof console==='undefined'){window.console={};console.log=function(){};console.error=function(){};}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};}
if(isEventSupported('DOMContentLoaded')){console.error('Browser is not supported! IE9+ is required');return;}
tChatTag=chatTagDef;options=options||{};debugMode=options.debugMode||false;legacyMode=options.legacyMode||true;initVars(options.scrubber,options.builder);downloadChatTag();}
function reInit(pageId){if(typeof Inq!='undefined'&&!!pageId){if(Inq.isInqInitialized){Inq.reinitChat(pageId);}else{setTimeout(reInit,500);}}}
function setVar(){var tName,tValue,tScope,tMobile;if(arguments.length>=2){tName=arguments[0],tValue=arguments[1],tScope=arguments[2]||'page',tMobile=(typeof arguments[3]=='undefined')?true:arguments[3];try{addVar(tName,tValue,tScope,tMobile);}catch(err){if(debugMode){console.log('setVar error ->'+err);}
if(err.name=='DataLayerUndefinedException'&&!isReady){fnQueue.push(function(){setVar(tName,tValue,tScope,tMobile);});}}}else if(arguments.length==1){throw getException('OperationNotSupported','This operation is not supported');}else{throw getException('InvalidArgument','Argument count is invalid');}}
function getChatTag(){return tChatTag;}
function isDebugModeOn(){return debugMode;}
function keepSessionAlive(){var flag=window.isChatActive;if(flag){var urlDomain=document.location.href.substring(0,document.location.href.indexOf('.com/'));var url='https://www.verizonwireless.com/vzw/zipwall/setLocation.jsp';$.ajax({url:url,type:"GET"});}}
out.getChatTag=getChatTag;out.init=init;out.reInit=reInit;out.contactUsInit=contactUsInit;out.setVar=setVar;out.getException=getException;out.isDebugModeOn=isDebugModeOn;out.keepSessionAlive=keepSessionAlive;return out;})();VZ_Chat.LPMobileDataScrubber=function(that,dl){var name='LPMobileDataScrubber';if(!dl){throw that.getException('InvalidParamException','Data layer is undefined');}
function isValidVar(name){return name==='Source_mobile_ind'||name==='mobile_visit'||name==='tablet_visit';}
function scrubLPData(){if(typeof arrLPvars!=='undefined'){for(var i=0;i<arrLPvars.length;i++){if(isValidVar(arrLPvars[i].name)){that.setVar(arrLPvars[i].name,arrLPvars[i].value);}}}else if(typeof App!=='undefined'&&typeof App.vars!=='undefined'&&typeof App.vars.livePerson!=='undefined'){for(var key in App.vars.livePerson){if(isValidVar(key)){that.setVar(key,App.vars.livePerson[key]);}}}else{if(that.isDebugModeOn()){console.log('Warning! Found no data structure to scrub');return;}}}
function scrubVisitorAttr(){var ecpdIdList=[['ME','3431005'],['ME','815125'],['ME','754444'],['ME','824311'],['ME','2235022'],['SL','607675'],['SL','741314'],['SL','749150'],['SL','797058'],['SL','909204'],['SL','909883'],['SL','1539215'],['SL','1695270'],['SL','1695341'],['SL','1797110'],['SL','1797132'],['SL','1867324'],['SL','1867342'],['SL','1867410'],['SL','2551412'],['SL','2612781'],['SL','2782233'],['SL','2782614'],['SL','2782680'],['SL','2782714'],['SL','2782737'],['SL','2783314'],['SL','2783341'],['SL','2783475'],['SL','2783533'],['SL','2783956'],['SL','2783967'],['SL','2783975'],['SL','2818567'],['SL','2869714'],['SL','3099961'],['SL','3114951'],['SL','3139143'],['SL','3470276'],['SL','3474513'],['SL','4003605'],['SL','4003600']]
var visionCustType;if(window.vzgn_c2cuniqueId)
{that.setVar('cartRefNum',window.vzgn_c2cuniqueId)}
if(dl.page){that.setVar('Section',dl.page.section2);that.setVar('Market',dl.page.area);if(document.location.href.indexOf('es.verizonwireless.com')!=-1){that.setVar('language','spanish');}else{that.setVar('language',dl.page.language);}
that.setVar('channel',dl.page.channel);that.setVar('globalSessionID',dl.page.globalId);that.setVar('disconnectFlag',dl.page.disconnectFlag);that.setVar('flowName',dl.page.flowName)}
if(dl.authentication&&dl.authentication.custType){that.setVar('custType',dl.authentication.custType);if(dl.authentication.VCT){that.setVar('visionCustType',dl.authentication.VCT);visionCustType=dl.authentication.VCT;}
else if(dl.authentication.vct){that.setVar('visionCustType',dl.authentication.vct);visionCustType=dl.authentication.vct;}
else if(!dl.authentication.vct&&!dl.authentication.VCT){visionCustType=dl.authentication.custType;}
if(visionCustType=='PE'){that.setVar('ChatIndicatorCare','Y');}
else if(visionCustType=='CD'||visionCustType=='CI'||visionCustType=='DD'||visionCustType=='DJ'||visionCustType=='FG'||visionCustType=='FL'||visionCustType=='FS'||visionCustType=='FT'||visionCustType=='FL'||visionCustType=='FS'||visionCustType=='FT'||visionCustType=='FW'||visionCustType=='HR'||visionCustType=='IE'||visionCustType=='LG'||visionCustType=='NA'||visionCustType=='ON'||visionCustType=='SB'||visionCustType=='SG'||visionCustType=='SN'||visionCustType=='SG'||visionCustType=='SS'||visionCustType=='SW'||visionCustType=='US'||visionCustType=='UU'||visionCustType=='WH')
{that.setVar('ChatIndicatorBGCO','Y');}
if(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")
{that.setVar('ChatIndicatorPrepaid','Y');}}
if(dl.authentication&&dl.authentication.mdn){that.setVar('LoginFlag','1');that.setVar('Role',dl.authentication.userRole);that.setVar('MobileNumber',dl.authentication.mdn);if(dl.authentication.prepayInd=="Y"||dl.authentication.prepayInd=="1")
that.setVar('accountNumber',dl.authentication.accountNumber);else{that.setVar('accountNumber',dl.authentication.aHash);}
if(dl.authentication.mHash2)
{that.setVar('customCRM',dl.authentication.mHash2)}
else if(dl.authentication.mhash2)
{that.setVar('customCRM',dl.authentication.mhash2)}
if(dl.authentication.impType&&dl.authentication.impType.toLowerCase()==='opal')
{that.setVar('suppressChat','Y');}
that.setVar('GreetingName',dl.authentication.greetingName);if(dl.authentication.collectionsInd)
{that.setVar('collectionsInd',dl.authentication.collectionsInd);}
that.setVar('prepayInd',dl.authentication.prepayInd);if(dl.authentication.ecpdId&&visionCustType)
{for(var i=0;i<ecpdIdList.length;i++){if(ecpdIdList[i].indexOf(dl.authentication.ecpdId)!=-1){if(ecpdIdList[i].indexOf(visionCustType)!=-1)
{that.setVar('ChatIndicatorEA','Y');break;}}}}
else if(dl.authentication.ecpdID&&visionCustType)
{for(var i=0;i<ecpdIdList.length;i++){if(ecpdIdList[i].indexOf(dl.authentication.ecpdID)!=-1){if(ecpdIdList[i].indexOf(visionCustType)!=-1)
{that.setVar('ChatIndicatorEA','Y');break;}}}}
if(dl.authentication.ecpdId){that.setVar('ECPDID',dl.authentication.ecpdId);if(visionCustType=='BE'&&(dl.authentication.ecpdId).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='PE'&&(dl.authentication.ecpdId).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdId!=null||dl.authentication.ecpdId!="")&&(isNaN(dl.authentication.ecpdId)==false)){that.setVar('ChatIndicatorBGCO','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdId).indexOf("C")!=-1){that.setVar('ChatIndicatorBGCO','Y');}}else if(dl.authentication.ecpdID){that.setVar('ECPDID',dl.authentication.ecpdID);if(visionCustType=='BE'&&(dl.authentication.ecpdID).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='PE'&&(dl.authentication.ecpdID).indexOf("E")!=-1){that.setVar('ChatIndicatorCare','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdID!=null||dl.authentication.ecpdID!="")&&(isNaN(dl.authentication.ecpdID)==false)){that.setVar('ChatIndicatorBGCO','Y');}
if(visionCustType=='BE'&&(dl.authentication.ecpdID).indexOf("C")!=-1){that.setVar('ChatIndicatorBGCO','Y');}}
else
{if(visionCustType=='BE'&&(dl.authentication.ecpdId==null||dl.authentication.ecpdId=="")){that.setVar('ChatIndicatorCare','Y');}else if(visionCustType=='BE'&&(dl.authentication.ecpdID==null||dl.authentication.ecpdID=="")){that.setVar('ChatIndicatorCare','Y');}}}}
this.toString=function(){return name;};this.scrub=function(){scrubLPData();scrubVisitorAttr();};};VZ_Chat.TCMobileDataBuilder=function(that,dl){var name='TCMobileDataBuilder';if(!dl){throw that.getException('InvalidParamException','Data layer is undefined');}
function buildVisitorAttr(){var tVar,chatVars=dl.page.chat,isMobile=typeof dl.page.platform!=='undefined'&&(dl.page.platform.toLowerCase()==='mobile'||dl.page.platform.toLowerCase()==='tablet');inqCustData={};for(var i=0;i<chatVars.length;i++){tVar=chatVars[i];if((isMobile&&tVar.mobile)||!isMobile){inqCustData[tVar.name]=tVar.value.toString();}}
buildCartInfo(inqCustData,dl);buildSessionVariables(inqCustData);if(that.isDebugModeOn()){console.log('TCMobileDataBuilder visitor attributes '+
'build complete for: inqCustData');}
that.vendorData=that.vendorData||{};that.vendorData.inqCustData=inqCustData;}
function buildCartInfo(inqCustData,dl){if(dl.cart){if(that.isDebugModeOn()){console.log('TCMobileDataBuilder cart items '+
'build starts for: inqCustData');}
inqCustData['cart']=dl.cart;if(that.isDebugModeOn()){console.log('TCMobileDataBuilder cart items '+
'build completes for: inqCustData');}}}
function buildSessionVariables(inqCustData){var name="GLOBALID=";var globalSessionIDValue="";var disconnectName="disconnect="
var disconnectFlag="0";var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var c=cookies[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){globalSessionIDValue=c.substring(name.length,c.length);}
if(c.indexOf(disconnectName)==0){disconnectFlag=c.substring(disconnectName.length,c.length);}}
inqCustData['globalSessionID']=globalSessionIDValue;inqCustData['disconnectFlag']=disconnectFlag;if(that.isDebugModeOn()){console.log('Added the global session id : '+globalSessionIDValue+
' to inqCustData');console.log('Added the disconnectFlag : '+disconnectFlag+
' to inqCustData');}}
function buildConvVars(){if(dl.purchase){var aQty,aPrice,aProductType,anItem,totals;inqClientOrderNum=dl.purchase.orderNumber;inqSalesProducts=[];inqSalesQuantities=[];inqSalesPrices=[];inqSalesProductTypes=[];inqOrderType=dl.purchase.orderType;totals={'puOrderTotal':0,'pOrderTotal':0,'aOrderTotal':0,'auOrderTotal':0};for(var i=0;i<dl.purchase.items.length;i++){anItem=dl.purchase.items[i];if(!anItem.productId){if(anItem.category.toLowerCase()=="accessory"||anItem.category.toLowerCase()=="accessories")
{anItem.productId="bundle";}
else
continue;}
aQty=anItem.quantity||1;aPrice=anItem.price||0;aProductType=anItem.category||'';if(dl.purchase.contractType&&dl.purchase.contractType.toLowerCase()=="month to month")
{if(anItem.category&&anItem.category.toLowerCase()!="plan"&&anItem.category.toLowerCase()!="sim")
{totals.puOrderTotal+=anItem.quantity;totals.pOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);}
else
{inqSalesQuantities.push(0);}}
else
{switch(anItem.category.toLowerCase()){case'device':totals.puOrderTotal+=anItem.quantity;totals.pOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;case'accessory':totals.auOrderTotal+=anItem.quantity;totals.aOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;case'accessories':totals.auOrderTotal+=anItem.quantity;totals.aOrderTotal+=Math.round(anItem.price*anItem.quantity*100)/100;inqSalesQuantities.push(aQty);break;default:inqSalesQuantities.push(0);break;}}
inqSalesProducts.push(getProductString(anItem,dl.purchase.contractType));inqSalesPrices.push(aPrice);inqSalesProductTypes.push(aProductType);}
inqOtherInfo=getOtherInfoString(totals);if(that.isDebugModeOn()){console.log('TCMobileDataBuilder conversion vars build complete for: inqClientOrderNum, '+
'inqSalesProductTypes, inqSalesProducts, inqSalesQuantities, inqSalesPrices, inqOtherInfo');}
that.vendorData=that.vendorData||{};that.vendorData.inqClientOrderNum=inqClientOrderNum;that.vendorData.inqSalesProductTypes=inqSalesProductTypes;that.vendorData.inqSalesProducts=inqSalesProducts;that.vendorData.inqSalesQuantities=inqSalesQuantities;that.vendorData.inqSalesPrices=inqSalesPrices;that.vendorData.inqOrderType=inqOrderType;that.vendorData.inqOtherInfo=inqOtherInfo;}}
function getProductString(item,term){var out='',aCat=item.category||'',aName=item.name||'',aTerm=term&&item.category!=='accessory'?term:'',anID=item.productId;out+='CAT:'+aCat.replace('~','').trim()+'~';out+='NAM:'+aName.replace('~','').trim()+'~';out+='TERM:'+aTerm.replace('~','').trim()+'~';out+='ID:'+anID.replace('~','').trim();return out;}
function getOtherInfoString(totals){var out='';out+='PUOT:'+totals.puOrderTotal+'~';out+='POT:'+totals.pOrderTotal+'~';out+='AUOT:'+totals.auOrderTotal+'~';out+='AOT:'+totals.aOrderTotal;return out;}
this.toString=function(){return name;};this.build=function(){buildVisitorAttr();if(dl.purchase){if(dl.purchase.items&&dl.purchase.items.length>0){buildConvVars();}}};chatEngagedListener={onChatEngagedEvent:function(evt){chatEngagedVariable=evt.chatID;document.cookie="chatIdCookie="+chatEngagedVariable+"; domain=.verizonwireless.com; path=/;";}};InqRegistry={listeners:[chatEngagedListener]};};}
tealiumChatTag=function(){if(document.location.pathname.indexOf('/support')>-1){VZ_Chat.setVar('Source_mobile_ind','4');if(vzwDL.page.platform=='tablet'){VZ_Chat.setVar('tablet_visit','1');}else if(vzwDL.page.platform=='mobile'){VZ_Chat.setVar('mobile_visit','1');}}
var spanishTestman=window.location.pathname.indexOf("sdpreprod")>-1||window.location.pathname.indexOf("sdppmyvpostpay")>-1||window.location.pathname.indexOf("sdtestman")>-1;var hostName=window.location.hostname;var prodHostNames=["www.verizonwireless.com","nbillpay.verizonwireless.com","ebillpay.verizonwireless.com","wbillpay.verizonwireless.com","es.verizonwireless.com","quickaccess.verizonwireless.com","freebee.verizonwireless.com","solutions.vzwshop.com","login.verizonwireless.com","login.vzw.com","community.verizonwireless.com","myverizonid.verizon.com","autochatva.verizonwireless.com","my.verizonwireless.com","tones.verizonwireless.com","devices.verizonwireless.com","myaccount.verizonwireless.com","billpaysvc.verizonwireless.com","mediastore.verizonwireless.com","m.mediastore.verizonwireless.com","preorder.verizonwireless.com","store.verizonwireless.com","apps.vzwshop.com","www.internetservices.verizon.com","myvprepay.verizonwireless.com","myvpostpay.verizonwireless.com","mobile.vzw.com","solutionslab.vzw.com"];for(var i=0;i<prodHostNames.length;i++){if(hostName===prodHostNames[i]){if(spanishTestman){var prodFlag=false;break;}else{var prodFlag=true;break;}}else{var prodFlag=false;}}
if(prodFlag){VZ_Chat.init({'id':'TouchCommerce','src':'//verizon.inq.com/chatskins/launch/inqChatLaunch10004593.js'},{'debugMode':false,'scrubber':VZ_Chat.LPMobileDataScrubber,'builder':VZ_Chat.TCMobileDataBuilder});}else{VZ_Chat.init({'id':'TouchCommerce-Dev','src':'//verizon-dev.inq.com/chatskins/launch/inqChatLaunch10004593.js'},{'debugMode':true,'scrubber':VZ_Chat.LPMobileDataScrubber,'builder':VZ_Chat.TCMobileDataBuilder});}}
if(typeof utag!='undefined'&&typeof utag.data!='undefined'&&typeof utag.data.tealium_environment!='undefined'){if(utag.data.tealium_environment=="dev"){tealiumChatDev();tealiumChatTag();}else{tealiumChatProdScript();tealiumChatTag();}}else{tealiumChatProdScript();tealiumChatTag();}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var chatIdSiteCatInterval=setInterval(function(){if((function(){for(w_m in window){if(w_m.substring(0,4)=='s_i_'&&window[w_m].status){if(window[w_m].status==200){return!0};}}})()||(function(){for(w_m in window)if(w_m.substring(0,4)=='s_i_'&&window[w_m].src)if(window[w_m].src.indexOf('/b/ss/')>=0)return!0;})()){clearInterval(chatIdSiteCatInterval);var chatIdSitecat=getCookieValue('chatIdSitecatPassed');if(chatIdSitecat!=""){}else if(chatIdSitecat==""){var chatIdTest=vzwTagging.propertyWatcher.create(function(){return getCookieValue('chatIdCookie');});chatIdTest.change=function(oldvalue,newvalue){if(newvalue!="none"&&newvalue!=undefined&&newvalue!=""){s.linkTrackVarsCustom="eVar62";s.eVar62=getCookieValue('chatIdCookie');vzwLinkTrack('chat id passed');document.cookie='chatIdSitecatPassed=true; domain=.verizonwireless.com; path=/;';}}}}
setTimeout(function(){if(typeof chatIdSiteCatInterval!="undefined"){clearInterval(chatIdSiteCatInterval);}},10000);},500);}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("49","vzw.main");}catch(error){utag.DB(error);}
