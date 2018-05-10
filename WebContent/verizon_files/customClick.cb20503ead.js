if (typeof(lpMarket) == 'undefined') var lpMarket = document.getElementById("isMarket").value.toLowerCase();
if (typeof(lpUnit) == 'undefined') var lpUnit = 'vzw-mls';
if (typeof(lpLanguage) == 'undefined') var lpLanguage = document.getElementById("isLanguage").value;
if (typeof(channel) == 'undefined') var lpChannel = document.getElementById("isChannel").value;
// On Click Variables
if (typeof(lpExistingCustomer) == 'undefined') var lpExistingCustomer = document.getElementById("isExistingCustomer").value;
if (typeof(lpLNPCustomer) == 'undefined') var lpLNPCustomer = document.getElementById("islnpCustomer").value;
if (typeof(lpPromoCode) == 'undefined') var lpPromoCode = document.getElementById("isPromocode").value;
if (typeof(lpQuickLookVisible) == 'undefined') var lpQuickLookVisible = document.getElementById("isQuickLookVisible").value;
if (typeof(lpShoppingAssistantVisible) == 'undefined') var lpShoppingAssistantVisible = document.getElementById("isShoppingAssistantVisible").value;
if (typeof(lpUpgradeCustomer) == 'undefined') var lpUpgradeCustomer = document.getElementById("upgradeCustomer");

var arrLPvars = [{
    scope: 'page',
    name: 'Market',
    value: lpMarket,
    mobile: false
}, {
    scope: 'page',
    name: 'unit',
    value: lpUnit,
    mobile: true
}, {
    scope: 'page',
    name: 'language',
    value: lpLanguage,
    mobile: true
}, {
    scope: 'page',
    name: 'channel',
    value: lpChannel,
    mobile: false
}, ];

var lpAppId = document.getElementById("livePersonAppId").value,
    isTabletTrue = document.getElementById('isTabletCheck').value,
    isMobileTrue = document.getElementById('isMobileCheck').value;
if (isTabletTrue === "true") {
    chatSkill = "tablet-consumer-english"
} else if (isMobileTrue === "true") {
    chatSkill = "mobile-consumer-english"
} else {
    chatSkill = "vzw-mls-english"
}

// Adding additional parameters for better conversion reporting for G&G  orders.
if (isTabletTrue === "true" || isMobileTrue === "true" ) {
	arrLPvars[arrLPvars.length] = {
        scope: 'page',
        name: 'Source_mobile_ind',
        value: '3',
        mobile: true
    }
	
	if (isMobileTrue === "true") {
		arrLPvars[arrLPvars.length] = {
			scope: 'page',
			name: 'mobile_visit',
			value: '1',
			mobile: true
		}
	} else {
		arrLPvars[arrLPvars.length] = {
			scope: 'page',
			name: 'tablet_visit',
			value: '1',
			mobile: true
		}
	}
};

var _LP_CFG_ = {
    app_id: lpAppId, // Only required for accounts that already have an app_id, it is not required for new LP Mobile deployments
    options: {
        skill: chatSkill,
        triggerSelector: ".live-chat-start-btn", // optional CSS selector to provide a button on the page

        // the following function is for sending custom variables + values to the LivePerson Servers when the chat begins
        extras: function() { // A static dictionary or a function that returns a dictionary of custom variables 

            var extras = {};
            var i, varsCount = arrLPvars.length;

            // This will run through the array of variables and add those flagged with mobile:true to the dictionary
            if (arrLPvars) {
                for (i = 0; i < varsCount; i++) {
                    if (arrLPvars[i].mobile) {
                        extras[arrLPvars[i].name] = arrLPvars[i].value;
                    }
                };
            }

            return extras;
        },
        onChatNotAnswered: function(messages) {

        },
        onChatDisabled: function(els) {
            // Change the LP Mobile button to an offline state, for example:
             var lpMobileButton = document.getElementById('live-gng-chat');
            lpMobileButton.style.display = "none";
        },
        onChatEnabled: function(els) {
            // Change the LP Mobile button to an online state, for example
            var lpMobileButton = document.getElementById('live-gng-chat');
            lpMobileButton.style.display = "block";
        },
		onReady : function () {
            var $el = $(_LP_CFG_.options.triggerSelector);
            LPMobile.on('chatInteractive', function () {
            	$el.text('Rejoin Chat'); 
            	$el.append('<span class="bubble"> </span>');
            	$el.children().css('margin-left','0px');
            });
            LPMobile.on('chatEnd', function () {
                $el.text('Chat Now'); 
                $el.append('<span class="bubble"> </span>');
                $el.children().css('margin-left','5px');
            });
            LPMobile.on('chatWindowShow', function () { 
                $el.parent().hide(); 
            });
                LPMobile.on('chatWindowHide', function () {
                $el.parent().show(); 
            });
		}
    }
};

var lpTag = lpTag || {},
    lpMTagConfig = lpMTagConfig || {};

lpTag.vars = lpTag.vars || [];
lpTag.dbs = lpTag.dbs || [];
lpTag.section = 'mls';

lpTag.dbs.push({
    name: 'chat-vzw-mls-english',
    pid: 'lpChatButton'
});
lpTag.dbs.push({
    name: 'voice-consumer-english-mls',
    pid: 'lpVoiceButton'
});

lpTag.vars.push(arrLPvars);

var sendVarsOnClick = function() {
    var arrNewVars = [{
        scope: 'page',
        name: 'ExistingCustomer',
        value: lpExistingCustomer,
        mobile: true
    }, {
        scope: 'page',
        name: 'LNPCustomer',
        value: lpLNPCustomer,
        mobile: true
    }, {
        scope: 'page',
        name: 'PromoCode',
        value: lpPromoCode,
        mobile: true
    }, {
        scope: 'page',
        name: 'QuickLookVisible',
        value: lpQuickLookVisible,
        mobile: true
    }, {
        scope: 'page',
        name: 'ShoppingAssistantVisible',
        value: lpShoppingAssistantVisible,
        mobile: true
    }, {
        scope: 'page',
        name: 'UpgradeCustomer',
        value: lpUpgradeCustomer,
        mobile: true
    }];

    if (typeof(LPMobile) !== "undefined") {
        for (var i = 0; i < arrNewVars.length; i++) {
            if (arrNewVars[i].mobile) {
                LPMobile.reportEvent(arrNewVars[i].name, arrNewVars[i].value);
            }
        }

    } else {
        lpTag.vars.push(arrNewVars);
        try {
            lpTag.vars.send();
        } catch (e) {}
    }
};
