/**
 * File generated at  2018-05-03 04:02:46 PST 
 * Client: Verizon (10004593)
 */
define("Automatons/automatons/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "automatons",
    attributes: {
      name: "HBA Pre-Chat Survey",
      ariaEnabled: true,
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "Prechat Survey for HBA Test page to launch the Verizon HBA chat: http://tcsandbox.com/verizon/hba.html#vzw-phone-tab-testersice.vzwcorp.com/hba-knowledge",
      initialNode: "node::2001",
      style: "style::2001",
      viewport: {
        height: 420,
        width: 300
      }
    }
  };
});
define("Automatons/automatons/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "automatons",
    attributes: {
      name: "VZW Sales Care Routing Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      deferChatRouting: true,
      initialNode: "node::2008",
      style: "style::2008",
      viewport: {
        position: "bottom right"
      }
    }
  };
});
define("Automatons/automatons/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2003,
    type: "automatons",
    attributes: {
      name: "EAVerizonWirelessNPS",
      type: "satisfactionSurvey",
      description: "CMRASI-210",
      initialNode: "node::2045",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "automatons",
    attributes: {
      name: "Verizon Wholesale Post Chat Survey",
      type: "satisfactionSurvey",
      initialNode: "node::2047",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "automatons",
    attributes: {
      name: "BGCO Verizon Wireless Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "https://app.keysurvey.com/f/1025987/f6f1/?LQID=1&",
      initialNode: "node::2049",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2006,
    type: "automatons",
    attributes: {
      name: "HBA Verizon Wireless Post Chat Survey",
      type: "satisfactionSurvey",
      description: "https://app.keysurvey.com/f/1027229/1e23/?LQID=1&",
      initialNode: "node::2051",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2007,
    type: "automatons",
    attributes: {
      name: "Verizon Telco Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "https://app.keysurvey.com/f/1056359/6afb/?LQID=1&",
      initialNode: "node::2053",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2008,
    type: "automatons",
    attributes: {
      name: "Verizon Telco Tech Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "https://app.keysurvey.com/f/1084476/5291/?LQID=1&",
      initialNode: "node::2055",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2009,
    type: "automatons",
    attributes: {
      name: "Verizon Telco Social Media Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      initialNode: "node::2057",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2010,
    type: "automatons",
    attributes: {
      name: "VZT Consumer App Chat Router",
      description: "ASI-401",
      initialNode: "node::2059",
      style: "style::2012"
    }
  };
});
define("Automatons/automatons/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2011,
    type: "automatons",
    attributes: {
      name: "Care-Mobile-NPS_Spanish Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-430",
      initialNode: "node::2068",
      style: "style::2014"
    }
  };
});
define("Automatons/automatons/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2012,
    type: "automatons",
    attributes: {
      name: "Care-Mobile-NoNPS_Spanish Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-431",
      initialNode: "node::2070",
      style: "style::2014"
    }
  };
});
define("Automatons/automatons/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2013,
    type: "automatons",
    attributes: {
      name: "Desktop CareVerizonWirelessNoNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-432",
      initialNode: "node::2072",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2014,
    type: "automatons",
    attributes: {
      name: "Mobile CareVerizonWirelessNoNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "ASI-444",
      initialNode: "node::2074",
      style: "style::2013"
    }
  };
});
define("Automatons/automatons/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2015,
    type: "automatons",
    attributes: {
      name: "Care-Desktop-NPS_Spanish Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-449",
      initialNode: "node::2076",
      style: "style::2014"
    }
  };
});
define("Automatons/automatons/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2016,
    type: "automatons",
    attributes: {
      name: "Desktop CareVerizonWirelessNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "ASI-445",
      initialNode: "node::2078",
      style: "style::2015"
    }
  };
});
define("Automatons/automatons/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2017,
    type: "automatons",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNoNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "ASI-446",
      initialNode: "node::2080",
      style: "style::2015"
    }
  };
});
define("Automatons/automatons/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2018,
    type: "automatons",
    attributes: {
      name: "Mobile CareVerizonWirelessNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "ASI-448",
      initialNode: "node::2082",
      style: "style::2013"
    }
  };
});
define("Automatons/automatons/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2019,
    type: "automatons",
    attributes: {
      name: "Verizon Wholesale Prechat Form",
      description: "ASI-421",
      initialNode: "node::2088",
      style: "style::2016"
    }
  };
});
define("Automatons/automatons/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2020,
    type: "automatons",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-560",
      initialNode: "node::2091",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2021,
    type: "automatons",
    attributes: {
      name: "Sales-Mobile-NoNPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-568",
      initialNode: "node::2093",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2022,
    type: "automatons",
    attributes: {
      name: "Sales-Mobile-NPS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-570",
      initialNode: "node::2095",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2032", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2032,
    type: "automatons",
    attributes: {
      name: "AP - Form Vzw BGCO Video",
      description: "CMRASI-868",
      initialNode: "node::2105",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2021",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2039", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2039,
    type: "automatons",
    attributes: {
      name: "AP - Plan Comparison",
      description: "CMRASI-973",
      initialNode: "node::2107",
      panel: {
        width: 450
      },
      style: "style::2025"
    }
  };
});
define("Automatons/automatons/2040", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2040,
    type: "automatons",
    attributes: {
      name: "AP - Device Payments",
      description: "CMRASI-973",
      initialNode: "node::2108",
      panel: {
        width: 200
      },
      style: "style::2024"
    }
  };
});
define("Automatons/automatons/2041", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2041,
    type: "automatons",
    attributes: {
      name: "AP - Why Verizon Rootmetrics 2017",
      description: "CMRASI-973",
      initialNode: "node::2109",
      panel: {
        width: 650
      },
      style: "style::2026"
    }
  };
});
define("Automatons/automatons/2042", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2042,
    type: "automatons",
    attributes: {
      name: "AP - Better Speed Matters Vs Sprint",
      description: "CMRASI-973",
      initialNode: "node::2110",
      panel: {
        height: 280
      },
      style: "style::2027"
    }
  };
});
define("Automatons/automatons/2043", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2043,
    type: "automatons",
    attributes: {
      name: "AP - Better Coverage Matters Vs Tmobile",
      description: "CMRASI-973",
      initialNode: "node::2111",
      panel: {
        height: 230
      },
      style: "style::2028"
    }
  };
});
define("Automatons/automatons/2044", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2044,
    type: "automatons",
    attributes: {
      name: "MyDeviceRoutingGuide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      deferChatRouting: true,
      description: "CMRASI-1070",
      initialNode: "node::2112",
      style: "style::2030"
    }
  };
});
define("Automatons/automatons/2046", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2046,
    type: "automatons",
    attributes: {
      name: "VzW Sales VA-only Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-1153",
      initialNode: "node::2120",
      style: "style::2031"
    }
  };
});
define("Automatons/automatons/2048", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2048,
    type: "automatons",
    attributes: {
      name: "HBA Support Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "CMRASI-1200",
      initialNode: "node::2125",
      style: "style::2032"
    }
  };
});
define("Automatons/automatons/2049", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2049,
    type: "automatons",
    attributes: {
      name: "VZW BFO Prechat",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "CMRASI-1229",
      initialNode: "node::2135",
      style: "style::2043"
    }
  };
});
define("Automatons/automatons/2051", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2051,
    type: "automatons",
    attributes: {
      name: "AP - Suspend Service",
      description: "",
      initialNode: "node::2137",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2041",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2052", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2052,
    type: "automatons",
    attributes: {
      name: "AP - Add and Remove Features",
      description: "",
      initialNode: "node::2138",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2042",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2055", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2055,
    type: "automatons",
    attributes: {
      name: "VZW BFO Post Chat Survey",
      type: "satisfactionSurvey",
      description: "",
      initialNode: "node::2142",
      style: "style::2031"
    }
  };
});
define("Automatons/automatons/2059", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2059,
    type: "automatons",
    attributes: {
      name: "BFO-File_Transfer",
      description: "CMRASI-1307",
      initialNode: "node::2150",
      panel: {
        width: 300
      },
      style: "style::2046"
    }
  };
});
define("Automatons/automatons/2060", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2060,
    type: "automatons",
    attributes: {
      name: "AP - Upgrade",
      description: "CMRASI-1317",
      initialNode: "node::2151",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2047",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2061", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2061,
    type: "automatons",
    attributes: {
      name: "AP - Change Plan",
      description: "CMRASI-1317",
      initialNode: "node::2152",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2048",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2062", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2062,
    type: "automatons",
    attributes: {
      name: "AP - Add Company User",
      description: "CMRASI-1317",
      initialNode: "node::2153",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2049",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2063", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2063,
    type: "automatons",
    attributes: {
      name: "AP - Cost Center",
      description: "CMRASI-1317",
      initialNode: "node::2154",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2050",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2064", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2064,
    type: "automatons",
    attributes: {
      name: "AP - Purchasing Packages",
      description: "CMRASI-1317",
      initialNode: "node::2155",
      panel: {
        height: 300,
        width: 600
      },
      style: "style::2051",
      viewport: {
        height: 420
      }
    }
  };
});
define("Automatons/automatons/2066", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2066,
    type: "automaton",
    attributes: {
      name: "HBA Support Non-Chandler Locations",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "CMRASI-1299",
      initialNode: "node::2157",
      style: "style::2043"
    }
  };
});
define("Automatons/automatons/2067", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2067,
    type: "automatons",
    attributes: {
      name: "BFO-File_Transfer_Mobile",
      description: "CMRASI-1307",
      initialNode: "node::2150",
      panel: {
        height: 250
      },
      style: "style::2046"
    }
  };
});
define("Automatons/automatons/2068", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2068,
    type: "automatons",
    attributes: {
      name: "VZT_Reconnect_Global",
      description: "Stand alone automaton",
      initialNode: "node::2159",
      style: "style::2052"
    }
  };
});
define("Automatons/automatons/2069", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2069,
    type: "automatons",
    attributes: {
      name: "One Talk Phone Image",
      description: "CMRASI-1369",
      initialNode: "node::2160",
      style: "style::2053"
    }
  };
});
define("Automatons/automatons/2075", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2075,
    type: "automaton",
    attributes: {
      name: "HBA Support Non-Chandler Locations - Invalid",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "CMRASI-1460",
      initialNode: "node::2175",
      style: "style::2043"
    }
  };
});
define("Automatons/automatons/226", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 226,
    type: "automatons",
    attributes: {
      name: "BGCO Pre-Chat Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      description: "Formerly known as \"Verizon-Reactive\"",
      initialNode: "node::1563",
      style: "style::2004"
    }
  };
});
define("Automatons/nodes/1562", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 1562,
    type: "nodes",
    attributes: {
      name: "chat",
      type: "chat node",
      chatRouter: {
        agentGroup: 10004875,
        businessUnit: 19000909,
        checkAgentAvailability: false,
        clientOutcome: "“Hi! How can I help you with your account needs today?”"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/1563", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 1563,
    type: "nodes",
    attributes: {
      name: "BGCO Prechat Initial",
      type: "Survey",
      fieldsets: [{
        name: "First Name",
        type: "text",
        error: "First name is required.",
        isRequired: true,
        label: "First name:",
        placeholder: "Enter your first name"
      }, {
        name: "Last Name",
        type: "text",
        label: "Last name:",
        placeholder: "Enter your last name"
      }, {
        name: "Phone Number",
        type: "text",
        error: "A valid phone number is required.",
        isRequired: true,
        label: "What is the wireless number you are chatting about?",
        pattern: "\\d{3}(-|\\s)?\\d{3}(-|\\s)?\\d{4}",
        placeholder: "Enter your phone number"
      }, {
        name: "Reason for Chatting",
        type: "select",
        error: "Reason for chatting is required.",
        isRequired: true,
        label: "Reason for chatting:",
        options: ["Billing/Payments", "Manage My Account", "Orders/Upgrades", "Technical/Device Support", "Other"],
        placeholder: "Please select your reason for chatting"
      }],
      header: "Welcome to Verizon&nbsp;Wireless.",
      node_id: "node::2005",
      subheader: "To help us serve you better, please provide some information before we begin your chat.",
      template: "template::2013",
      transitions: {
        submit: [{
          condition: "api.forms['First Name'] !== '' && api.forms['Phone Number'] !== ''",
          target: "node::2005"
        }]
      },
      viewport: {
        height: 520
      }
    }
  };
});
define("Automatons/nodes/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "nodes",
    attributes: {
      name: "HBA Initial",
      type: "List",
      template: "template::2788"
    }
  };
});
define("Automatons/nodes/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "nodes",
    attributes: {
      name: "General Inquiry Chat Node",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004898,
        businessUnit: 19000919,
        checkAgentAvailability: true,
        outsideHopNode: "node::2006"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2003,
    type: "nodes",
    attributes: {
      name: "Tech Support Chat Node",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004900,
        businessUnit: 19000919,
        checkAgentAvailability: true,
        outsideHopNode: "node::2006"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "nodes",
    attributes: {
      name: "Device Chat - Unavailable",
      type: "unavailable",
      isOutcomeNode: 1,
      node_id: "node::2037",
      onEntryTransition: "checkAA",
      outcomeMessage: "Device agents unavailable",
      template: "template::2015",
      topic: "using your device",
      transitions: {
        checkAA: [{
          AA: true,
          q_threshold: 2.5,
          target: "node::2027",
          targetChatNode: "node::2018"
        }]
      }
    }
  };
});
define("Automatons/nodes/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "nodes",
    attributes: {
      name: "BGCO Chat Node",
      type: "Chat",
      chatRouter: {
        businessUnit: 19000909,
        checkAgentAvailability: false,
        showLayers: "btnFontSize btnPrint btnEmail btnEmail2 btnMuteOn btnMuteOff"
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (!window.top.inqCustData) {
          window.top.inqCustData = {};
        }

        var phoneNumber = api.forms["Phone Number"];
        var evt = {
          phone_number: phoneNumber
        };

        window.top.inqCustData.bgcoMDN = phoneNumber;

        api.fireCustomEvent("setPhoneNumberFromPrechat", evt);
        api.fireCustomEvent("bgcoCustomEvent");

        var formData = api.getFormData();
        var customerName = api.forms["First Name"] || "Me";

        customerName = customerName.toLowerCase();
        customerName = customerName.charAt(0).toUpperCase() + customerName.slice(1);
        var newFormData = formData + "\nCustomerDisplayName: " + customerName + "\n";

        // Default to "BGCO - General" agent group
        var agentGroupId = api.automatonDataMap.ag_id || 10004875;

        api.engageChat({
          agentGroupId: agentGroupId.toString(),
          formData: newFormData
        });
      }
    }
  };
});
define("Automatons/nodes/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2006,
    type: "nodes",
    attributes: {
      name: "Agents Unavailable",
      type: "Outcome",
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        api.resize(400, 500);
      },
      template: "template::2775"
    }
  };
});
define("Automatons/nodes/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2007,
    type: "nodes",
    attributes: {
      name: "Routing Guide",
      type: "routing",
      options: [{
        "next-node-id": 1,
        text: "I want to make a purchase"
      }, {
        "next-node-id": 2,
        text: "I have questions about my account or a recent purchase"
      }]
    }
  };
});
define("Automatons/nodes/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2008,
    type: "nodes",
    attributes: {
      name: "Sales Care Routing Guide - Initial",
      type: "routing",
      header: "How can we help you today?",
      options: [{
        text: "I want to make a purchase"
      }, {
        text: "I have questions about my account or a recent purchase",
        tip: "Please log in for a more personalized experience"
      }],
      template: "template::2003",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('I want to make a purchase') > -1",
          target: "node::2018"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('I have questions about my account or a recent purchase') > -1",
          target: "node::2009"
        }]
      }
    }
  };
});
define("Automatons/nodes/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2009,
    type: "nodes",
    attributes: {
      name: "Care Options",
      type: "routing",
      header: "I have questions about...",
      next_transition: "next",
      options: [{
        text: "Managing my account"
      }, {
        text: "Understanding my bill"
      }, {
        text: "Traveling abroad"
      }, {
        text: "Using my device"
      }, {
        text: "Getting a recent order status"
      }],
      template: "template::2003",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('Managing my account') > -1",
          target: "node::2018"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Understanding my bill') > -1",
          target: "node::2012"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Traveling abroad') > -1",
          target: "node::2086"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Using my device') > -1",
          target: "node::2016"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Getting a recent order status') > -1",
          target: "node::2031"
        }]
      }
    }
  };
});
define("Automatons/nodes/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2010,
    type: "nodes",
    attributes: {
      name: "Wireless Sales Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10004697,
        agentOutcome: "Agent Group: WirelessSales - 10004697",
        agentsBusyNode: "node::2039",
        businessUnit: 19000860,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2024",
        qThreshold: 1
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200677
          });
        } else {
          api.engageChat({
            scriptTreeId: 12200678
          });
        }

        /*
        var visitorAttributes = api.flashVars.visitorAttributes;
        console.log(visitorAttributes);
        console.log(visitorAttributes.split(";"));
        */
      }
    }
  };
});
define("Automatons/nodes/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2011,
    type: "nodes",
    attributes: {
      name: "MVTrans Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10004687,
        agentOutcome: "Agent Group: MVTrans - 10004687",
        agentsBusyNode: "node::2021",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding your account. How can we help you today?",
        outsideHopNode: "node::2022",
        qThreshold: 1
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200679
          });
        } else {
          api.engageChat({
            scriptTreeId: 12200680
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2012,
    type: "nodes",
    attributes: {
      name: "Billing Sub Options",
      type: "routing",
      header: "Please select how we can help with your bill.",
      next_transition: "next",
      options: [{
        text: "I want to pay my bill"
      }, {
        text: "I have questions about my bill"
      }],
      template: "template::2003",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('I want to pay my bill') > -1",
          target: "node::2031"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('I have questions about my bill') > -1",
          target: "node::2020"
        }]
      }
    }
  };
});
define("Automatons/nodes/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2013,
    type: "nodes",
    attributes: {
      name: "Global Chat - Unavailable",
      type: "unavailable",
      isOutcomeNode: 1,
      node_id: "node::2036",
      onEntryTransition: "checkAA",
      outcomeMessage: "Global agents unavailable",
      template: "template::2015",
      topic: "traveling abroad",
      transitions: {
        checkAA: [{
          AA: true,
          q_threshold: 2.5,
          target: "node::2029",
          targetChatNode: "node::2015"
        }]
      }
    }
  };
});
define("Automatons/nodes/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2014,
    type: "nodes",
    attributes: {
      name: "Billing Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to https://ebillpay.verizonwireless.com/cws/viewLogin.do#/payments",
      redirectTarget: "current",
      redirectUrl: "https://ebillpay.verizonwireless.com/cws/viewLogin.do#/payments"
    }
  };
});
define("Automatons/nodes/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2015,
    type: "nodes",
    attributes: {
      name: "Global Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10004689,
        agentOutcome: "Agent Group: Global - 10004689",
        agentsBusyNode: "node::2013",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding traveling abroad. How can we help you today?",
        outsideHopNode: "node::2030",
        qThreshold: 1
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200679
          });
        } else {
          api.engageChat({
            scriptTreeId: 12200680
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2016,
    type: "nodes",
    attributes: {
      name: "Device Sub Options",
      type: "list",
      header: "Please select how we can help you with your device",
      next_transition: "next",
      options: [{
        text: "I need technical support"
      }, {
        text: "I need help activating my device"
      }],
      template: "template::2003",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('I need technical support') > -1",
          target: "node::2018"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('I need help activating my device') > -1",
          target: "node::2031"
        }]
      }
    }
  };
});
define("Automatons/nodes/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2017,
    type: "nodes",
    attributes: {
      name: "Device Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /support/how-to-activate-device-video/",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/support/how-to-activate-device-video/"
    }
  };
});
define("Automatons/nodes/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2018,
    type: "nodes",
    attributes: {
      name: "Device Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10004690,
        agentOutcome: "Agent Group: Device - 10004690",
        agentsBusyNode: "node::2004",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding your device. How can we help you today?",
        outsideHopNode: "node::2028",
        qThreshold: 1
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200679
          });
        } else {
          api.engageChat({
            scriptTreeId: 12200680
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2019,
    type: "nodes",
    attributes: {
      name: "Order Status Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /vzw/ordertracking/index.jsp",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/vzw/ordertracking/index.jsp"
    }
  };
});
define("Automatons/nodes/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2020,
    type: "nodes",
    attributes: {
      name: "Billing Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10004688,
        agentOutcome: "Agent Group: Billing - 10004688",
        agentsBusyNode: "node::2032",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding your bill. How can we help you today?",
        outsideHopNode: "node::2026",
        qThreshold: 1
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200679
          });
        } else {
          api.engageChat({
            scriptTreeId: 12200680
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2021,
    type: "nodes",
    attributes: {
      name: "MVTrans Chat - Unavailable",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2035",
      onEntryTransition: "checkAA",
      outcomeMessage: "No agents are available.",
      template: "template::2015",
      topic: "your account",
      transitions: {
        checkAA: [{
          AA: true,
          q_threshold: 2.5,
          target: "node::2087",
          targetChatNode: "node::2011"
        }]
      }
    }
  };
});
define("Automatons/nodes/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2022,
    type: "nodes",
    attributes: {
      name: "MVTrans Chat - OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2035",
      outcomeMessage: "Outside hours of operation.",
      template: "template::2800",
      topic: "your account"
    }
  };
});
define("Automatons/nodes/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2023,
    type: "nodes",
    attributes: {
      name: "Wireless Sales Chat - Busy",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2033",
      outcomeMessage: "Agents are busy.",
      template: "template::2014",
      topic: "making a purchase"
    }
  };
});
define("Automatons/nodes/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2024,
    type: "nodes",
    attributes: {
      name: "Wireless Sales Chat - OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2033",
      outcomeMessage: "Outside hours of operation.",
      template: "template::2806",
      topic: "making a payment"
    }
  };
});
define("Automatons/nodes/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2025,
    type: "nodes",
    attributes: {
      name: "Billing Chat - Busy",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2034",
      outcomeMessage: "No agents are available.",
      template: "template::2014",
      topic: "your bill"
    }
  };
});
define("Automatons/nodes/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2026,
    type: "nodes",
    attributes: {
      name: "Billing Chat - OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2034",
      outcomeMessage: "Outside hours of operation.",
      template: "template::2770",
      topic: "your bill"
    }
  };
});
define("Automatons/nodes/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2027,
    type: "nodes",
    attributes: {
      name: "Device Chat - Busy",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2037",
      outcomeMessage: "No agents are available.",
      template: "template::2014",
      topic: "using your device"
    }
  };
});
define("Automatons/nodes/2028", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2028,
    type: "nodes",
    attributes: {
      name: "Device Chat - OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2037",
      outcomeMessage: "Outside hours of operation.",
      template: "template::2783",
      topic: "using your device"
    }
  };
});
define("Automatons/nodes/2029", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2029,
    type: "nodes",
    attributes: {
      name: "Global Chat - Busy",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2036",
      outcomeMessage: "No agents are available.",
      template: "template::2014",
      topic: "traveling abroad"
    }
  };
});
define("Automatons/nodes/2030", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2030,
    type: "nodes",
    attributes: {
      name: "Global Chat - OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      node_id: "node::2036",
      outcomeMessage: "Outside hours of operation.",
      template: "template::2787",
      topic: "traveling abroad"
    }
  };
});
define("Automatons/nodes/2031", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2031,
    type: "nodes",
    attributes: {
      name: "Redirect Router",
      type: "loading",
      onEntry: function onEntry() {
        api.setTimeout(function () {
          api.triggerTransition('redirect_to');
        }, 4000);
      },
      template: "template::2011",
      transitions: {
        redirect_to: [{
          condition: "api.forms['Last Option Selected'].indexOf('I want to pay my bill') > -1",
          target: "node::2014"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('I need help activating my device') > -1",
          target: "node::2017"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Getting a recent order status') > -1",
          target: "node::2019"
        }]
      }
    }
  };
});
define("Automatons/nodes/2032", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2032,
    type: "nodes",
    attributes: {
      name: "Billing Chat - Unavailable",
      type: "unavailable",
      isOutcomeNode: 1,
      node_id: "node::2034",
      onEntryTransition: "checkAA",
      outcomeMessage: "Billing agents unavailable",
      template: "template::2015",
      topic: "your bill",
      transitions: {
        checkAA: [{
          AA: true,
          q_threshold: 2.5,
          target: "node::2025",
          targetChatNode: "node::2020"
        }]
      }
    }
  };
});
define("Automatons/nodes/2033", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2033,
    type: "nodes",
    attributes: {
      name: "Verizon Plan Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /landingpages/verizon-plan",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/landingpages/verizon-plan/"
    }
  };
});
define("Automatons/nodes/2034", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2034,
    type: "nodes",
    attributes: {
      name: "Billing FAQs Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /support/view-bill-online-faqs/",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/support/view-bill-online-faqs/"
    }
  };
});
define("Automatons/nodes/2035", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2035,
    type: "nodes",
    attributes: {
      name: "MVTrans FAQs Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /support/my-verizon-faqs/",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/support/my-verizon-faqs/"
    }
  };
});
define("Automatons/nodes/2036", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2036,
    type: "nodes",
    attributes: {
      name: "International Travel FAQs Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /support/international-travel-faqs/",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/support/international-travel-faqs/"
    }
  };
});
define("Automatons/nodes/2037", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2037,
    type: "nodes",
    attributes: {
      name: "My Devices FAQs Redirect",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to /support/my-devices-faqs/",
      redirectTarget: "current",
      redirectUrl: "http://www.verizonwireless.com/support/my-devices-faqs/"
    }
  };
});
define("Automatons/nodes/2039", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2039,
    type: "nodes",
    attributes: {
      name: "Wireless Sales Chat - Unavailable",
      type: "unavailable",
      node_id: "node::2033",
      onEntryTransition: "checkAA",
      template: "template::2015",
      topic: "making a purchase",
      transitions: {
        checkAA: [{
          AA: true,
          q_threshold: 2.5,
          target: "node::2023",
          targetChatNode: "node::2010"
        }]
      }
    }
  };
});
define("Automatons/nodes/2040", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2040,
    type: "nodes",
    attributes: {
      name: "General Inquiry - Backup",
      type: "backup",
      template: "template::2016",
      who: "customer service support coordinators"
    }
  };
});
define("Automatons/nodes/2041", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2041,
    type: "nodes",
    attributes: {
      name: "Tech Support - Backup",
      type: "backup",
      template: "template::2016",
      who: "technical support coordinators"
    }
  };
});
define("Automatons/nodes/2042", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2042,
    type: "nodes",
    attributes: {
      name: "Global Support - Backup",
      type: "backup",
      template: "template::2016",
      who: "global support coordinators"
    }
  };
});
define("Automatons/nodes/2043", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2043,
    type: "nodes",
    attributes: {
      name: "Global Support - Chat Node",
      type: "chat",
      chatRouter: {
        agentGroup: 10005306,
        businessUnit: 19000919,
        checkAgentAvailability: true,
        outsideHopNode: "node::2006"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2044", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2044,
    type: "nodes",
    attributes: {
      name: "Redirect - HBA KB",
      type: "redirect",
      redirectTarget: "current",
      redirectUrl: "http://ice.vzwcorp.com/hba-knowledge/"
    }
  };
});
define("Automatons/nodes/2045", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2045,
    type: "nodes",
    attributes: {
      name: "EAVerizonWirelessNPS",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood",
          type: "select",
          label: "How likely is it that you would recommend Verizon Wireless to a friend or colleague? (10 Extremely Likely, 0 Not at all Likely)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2779",
      transitions: {
        submit: {
          target: "node::2046"
        }
      }
    }
  };
});
define("Automatons/nodes/2046", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2046,
    type: "nodes",
    attributes: {
      name: "EAVerizonWirelessNPS Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2785"
    }
  };
});
define("Automatons/nodes/2047", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2047,
    type: "nodes",
    attributes: {
      name: "Verizon Wholesale Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "overall-performance",
          type: "select",
          label: "1. Using a scale from 1 to 5, where 1 is unacceptable and 5 is outstanding please enter the rating of the overall performance of the last chat representative you connected with today.",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Select one ...",
          required: true,
          requiredError: "This is a required field."
        }, {
          id: "inquiry-resolution",
          type: "select",
          label: "2. Did the Verizon Wholesale chat representative fully understand and take action to resolve your most recent technical inquiry?",
          options: ["Yes", "No"],
          placeholder: "Select one ..."
        }, {
          id: "recommendation-likelihood",
          type: "select",
          label: "3. How likely is it that you would recommend Verizon Live Chat service to a friend or colleague (where 5 is extremely likely and 1 is not at all likely)?",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Select one ...",
          required: true,
          requiredError: "This is a required field."
        }, {
          id: "communication-preference",
          type: "select",
          label: "4. Please indicate your preferred method of communicating with Verizon's Wholesale Technical Support Team.",
          options: ["Chat", "Telephone", "Email"],
          placeholder: "Select one ..."
        }, {
          id: "technical-support-feedback",
          type: "textarea",
          dynamic: {
            check: "overall-performance",
            logic: "any",
            value: "3;2;1"
          },
          label: "To improve our technical support, we would like to hear feedback as to why you provided this chat representative the above rating."
        }, {
          fields: [{
            id: "work-with-again",
            type: "select",
            label: "Would you choose to work with this representative again?",
            options: ["Yes", "No"],
            placeholder: "Select one ...",
            required: true,
            requiredError: "This is a required field."
          }, {
            id: "why-not",
            type: "textarea",
            dynamic: {
              check: "work-with-again",
              logic: "equals",
              value: "No"
            },
            label: "Why not?",
            required: true,
            requiredError: "This is a required field."
          }],
          group: "work-with"
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2804",
      transitions: {
        submit: {
          target: "node::2048"
        }
      }
    }
  };
});
define("Automatons/nodes/2048", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2048,
    type: "nodes",
    attributes: {
      name: "Verizon Wholesale Post Chat Survey Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2805"
    }
  };
});
define("Automatons/nodes/2049", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2049,
    type: "nodes",
    attributes: {
      name: "BGCO Verizon Wireless Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "recommendation-portalnps",
          type: "select",
          label: "How likely is it that you would recommend the online portal to a friend or colleague? (10 is \"Extremely likely\" and 0 is \"Not at all likely\")",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Please select one ..."
        }, {
          id: "experience-feedback-bgco",
          type: "textarea",
          label: "Please tell us how we can make your experience with the Verizon Online Portal better."
        }, {
          id: "resolution-confidence",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood-bgco",
          type: "select",
          label: "Based on a scale between 0 and 10, where 0 is \"Not at all Likely\" and 10 is \"Extremely Likely\", how likely is it you'd recommend Verizon Wireless to a friend or colleague?",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood-reason",
          type: "textarea",
          label: "Please tell us why you chose this rating or what we can do to improve our service."
        }],
        heading: "",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Detractor NPS - HILLIARD",
        conditions: ["recommendation-likelihood-bgco contains any 6, 5, 4, 3, 2, 1, 0", "agent-attribute.AgentLocation contains HILLIARD"],
        emailSpecId: 2,
        emailSubject: "BGCO - Survey Response Alert for [agent-id] / [agent-attribute.Team]",
        emailTemplate: 2018
      }, {
        name: "Detractor NPS - ALPHARETTA",
        conditions: ["recommendation-likelihood-bgco contains any 6, 5, 4, 3, 2, 1, 0", "agent-attribute.AgentLocation contains ALPHARETTA"],
        emailSpecId: 2,
        emailSubject: "BGCO - Survey Response Alert for [agent-id] / [agent-attribute.Team]",
        emailTemplate: 2018
      }, {
        name: "Detractor NPS - TUCSON",
        conditions: ["recommendation-likelihood-bgco contains any 6, 5, 4, 3, 2, 1, 0", "agent-attribute.AgentLocation contains TUCSON"],
        emailSpecId: 2,
        emailSubject: "BGCO - Survey Response Alert for [agent-id] / [agent-attribute.Team]",
        emailTemplate: 2018
      }],
      template: "template::2771",
      transitions: {
        submit: {
          target: "node::2050"
        }
      }
    }
  };
});
define("Automatons/nodes/2050", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2050,
    type: "nodes",
    attributes: {
      name: "BGCO Verizon Wireless Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2774"
    }
  };
});
define("Automatons/nodes/2051", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2051,
    type: "nodes",
    attributes: {
      name: "HBA Verizon Wireless Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "satisfaction-hba",
          type: "select",
          label: "Were you satisfied with the support you received during your chat session?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "experience-feedback-hba",
          type: "textarea",
          dynamic: {
            check: "satisfaction-hba",
            logic: "equals",
            value: "No"
          },
          label: "Please tell us what, if anything, the coordinator could have done to improve your experience."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2790",
      transitions: {
        submit: {
          target: "node::2052"
        }
      }
    }
  };
});
define("Automatons/nodes/2052", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2052,
    type: "nodes",
    attributes: {
      name: "HBA Verizon Wireless Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2789"
    }
  };
});
define("Automatons/nodes/2053", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2053,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "overall-performance-telco",
          type: "select",
          label: "Using a scale from 1 to 5, where 1 is unacceptable and 5 is outstanding please enter the rating of the overall performance of the last chat representative you connected with today.",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "resolution-confidence-telco",
          type: "select",
          label: "Did the Verizon chat representative fully understand and take action to resolve your most recent inquiry?",
          options: ["Yes", "No"],
          placeholder: "Please select one ..."
        }, {
          id: "recommendation-likelihood-telco",
          type: "select",
          label: "How likely is it that you would recommend Verizon Live Chat service to a friend or colleague (where 5 is extremely likely and 1 is not at all likely)?",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "communication-preference-telco",
          type: "select",
          label: "Please indicate your preferred method of communicating with Verizon.",
          options: ["Chat", "Telephone"],
          placeholder: "Please select one ..."
        }, {
          id: "representative-rating-reason",
          type: "textarea",
          label: "To improve our customer service, we would like to hear feedback as to why you provided this chat representative the above rating."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2799",
      transitions: {
        submit: {
          target: "node::2054"
        }
      }
    }
  };
});
define("Automatons/nodes/2054", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2054,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2803"
    }
  };
});
define("Automatons/nodes/2055", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2055,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Tech Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "overall-performance-telco",
          type: "select",
          label: "Using a scale from 1 to 5, where 1 is unacceptable and 5 is outstanding, please enter the rating for the overall performance of the last chat representative you connected with today.",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "resolution-confidence-telco",
          type: "select",
          label: "Did the Verizon chat representative fully understand and take action to resolve your most recent inquiry?",
          options: ["Yes", "No"],
          placeholder: "Please select one ..."
        }, {
          id: "communication-preference-telco",
          type: "select",
          label: "Please indicate your preferred method of communicating with Verizon.",
          options: ["Chat", "Telephone", "Letter"],
          placeholder: "Please select one ..."
        }, {
          id: "chat-call-deflect",
          type: "select",
          label: "Did this chat save you from having to call Verizon Technical Support?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "permission-to-discuss",
          type: "select",
          label: "Verizon may want to contact you to further discuss your service experience, do they have your permission to do so?",
          options: ["Yes", "No"],
          placeholder: "Please select one ..."
        }, {
          id: "recommendation-likelihood-telco",
          type: "select",
          label: "How likely is it that you would recommend Verizon Live Chat service to a friend or colleague (where 5 is extremely likely and 1 is not at all likely)?",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Please select one ..."
        }, {
          id: "representative-rating-reason",
          type: "textarea",
          label: "To improve our customer service, we would like to hear feedback as to why you provided this chat representative the above rating."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2801",
      transitions: {
        submit: {
          target: "node::2056"
        }
      }
    }
  };
});
define("Automatons/nodes/2056", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2056,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Tech Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2807"
    }
  };
});
define("Automatons/nodes/2057", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2057,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Social Media Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "overall-performance-telco-social",
          type: "select",
          label: "Using a scale from one to five, where one is unacceptable and five is outstanding, please enter the rating of the overall performance of the last chat representative you spoke with.",
          options: ["5", "4", "3", "2", "1"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "resolution-confidence-telco",
          type: "select",
          label: "Did the Verizon representative fully understand and take action to resolve your most recent inquiry?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-rating-reason-social-media",
          type: "textarea",
          label: "To improve our customer service, we would like to hear feedback as to why you provided this chat representative the above rating."
        }],
        heading: "",
        next: "submit"
      },
      surveyAlerts: [{
        name: "VZT-Social-Media-Superstar ",
        conditions: ["overall-performance-telco-social equals 5", "resolution-confidence-telco equals Yes"],
        emailSpecId: 10,
        emailSubject: "VZT Social Media - Survey Response Alert - Superstar!",
        emailTemplate: "template::2024"
      }, {
        name: "VZT-Social-Media-Coaching ",
        conditions: ["overall-performance-telco-social contains any 5, 4, 3, 2", "resolution-confidence-telco equals No"],
        emailSpecId: 11,
        emailSubject: "VZT Social Media - Survey Response Alert - Coaching!",
        emailTemplate: "template::2025"
      }],
      template: "template::2808",
      transitions: {
        submit: {
          target: "node::2058"
        }
      }
    }
  };
});
define("Automatons/nodes/2058", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2058,
    type: "nodes",
    attributes: {
      name: "Verizon Telco Social Media Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2059", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2059,
    type: "nodes",
    attributes: {
      name: "VZT App Router - Initial",
      type: "router",
      onEntry: function onEntry() {
        var agentGroup = top.tcData.TC_AGENT_GROUP;

        switch (agentGroup) {
          case 'WLN_Con_Sales':
            return 'node::2060';
          case 'WLN_Con_Service':
            return 'node::2061';
          case 'WLN_Tech_Consumer':
            return 'node::2062';
          case 'WLN_Tech_SMB':
            return 'node::2063';
          case 'WLN_SMB_Sales':
            return 'node::2064';
          case 'WLN_SMB_Service':
            return 'node::2065';
        }
      }
    }
  };
});
define("Automatons/nodes/2060", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2060,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_Con_Sales",
      type: "chat",
      chatRouter: {
        agentGroup: 10005181,
        agentsBusyNode: "node::2066",
        businessUnit: 19000978,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2061", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2061,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_Con_Service",
      type: "chat",
      chatRouter: {
        agentGroup: 10005413,
        agentsBusyNode: "node::2066",
        businessUnit: 19000978,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2062", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2062,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_Tech_Consumer",
      type: "chat",
      chatRouter: {
        agentGroup: 10005414,
        agentsBusyNode: "node::2066",
        businessUnit: 19001017,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2063", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2063,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_Tech_SMB",
      type: "chat",
      chatRouter: {
        agentGroup: 10005415,
        agentsBusyNode: "node::2066",
        businessUnit: 19001017,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2064", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2064,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_SMB_Sales",
      type: "chat",
      chatRouter: {
        agentGroup: 10005442,
        agentsBusyNode: "node::2066",
        businessUnit: 19001026,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2065", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2065,
    type: "nodes",
    attributes: {
      name: "Agent Group - WLN_SMB_Service",
      type: "chat",
      chatRouter: {
        agentGroup: 10005443,
        agentsBusyNode: "node::2066",
        businessUnit: 19001026,
        checkAgentAvailability: true,
        outsideHopNode: "node::2066"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2066", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2066,
    type: "nodes",
    attributes: {
      name: "VZT Unavailable",
      type: "unavailable",
      isOutcomeNode: 1,
      outcomeMessage: "Agents are unavailable",
      template: "template::2802"
    }
  };
});
define("Automatons/nodes/2067", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2067,
    type: "nodes",
    attributes: {
      name: "Transition Support - Chat Node",
      type: "chat",
      chatRouter: {
        agentGroup: 10005599,
        businessUnit: 19000919,
        checkAgentAvailability: true,
        outsideHopNode: "node::2006"
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2068", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2068,
    type: "nodes",
    attributes: {
      name: "Care-Mobile-NPS_Spanish Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "confiado-solucion",
          type: "radio",
          label: "¿Se sintió confiado en la solución que le dio el representante?",
          options: ["Si", "No"],
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "gustaria-trabajar",
          type: "radio",
          label: "¿Le gustaría volver a trabajar con este Representante?",
          options: ["Si", "No"],
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "recomiende",
          type: "select",
          label: "¿Qué tan probable es que usted recomiende Verizon Wireless a un amigo o colega? (10 altamente probable, 0 ninguna probabilidad)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Por favor escoja uno",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "mejorar-experiencia",
          type: "textarea",
          label: "Por favor dinos si hubo algo donde el representante pudo haber hecho para mejorar tu experiencia.",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }],
        heading: "",
        next: "submit",
        submit: "Enviar"
      },
      template: "template::2781",
      transitions: {
        submit: {
          target: "node::2069"
        }
      }
    }
  };
});
define("Automatons/nodes/2069", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2069,
    type: "nodes",
    attributes: {
      name: "Care-Mobile-NPS_Spanish Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2777"
    }
  };
});
define("Automatons/nodes/2070", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2070,
    type: "nodes",
    attributes: {
      name: "Care-Mobile-NoNPS_Spanish Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "confiado-solucion",
          type: "radio",
          label: "¿Se sintió confiado en la solución que le dio el representante?",
          options: ["Si", "No"],
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "gustaria-trabajar",
          type: "radio",
          label: "¿Le gustaría volver a trabajar con este Representante?",
          options: ["Si", "No"],
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "mejorar-experiencia",
          type: "textarea",
          label: "Por favor dinos si hubo algo donde el representante pudo haber hecho para mejorar tu experiencia."
        }],
        heading: "",
        next: "submit",
        submit: "Enviar"
      },
      template: "template::2786",
      transitions: {
        submit: {
          target: "node::2071"
        }
      }
    }
  };
});
define("Automatons/nodes/2071", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2071,
    type: "nodes",
    attributes: {
      name: "Care-Mobile-NoNPS_Spanish Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2784"
    }
  };
});
define("Automatons/nodes/2072", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2072,
    type: "nodes",
    attributes: {
      name: "Desktop CareVerizonWirelessNoNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "confidence-resolution",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "like-working-with-representative",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2780",
      transitions: {
        submit: {
          target: "node::2073"
        }
      }
    }
  };
});
define("Automatons/nodes/2073", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2073,
    type: "nodes",
    attributes: {
      name: "Desktop CareVerizonWirelessNoNPSd Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2074", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2074,
    type: "nodes",
    attributes: {
      name: "Mobile CareVerizonWirelessNoNPS Post Chat Survey - Initial",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "radio",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "radio",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2791",
      transitions: {
        submit: {
          target: "node::2075"
        }
      }
    }
  };
});
define("Automatons/nodes/2075", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2075,
    type: "nodes",
    attributes: {
      name: "Mobile CareVerizonWirelessNoNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2792"
    }
  };
});
define("Automatons/nodes/2076", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2076,
    type: "nodes",
    attributes: {
      name: "Care-Desktop-NPS_Spanish Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "confiado-solucion",
          type: "select",
          label: "¿Se sintió confiado en la solución que le dio el representante?",
          options: ["Si", "No"],
          placeholder: "Por favor escoja uno",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "gustaria-trabajar",
          type: "select",
          label: "¿Le gustaría volver a trabajar con este Representante?",
          options: ["Si", "No"],
          placeholder: "Por favor escoja uno",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "recomiende",
          type: "select",
          label: "¿Qué tan probable es que usted recomiende Verizon Wireless a un amigo o colega? (10 altamente probable, 0 ninguna probabilidad)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Por favor escoja uno",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }, {
          id: "mejorar-experiencia",
          type: "textarea",
          label: "Por favor dinos si hubo algo donde el representante pudo haber hecho para mejorar tu experiencia.",
          required: true,
          requiredError: "Por favor contesta esta pregunta:"
        }],
        heading: "",
        next: "submit",
        submit: "Enviar"
      },
      template: "template::2772",
      transitions: {
        submit: {
          target: "node::2077"
        }
      }
    }
  };
});
define("Automatons/nodes/2077", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2077,
    type: "nodes",
    attributes: {
      name: "Care-Desktop-NPS_Spanish Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2773"
    }
  };
});
define("Automatons/nodes/2078", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2078,
    type: "nodes",
    attributes: {
      name: "Desktop CareVerizonWirelessNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood",
          type: "select",
          label: "How likely is it that you would recommend Verizon Wireless to a friend or colleague? (10 Extremely Likely, 0 Not at all Likely)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience.",
          required: true,
          requiredError: "Please answer the following question:"
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2782",
      transitions: {
        submit: {
          target: "node::2079"
        }
      }
    }
  };
});
define("Automatons/nodes/2079", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2079,
    type: "nodes",
    attributes: {
      name: "Desktop CareVerizonWirelessNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2080", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2080,
    type: "nodes",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNoNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience."
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2778",
      transitions: {
        submit: {
          target: "node::2081"
        }
      }
    }
  };
});
define("Automatons/nodes/2081", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2081,
    type: "nodes",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNoNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2082", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2082,
    type: "nodes",
    attributes: {
      name: "Mobile CareVerizonWirelessNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "radio",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "radio",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood",
          type: "radio",
          label: "How likely is it that you would recommend Verizon Wireless to a friend or colleague? (10 Extremely Likely, 0 Not at all Likely)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience.",
          required: true,
          requiredError: "Please answer the following question:"
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2793",
      transitions: {
        submit: {
          target: "node::2083"
        }
      }
    }
  };
});
define("Automatons/nodes/2083", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2083,
    type: "nodes",
    attributes: {
      name: "Mobile CareVerizonWirelessNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2794"
    }
  };
});
define("Automatons/nodes/2084", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2084,
    type: "nodes",
    attributes: {
      name: "Chat - Agents Available",
      type: "polling",
      template: "template::2009"
    }
  };
});
define("Automatons/nodes/2085", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2085,
    type: "nodes",
    attributes: {
      name: "Transition Support - Backup",
      type: "backup",
      template: "template::2016",
      who: "transition support coordinators"
    }
  };
});
define("Automatons/nodes/2086", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2086,
    type: "nodes",
    attributes: {
      name: "Global Sub Options",
      type: "routing",
      header: "Please select how we can help you with your international services.",
      next_transition: "next",
      options: [{
        text: "I have questions about global services"
      }, {
        text: "I'm currently traveling"
      }],
      template: "template::2003",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('I have questions about global services') > -1",
          target: "node::2015"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('currently traveling') > -1",
          target: "node::2015"
        }]
      }
    }
  };
});
define("Automatons/nodes/2087", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2087,
    type: "nodes",
    attributes: {
      name: "MVTrans Chat - Busy",
      type: "queue",
      isOutcomeNode: 1,
      node_id: "node::2035",
      outcomeMessage: "No agents are available.",
      template: "template::2014",
      topic: "your account"
    }
  };
});
define("Automatons/nodes/2088", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2088,
    type: "nodes",
    attributes: {
      name: "Verizon Wholesale Prechat Form - Initial",
      type: "survey",
      fieldsets: [{
        name: "Name",
        type: "text",
        dataErrorMesssage: "Invalid character",
        isRequired: true,
        label: "Name:",
        maxlength: "50",
        pattern: "^[a-zA-Z\\s]*$",
        placeholder: "Enter first and last name",
        requiredErrorMesssage: "Name is a required field"
      }, {
        name: "Device",
        type: "textarea",
        dataErrorMesssage: "Invalid character",
        isRequired: true,
        label: "Device:",
        maxlength: "250",
        pattern: "^[0-9A-Za-z, ]*$",
        placeholder: "MDN, MIN, Device ID",
        requiredErrorMesssage: "Device is a required field"
      }, {
        name: "Issue",
        type: "select",
        isRequired: true,
        label: "Issue:",
        maxlength: "50",
        options: ["Signal", "Calling", "Texting", "Pic Messaging", "Data", "Voicemail", "Caller ID"],
        otherplaceholder: "Enter text here",
        placeholder: "Please select your reason for chatting",
        requiredErrorMesssage: "Issue is a required field",
        showExtraInput: ["Signal", "Calling", "Texting", "Pic Messaging", "Data", "Voicemail", "Caller ID"]
      }, {
        name: "Start date",
        type: "text",
        dataErrorMesssage: "Invalid format",
        isRequired: true,
        label: "Start date:",
        pattern: "^\\d{2}\\/\\d{2}\\/\\d{4}$",
        placeholder: "Date issue started mm/dd/yyyy",
        requiredErrorMesssage: "Start date is a required field"
      }, {
        name: "Address",
        type: "text",
        dataErrorMesssage: "Invalid character",
        isRequired: true,
        label: "Address:",
        pattern: "^[a-zA-Z0-9,.\\-\\_\\/!? ]*$",
        placeholder: "Address of issue occurrence",
        requiredErrorMesssage: "Address is a required field"
      }, {
        name: "Completed troubleshooting steps",
        type: "checkbox",
        isRequired: true,
        label: "Completed troubleshooting steps:",
        minRequired: 1,
        options: ["Verify MDN", "Check Buckets", "SIM & Device ID", "3rd party Apps", "4G Status = CN", "Sent Test", "Check Coverage", "Power Cycle"],
        placeholder: "Steps completed prior to chat",
        requiredErrorMesssage: "At least one option must be selected"
      }],
      header: "Welcome to Verizon Wireless Wholesale.",
      node_id: "node::2097",
      subheader: "To help us serve you better, please provide some information before we begin.",
      template: "template::2023"
    }
  };
});
define("Automatons/nodes/2089", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2089,
    type: "nodes",
    attributes: {
      name: "Verizon Wireless Chat Node",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004875,
        businessUnit: 19000909,
        checkAgentAvailability: false,
        showLayers: "btnFontSize btnPrint btnEmail btnEmail2 btnMuteOn btnMuteOff"
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var phoneNumber = api.forms["Phone Number"];
        var evt = {
          "phone_number": phoneNumber
        };
        api.fireCustomEvent("setPhoneNumberFromPrechat", evt);

        var formData = api.getFormData();
        var customerName = api.forms['First Name'] || 'Me';

        customerName = customerName.toLowerCase();
        customerName = customerName.charAt(0).toUpperCase() + customerName.slice(1);
        var newFormData = formData + '\nCustomerDisplayName: ' + customerName + "\n";

        api.engageChat({
          formData: newFormData
        });
      }
    }
  };
});
define("Automatons/nodes/2091", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2091,
    type: "nodes",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "resolution-confidence",
          type: "select",
          label: "Are you confident in the resolution the representative provided?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-satisfaction",
          type: "select",
          label: "Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood",
          type: "select",
          label: "How likely is it that you would recommend Verizon Wireless to a friend or colleague? (10 Extremely Likely, 0 Not at all Likely)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "Please tell us what, if anything, the representative could have done to improve your experience.",
          required: true,
          requiredError: "Please answer the following question:"
        }],
        heading: "",
        next: "submit"
      },
      template: "template::2776",
      transitions: {
        submit: {
          target: "node::2092"
        }
      }
    }
  };
});
define("Automatons/nodes/2092", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2092,
    type: "nodes",
    attributes: {
      name: "Desktop PrepaidVerizonWirelessNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2093", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2093,
    type: "nodes",
    attributes: {
      name: "Sales-Mobile-NoNPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "representative-resolution",
          type: "radio",
          label: "Based on your most recent Internet chat session with Verizon Wireless, did the last chat representative fully understand and take action to address your needs?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-performance",
          type: "radio",
          label: "Considering your Internet chat session with the last representative, how would you rate their performance? (10 Outstanding, 0 Unacceptable)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-politeness",
          type: "radio",
          label: "How well do you feel this agent treated you? (10 Very Polite, 0 Not at all Polite)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-knowledge",
          type: "radio",
          label: "Was the agent knowledgeable about our products and services? (10 Very Knowledgeable, 0 Not at all Knowledgeable)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "chat-improvement",
          type: "textarea",
          label: "Verizon Wireless would like to understand how to improve our Chat service. Please take a moment to tell us why you rated Verizon Wireless this way. (Please be as specific and detailed as possible in your answer below.)"
        }],
        heading: "Thank you for chatting. Please take a moment to complete the following brief survey.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Detractor ERP - Etech",
        conditions: {
          and: [{
            or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3", "representative-performance equals 4", "representative-performance equals 5"]
          }, {
            or: ["agent-attribute.Vendor contains Etech", "agent-attribute.Vendor contains ETECH"]
          }]
        },
        emailSpecName: "Detractor-ERP-Etech",
        emailSubject: "VZW M/T - Survey Response Alert for [agent-id] / [agent-attribute.Team]",
        emailTemplate: 2026
      }, {
        name: "Detractor ERP - Afni",
        conditions: {
          and: [{
            or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3", "representative-performance equals 4", "representative-performance equals 5", "representative-performance equals 6", "representative-performance equals 7"]
          }, {
            or: ["agent-attribute.Vendor contains Afni", "agent-attribute.Vendor contains AFNI"]
          }]
        },
        emailSpecName: "Detractor-ERP-Afni",
        emailSubject: "VZW M/T - Survey Response Alert for [agent-id] / [agent-attribute.Team]",
        emailTemplate: 2026
      }, {
        name: "Detractor - TC P4P",
        conditions: {
          and: [{
            or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3", "representative-performance equals 4", "representative-performance equals 5", "representative-performance equals 6", "representative-performance equals 7"]
          }, "agent-attribute.Vendor contains ANTONIO"]
        },
        emailSpecName: "Detractor-TC-P4P",
        emailSubject: "VZW - Survey Response Alert!",
        emailTemplate: 2027
      }],
      template: "template::2797",
      transitions: {
        submit: {
          target: "node::2094"
        }
      }
    }
  };
});
define("Automatons/nodes/2094", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2094,
    type: "nodes",
    attributes: {
      name: "Sales-Mobile-NoNPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2795"
    }
  };
});
define("Automatons/nodes/2095", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2095,
    type: "nodes",
    attributes: {
      name: "Sales-Mobile-NPS Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "representative-resolution",
          type: "radio",
          label: "Based on your most recent Internet chat session with Verizon Wireless, did the last chat representative fully understand and take action to address your needs?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-performance",
          type: "radio",
          label: "Considering your Internet chat session with the last representative, how would you rate their performance? (10 Outstanding, 0 Unacceptable)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-politeness",
          type: "radio",
          label: "How well do you feel this agent treated you? (10 Very Polite, 0 Not at all Polite)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "representative-knowledge",
          type: "radio",
          label: "Was the agent knowledgeable about our products and services? (10 Very Knowledgeable, 0 Not at all Knowledgeable)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "recommendation-likelihood",
          type: "radio",
          label: "How likely is it that you would recommend Verizon Wireless to a friend or colleague? (10 Extremely Likely, 0 Not at all Likely)",
          options: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "chat-improvement",
          type: "textarea",
          label: "Verizon Wireless would like to understand how to improve our Chat service. Please take a moment to tell us why you rated Verizon Wireless this way. (Please be as specific and detailed as possible in your answer below.)",
          required: true,
          requiredError: "Please answer the following question:"
        }],
        heading: "Thank you for chatting. Please take a moment to complete the following brief survey.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "ERP-eTech",
        conditions: {
          or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3", "representative-performance equals 4", "representative-performance equals 5"]
        },
        emailSpecName: "ERP-eTech",
        emailSubject: "ERP-eTech – Survey Response Alert",
        emailTemplate: 3233
      }, {
        name: "NPS-eTech",
        conditions: {
          or: ["recommendation-likelihood equals 0", "recommendation-likelihood equals 1", "recommendation-likelihood equals 2", "recommendation-likelihood equals 3", "recommendation-likelihood equals 4", "recommendation-likelihood equals 5"]
        },
        emailSpecName: "NPS-eTech",
        emailSubject: "NPS-eTech – Survey Response Alert",
        emailTemplate: 3234
      }, {
        name: "ERP-Afni",
        conditions: {
          or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3", "representative-performance equals 4", "representative-performance equals 5"]
        },
        emailSpecName: "ERP-Afni",
        emailSubject: "ERP-Afni – Survey Response Alert",
        emailTemplate: 3233
      }, {
        name: "NPS-Afni",
        conditions: {
          or: ["recommendation-likelihood equals 0", "recommendation-likelihood equals 1", "recommendation-likelihood equals 2", "recommendation-likelihood equals 3", "recommendation-likelihood equals 4", "recommendation-likelihood equals 5"]
        },
        emailSpecName: "NPS-Afni",
        emailSubject: "NPS-Afni – Survey Response Alert",
        emailTemplate: 3234
      }, {
        name: "ERP-VzW-Business",
        conditions: {
          or: ["representative-performance equals 0", "representative-performance equals 1", "representative-performance equals 2", "representative-performance equals 3"]
        },
        emailSpecName: "ERP-VzW-Business",
        emailSubject: "ERP for VzW Business – Survey Response Alert",
        emailTemplate: 3233
      }, {
        name: "NPS-VzW-Business",
        conditions: {
          or: ["recommendation-likelihood equals 0", "recommendation-likelihood equals 1", "recommendation-likelihood equals 2", "recommendation-likelihood equals 3"]
        },
        emailSpecName: "NPS-VzW-Business",
        emailSubject: "NPS for VzW Business – Survey Response Alert",
        emailTemplate: 3234
      }],
      template: "template::2796",
      transitions: {
        submit: {
          target: "node::2096"
        }
      }
    }
  };
});
define("Automatons/nodes/2096", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2096,
    type: "nodes",
    attributes: {
      name: "Sales-Mobile-NPS Post Chat Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2798"
    }
  };
});
define("Automatons/nodes/2097", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2097,
    type: "nodes",
    attributes: {
      name: "Wholesales Chat Node",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005563,
        businessUnit: 19001055,
        checkAgentAvailability: false
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2105", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2105,
    type: "nodes",
    attributes: {
      name: "AP - Vzw BGCO Video",
      type: "agent-pushed",
      template: "template::2809"
    }
  };
});
define("Automatons/nodes/2107", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2107,
    type: "nodes",
    attributes: {
      name: "AP - Plan Comparison",
      type: "agent-pushed",
      image: "plan-comparison.png",
      template: "template::2851"
    }
  };
});
define("Automatons/nodes/2109", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2109,
    type: "nodes",
    attributes: {
      name: "AP Why Verizon Rootmetrics 2017",
      type: "agent-pushed",
      image: "why-verizon-rootmetrics.png",
      template: "template::2852"
    }
  };
});
define("Automatons/nodes/2110", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2110,
    type: "nodes",
    attributes: {
      name: "AP - Better Speed Matters Vs Sprint",
      type: "agent-pushed",
      image: "plan-comparison.png",
      template: "template::2853"
    }
  };
});
define("Automatons/nodes/2111", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2111,
    type: "nodes",
    attributes: {
      name: "AP - Better Coverage Matters Vs Tmobile",
      type: "agent-pushed",
      image: "better-coverage-matters-tmobile.png",
      template: "template::2854"
    }
  };
});
define("Automatons/nodes/2112", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2112,
    type: "nodes",
    attributes: {
      name: "Care options",
      type: "routing",
      header: "How can we help you today?",
      options: [{
        text: "Manage my account or bill"
      }, {
        text: "Get support for my device"
      }, {
        text: "Upgrade equipment"
      }, {
        text: "Get a recent order status"
      }, {
        text: "Activate my device"
      }],
      template: "template::2855",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('Manage my account or bill') > -1",
          target: "node::2113"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Get support for my device') > -1",
          target: "node::2114"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Upgrade equipment') > -1",
          target: "node::2114"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Get a recent order status') > -1",
          target: "node::2119"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Activate my device') > -1",
          target: "node::2119"
        }]
      }
    }
  };
});
define("Automatons/nodes/2113", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2113,
    type: "nodes",
    attributes: {
      name: "MVTrans Agent Group",
      type: "chat",
      chatRouter: {
        agentGroup: 10004687,
        agentsBusyNode: "node::2118",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding your account. How can we help you today?",
        deferChatRouting: true,
        qThreshold: 1.5
      },
      deferChatRouting: true,
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2114", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2114,
    type: "nodes",
    attributes: {
      name: "Device Agent Group",
      type: "chat",
      chatRouter: {
        agentGroup: 10004690,
        agentsBusyNode: "node::2118",
        businessUnit: 19000866,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the Verizon Wireless Chat Team regarding your device. How can we help you today?",
        qThreshold: 1.5
      },
      deferChatRouting: true,
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2115", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2115,
    type: "nodes",
    attributes: {
      name: "Order Status",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      redirectTarget: "current",
      redirectUrl: "https://www.verizonwireless.com/vzw/ordertracking/index.jsp"
    }
  };
});
define("Automatons/nodes/2116", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2116,
    type: "nodes",
    attributes: {
      name: "Activate Device Video",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      redirectTarget: "current",
      redirectUrl: "https://www.verizonwireless.com/support/how-to-activate-device-video"
    }
  };
});
define("Automatons/nodes/2118", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2118,
    type: "nodes",
    attributes: {
      name: "Agents are unavailable",
      type: "unavailable",
      content: "We apologize for the extended hold time. You'll be placed into a queue as soon as we have some availability.",
      header: "All Agents are busy...",
      pollAgentAvailability: true,
      template: "template::2856",
      transitions: {
        pollAA: [{
          AA: true,
          chatSlots: true,
          condition: "api.forms['Last Option Selected'].indexOf('Manage my account or bill') > -1",
          qThreshold: 1,
          target: "node::2113"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Manage my account or bill') > -1",
          qThreshold: 1.5,
          queueSlots: true,
          target: "node::2113"
        }, {
          AA: true,
          chatSlots: true,
          condition: "api.forms['Last Option Selected'].indexOf('Get support for my device') > -1",
          qThreshold: 1,
          target: "node::2114"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Get support for my device') > -1",
          qThreshold: 1.5,
          queueSlots: true,
          target: "node::2114"
        }, {
          AA: true,
          chatSlots: true,
          condition: "api.forms['Last Option Selected'].indexOf('Upgrade equipment') > -1",
          qThreshold: 1,
          target: "node::2114"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Upgrade equipment') > -1",
          qThreshold: 1.5,
          queueSlots: true,
          target: "node::2114"
        }]
      }
    }
  };
});
define("Automatons/nodes/2119", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2119,
    type: "nodes",
    attributes: {
      name: "Redirect",
      type: "loading",
      header: "To better assist you, we are redirecting you to a page that can help you with your inquiry.",
      onEntry: function onEntry() {
        api.setTimeout(function () {
          api.triggerTransition('redirect_to');
        }, 4000);
      },
      template: "template::2857",
      transitions: {
        redirect_to: [{
          condition: "api.forms['Last Option Selected'].indexOf('Get a recent order status') > -1",
          target: "node::2115"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Activate my device') > -1",
          target: "node::2116"
        }]
      }
    }
  };
});
define("Automatons/nodes/2120", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2120,
    type: "nodes",
    attributes: {
      name: "VzW Sales VA-Question",
      type: "survey",
      formify: {
        fields: [{
          id: "recommend-vz-wireless",
          type: "radio",
          headingLeft: "Very Unlikely",
          headingRight: "Very Likely",
          label: "How likely are you to recommend Verizon Wireless to someone else?",
          options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          required: true,
          requiredError: "This is a required field."
        }, {
          id: "recommend-someone-vz-wireless",
          type: "radio",
          headingLeft: "Unacceptable",
          headingRight: "Outstanding",
          label: "Please rate your experience with the Virtual Assistant today.",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          required: true,
          requiredError: "This is a required field."
        }, {
          id: "recommend-someone-vz-wireless-feedback",
          type: "textarea",
          label: "Please take a moment to tell us why you rated the Virtual Assistant this way."
        }],
        hasNoRequiredItems: true,
        next: "submit"
      },
      onEntry: function onEntry() {
        api.resize(400, 500);
      },
      subHeading: "",
      template: "template::2901",
      transitions: {
        submit: {
          target: "node::2121"
        }
      }
    }
  };
});
define("Automatons/nodes/2121", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2121,
    type: "nodes",
    attributes: {
      name: "VzW Sales Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2902"
    }
  };
});
define("Automatons/nodes/2125", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2125,
    type: "nodes",
    attributes: {
      name: "HBA Support options",
      type: "routing",
      header: "Welcome to Verizon Wireless.",
      options: [{
        text: "Care support inquiry"
      }, {
        text: "Technical support inquiry"
      }],
      subHeading: "Please choose one of the following options so that we can route you to the correct agent.",
      template: "template::2903",
      transitions: {
        next: [{
          condition: "api.forms['Last Option Selected'].indexOf('Care support inquiry') > -1",
          target: "node::2126"
        }, {
          condition: "api.forms['Last Option Selected'].indexOf('Technical support inquiry') > -1",
          target: "node::2127"
        }]
      }
    }
  };
});
define("Automatons/nodes/2126", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2126,
    type: "nodes",
    attributes: {
      name: "Support_Coordinator-Care AG",
      type: "chat",
      chatRouter: {
        agentGroup: 10006030,
        agentsBusyNode: "node::2127",
        businessUnit: 19000919,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for reaching out to the Support Coordinator Queue! Please provide the MTN, account password, and issue.",
        outsideHopNode: "node::2128",
        qThreshold: 1,
        scriptTreeId: 12200777
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var agentLocation = api.datapass.HBA_location;

        if (agentLocation) {
          api.engageChat({
            agentAttributes: 'AgentLocation,' + window.encodeURIComponent(agentLocation.toUpperCase())
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2127", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2127,
    type: "nodes",
    attributes: {
      name: "Support_Coordinator-Tech AG",
      type: "chat",
      chatRouter: {
        agentGroup: 10006031,
        businessUnit: 19000919,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for reaching out to the Support Coordinator Queue! Please provide the MTN, account password, and issue.",
        outsideHopNode: "node::2128",
        qThreshold: 99,
        scriptTreeId: 12200777
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var agentLocation = api.datapass.HBA_location;

        if (agentLocation) {
          api.engageChat({
            agentAttributes: 'AgentLocation,' + window.encodeURIComponent(agentLocation.toUpperCase())
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2128", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2128,
    type: "nodes",
    attributes: {
      name: "Agents Unavailable",
      type: "Outcome",
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        api.resize(400, 500);
      },
      template: "template::2904"
    }
  };
});
define("Automatons/nodes/2135", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2135,
    type: "nodes",
    attributes: {
      name: "VZW BFO Prechat Initial Node",
      type: "routing",
      header: "Welcome to Verizon Wireless BFO",
      options: [{
        text: "I have a general question regarding BFO Processes"
      }, {
        text: "I have an existing WFM number"
      }],
      subHeading: "Please choose one of the following:",
      template: "template::2935",
      transitions: {
        next: [{
          condition: "api.forms['BFO Option Selected'].indexOf('I have a general question regarding BFO Processes') > -1",
          target: "node::2136"
        }, {
          condition: "api.forms['BFO Option Selected'].indexOf('I have an existing WFM number') > -1",
          target: "node::2147"
        }]
      }
    }
  };
});
define("Automatons/nodes/2136", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2136,
    type: "nodes",
    attributes: {
      name: "VZW BFO Prechat Final Node",
      type: "Survey",
      fieldsets: [{
        name: "ECPD",
        type: "select",
        error: "Please answer the question.",
        label: "ECPD:",
        options: ["Profile Build", "SMB or GPO", "SPOC", "MYBIZ - Enrollment or Welcome Email", "Purchase Order", "One Talk", "Contracts"],
        placeholder: "Please select ECPD"
      }, {
        name: "OCC",
        type: "select",
        error: "Please answer the question.",
        label: "OCC:",
        options: ["Credit/Debit", "Bill Incentive Credit", "Rerate"],
        placeholder: "Please select OCC"
      }, {
        name: "RYL",
        type: "select",
        error: "Please answer the question.",
        label: "RYL:",
        options: ["Missing Discount", "Discount Removal/Change", "Discount Amount", "Customer Escalation"],
        placeholder: "Please select ECPD"
      }, {
        name: "Tax Exempt",
        type: "select",
        error: "Please answer the question.",
        label: "Tax Exempt:",
        options: ["New Exemptions", "Tax Documents", "Tax Credits"],
        placeholder: "Please select Tax Exempt"
      }, {
        name: "Other",
        type: "textarea",
        label: "Other:"
      }],
      header: "Please choose one of the following options so that we can serve you better.",
      node_id: "2144",
      subheader: "",
      template: "template::2013",
      transitions: {
        submit: {
          target: "node::2144"
        }
      }
    }
  };
});
define("Automatons/nodes/2137", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2137,
    type: "nodes",
    attributes: {
      name: "AP - Suspend Service initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::2936"
    }
  };
});
define("Automatons/nodes/2138", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2138,
    type: "nodes",
    attributes: {
      name: "AP - Add and Remove Features initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::2937"
    }
  };
});
define("Automatons/nodes/2142", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2142,
    type: "nodes",
    attributes: {
      name: "VZW BFO Post Chat Survey Initial",
      type: "survey",
      description: "CMRASI-1231",
      formify: {
        fields: [{
          id: "fully-understand",
          type: "radio",
          label: "1. Did the chat representative fully understand your request?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "resolve-concern",
          type: "radio",
          label: "2. Did the chat representative resolve your concern today?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "this-representative-again",
          type: "radio",
          label: "3. Would you choose to work with this representative again?",
          options: ["Yes", "No"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "interaction-was-simple",
          type: "radio",
          headingLeft: "Strongly Disagree",
          headingRight: "Strongly Agree",
          label: "4. My recent interaction with the BFO was simple.",
          options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-experience",
          type: "textarea",
          label: "5. What can we do to make it simpler for you?",
          validate: {
            maxlength: 500,
            maxlengthError: "Maximum of 500 character is allowed."
          }
        }],
        heading: "",
        next: "submit"
      },
      surveyAlerts: [{
        name: "BFO-Chat-Rep-Not-Helpful",
        conditions: {
          or: [{
            and: ["interaction-was-simple contains any 0, 5, 4, 3, 2, 1", "interaction-was-simple !== 10"]
          }, {
            and: ["fully-understand equals No", "this-representative-again equals No"]
          }]
        },
        emailSpecName: "BFO-After-Chat-Survey-Response-Alert-Poor",
        emailSubject: "BFO After Chat Survey Response Alert - Poor",
        emailTemplate: "template::3109"
      }, {
        name: "BFO-After-Chat-Survey-Response-Alert",
        conditions: [],
        emailSpecName: "BFO-After-Chat-Survey-Response-Alert",
        emailSubject: "BFO After Chat Survey _ Response Alert",
        emailTemplate: "template::2979"
      }],
      template: "template::2978",
      transitions: {
        submit: {
          target: "node::2143"
        }
      }
    }
  };
});
define("Automatons/nodes/2143", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2143,
    type: "nodes",
    attributes: {
      name: "VZW BFO Post Chat Survey Thankyou",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2938"
    }
  };
});
define("Automatons/nodes/2144", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2144,
    type: "nodes",
    attributes: {
      name: "AgentGroup BFO_Chat",
      type: "chat",
      chatRouter: {
        agentGroup: 10006047,
        agentsBusyNode: "node::2145",
        businessUnit: 19001112,
        checkAgentAvailability: true,
        clientOutcome: "Thank you for contacting the BFO. How can I help you?",
        outsideHopNode: "node::2146",
        qThreshold: 2,
        scriptTreeId: 12200784
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = '';

        for (var key in api.forms) {
          if (key[0] === '_') {
            continue;
          }

          if (typeof api.forms[key] === 'string' && api.forms[key].trim()) {
            formData += '- ' + key.replace(/_/g, ' ') + ': ' + api.forms[key].replace(/_/g, ' ') + '\n';
          }
        }

        api.engageChat({
          formData: formData
        });
      }
    }
  };
});
define("Automatons/nodes/2145", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2145,
    type: "nodes",
    attributes: {
      name: "AgentGroup BFO_Chat Busy",
      type: "self-help",
      isOutcomeNode: 1,
      template: "template::2980"
    }
  };
});
define("Automatons/nodes/2146", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2146,
    type: "nodes",
    attributes: {
      name: "AgentGroup BFO_Chat OHOP",
      type: "self-help",
      isOutcomeNode: 1,
      template: "template::2981"
    }
  };
});
define("Automatons/nodes/2147", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2147,
    type: "nodes",
    attributes: {
      name: "VZW BFO Prechat Enter WFM Numbers",
      type: "Survey",
      chatButtonName: "Next",
      fieldsets: [{
        name: "WFM Number 1",
        type: "text",
        error: "Please provide a WFM number.",
        hasPatternError: true,
        pattern: "^(?:[A-Za-z0-9]-?){1,20}$",
        patternError: "Please provide a valid WFM number.",
        placeholder: "Eg. WFM123456789012"
      }, {
        name: "WFM Number 2",
        type: "text",
        hasPatternError: true,
        pattern: "^$|^(?:[A-Za-z0-9]-?){1,20}$",
        patternError: "Please provide a valid WFM number.",
        placeholder: "Eg. WFM123456789012"
      }, {
        name: "WFM Number 3",
        type: "text",
        hasPatternError: true,
        pattern: "^$|^(?:[A-Za-z0-9]-?){1,20}$",
        patternError: "Please provide a valid WFM number.",
        placeholder: "Eg. WFM123456789012"
      }, {
        name: "WFM Number 4",
        type: "text",
        hasPatternError: true,
        pattern: "^$|^(?:[A-Za-z0-9]-?){1,20}$",
        patternError: "Please provide a valid WFM number.",
        placeholder: "Eg. WFM123456789012"
      }, {
        name: "WFM Number 5",
        type: "text",
        hasPatternError: true,
        pattern: "^$|^(?:[A-Za-z0-9]-?){1,20}$",
        patternError: "Please provide a valid WFM number.",
        placeholder: "Eg. WFM123456789012"
      }, {
        name: "Has a WFM request been submitted more than one time for this issue",
        type: "select",
        error: "Please answer the question.",
        isRequired: true,
        label: "Has a WFM request been submitted more than one time for this issue?",
        options: ["Yes", "No"],
        placeholder: "Please select one"
      }, {
        name: "Has it been more than 4 hours since you submitted your WFM request",
        type: "select",
        error: "Please answer the question.",
        isRequired: true,
        label: "Has it been more than 4 hours since you submitted your WFM request?",
        options: ["Yes", "No"],
        placeholder: "Please select one"
      }],
      header: "Please enter your WFM number",
      node_id: "2136",
      subheader: "",
      template: "template::2013",
      transitions: {
        submit: {
          target: "node::2136"
        }
      }
    }
  };
});
define("Automatons/nodes/2150", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2150,
    type: "nodes",
    attributes: {
      name: "BFO-File_Transfer-Disclaimer",
      type: "UploadFile",
      fileUpload: {
        messages: {
          badFileError: "A virus has been detected during the upload process, please check the file, and if virus-free, try again.",
          serverError: "There was an error in uploading the file to the server. Please try again.",
          sizeError: "File size cannot exceed 10 MB.",
          success: "File Successfully Uploaded",
          typeError: "The file type of the file is not supported. We are only able to access images (.jpg, .jpeg, .bmp, .gif, .png), word documents (.doc, .docx), excel spreadsheets (.xls, .xlsx), and PDF documents (.pdf)."
        }
      },
      template: "template::3022",
      transitions: {
        fileUpload: [{
          condition: "api.fileUploadStatus === 'success'",
          target: "close"
        }]
      }
    }
  };
});
define("Automatons/nodes/2151", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2151,
    type: "nodes",
    attributes: {
      name: "AP - Upgrade initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::3062"
    }
  };
});
define("Automatons/nodes/2152", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2152,
    type: "nodes",
    attributes: {
      name: "AP - Change Plan initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::3063"
    }
  };
});
define("Automatons/nodes/2153", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2153,
    type: "nodes",
    attributes: {
      name: "AP - Add Company User initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::3064"
    }
  };
});
define("Automatons/nodes/2154", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2154,
    type: "nodes",
    attributes: {
      name: "AP - Cost Center initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::3065"
    }
  };
});
define("Automatons/nodes/2155", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2155,
    type: "nodes",
    attributes: {
      name: "AP - Purchasing Packages initial",
      type: "agent-pushed",
      actions: {
        informAgentPressingClose: {
          action: "sendToAgent",
          params: "Customer pressed the close button."
        }
      },
      template: "template::3062"
    }
  };
});
define("Automatons/nodes/2157", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2157,
    type: "nodes",
    attributes: {
      name: "HBA Support location check",
      type: "self-help",
      isOutcomeNode: 1,
      template: "template::3067"
    }
  };
});
define("Automatons/nodes/2159", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2159,
    type: "nodes",
    attributes: {
      name: "VZT_Reconnect_Global_initial",
      template: "template::3108"
    }
  };
});
define("Automatons/nodes/2160", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2160,
    type: "nodes",
    attributes: {
      name: "Phone Image Node",
      type: "agent-pushed",
      alt: "telephone picture",
      image: "one-talk-phone.jpg",
      image_description: "one talk phone push form",
      template: "template::3110"
    }
  };
});
define("Automatons/nodes/2174", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2174,
    type: "nodes",
    attributes: {
      name: "VZT Graceful Reconnect Chat Node",
      type: "chat",
      chatRouter: {
        checkAgentAvailability: false,
        showLayers: "btnFontSize btnPrint btnEmail btnEmail2 btnMuteOn btnChime btnMinimize"
      },
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var businessUnitId = api.automatonDataMap.business_unit_id;
        var agentGroupId = api.automatonDataMap.agent_group_id;
        var agentName = api.automatonDataMap.agent_name;

        api.engageChat({
          agentGroupId: agentGroupId.toString(),
          businessUnitId: businessUnitId.toString(),
          agentName: agentName
        });
      }
    }
  };
});
define("Automatons/nodes/2175", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2175,
    type: "nodes",
    attributes: {
      name: "HBA Support location check - invalid",
      type: "self-help",
      isOutcomeNode: 1,
      template: "template::3237"
    }
  };
});
define('Automatons/styles/2001', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport #view-container {  height: 100%;  background-color: #f7f7f7;}#viewport [acif-node],#viewport [acif-node] * {  cursor: pointer;}#viewport .node__wrapper * {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  font-size: 14px;  color: #333;}#viewport .node__wrapper {  background-color: #F7F7F7;  padding: 20px 14px;  border-top: 1px solid #DFDFDF;  position: relative;  overflow: hidden;}#viewport .node__header {  margin: 0 0 10px;  font-family: NeueHaasGroteskDisplayBold, Arial, Helvetica, sans-serif;  font-size: 24px;  font-weight: 600;  color: #cd040b;  /*width: 320px;*/}#viewport .node__subheader {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  font-size: 13px;  color: #000;}#viewport .node__subheader--notice {  font-size: 18px;  margin-top: 0;}#viewport .notice {  padding: 0px 15px;  display: table;  width: 100%;  box-sizing: border-box;}#viewport .notice__icon {  vertical-align: top;  width: 45px;  position: absolute;  top: 15px;  right: 20px;}#viewport .hba__list {  display: block;  list-style: none;  padding: 0;  margin: 20px -20px 0;}#viewport .hba__item .i-r-arrow {  width: 11px;  height: 15px;  display: inline-block;  vertical-align: middle;  margin-left: 10px;}#viewport .hba__item {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  display: block;  padding: 10px 44px 10px 20px;  margin: 0;  font-size: 16px;  color: #000;  -webkit-transition: ease .15s background;  transition: ease .15s background;}#viewport .hba__item[acif-node]:hover {  background: #DFDFDF;}#viewport .hba__item[acif-node]:active {  background: #ccc;}#viewport .hba__item.is-inactive {  font-size: 16px;  color: #959595;}#viewport .hba__item button {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  border: 0px;  margin: 0;  background-color: transparent;  font-size: 16px;  padding: 0;}#viewport .hba__label {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: black;  padding: 5px 24px 5px 0px;  display: inline-block;  background-color: transparent;  background-position: right center;  background-repeat: no-repeat;  -webkit-transition: ease .15s padding;  transition: ease .15s padding;}#viewport .node__hop {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  font-size: 14px;  color: #666;  padding: 10px 10px 0px 10px;}#viewport .node__hop a {  color: #06c;  text-decoration: none;}#viewport .node__hop a:hover {  color: #06c;  text-decoration: underline;}#viewport .support {  padding: 0 15px;  color: black;}#viewport .support h2 {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  font-size: 18px;  margin-top: 0px;  color: black;  padding-bottom: 10px;}#viewport .support h3 {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  margin: 0 0 5px 0;  font-size: 12px;  color: black;}#viewport .support dl {  margin: 0 0 15px 0;  line-height: 18px;}#viewport .support dl dt,#viewport .support dl dd {  margin: 0;  display: inline-block;}#viewport .support dl dt {  font-size: 11px;  width: 35%;  margin-right: 5%;  text-align: right;  vertical-align: top;}#viewport .support dl dd {  font-size: 11px;  width: 55%;}#viewport .padding-bottom-30 {  padding-bottom: 30px;}#viewport .thick {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: black;  font-size: 16px;  line-height: 22px;}#viewport .thick a {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: #136CD1;}';
});
define('Automatons/styles/2004', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #A80309;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport .title {  font-size: 1.5em;}#viewport .subheader {  font-size: 12px;  margin: 0;  line-height: 14px;  color: #333;}#viewport .button-primary {  text-align: left;  width: 100%;}#viewport .button-primary [acif-template="template::2005"] {  float: right;}#viewport fieldset.invalid select {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport label {  letter-spacing: 0;  white-space: nowrap;}#viewport select {  padding: 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport select option {  color: #333;}#viewport select,#viewport input[type="text"] {  border: 1px solid transparent;  border-bottom-color: #CCC;  background-color: transparent;  transition: background-color 0.2s ease, border-color 0.2s ease;}#viewport select:focus,#viewport input[type="text"]:focus {  border-color: #CCC;  background-color: #fff;}';
});
define('Automatons/styles/2008', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */  /* Animations */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #A80309;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport #view-container {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  position: relative;  box-sizing: border-box;  height: 100%;}#viewport #view-container .flex-column {  height: 100%;  display: flex;  flex-flow: column wrap;  justify-content: space-between;}#viewport .heading {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .text {  flex-basis: 180px;}#viewport fieldset {  padding: 0;}#viewport .options {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .options .option {  display: block;  cursor: pointer;  /* Caret */}#viewport .options .option .option_content span.text {  font-weight: 400;  font-style: normal;  line-height: 20px;  text-decoration: none;  color: black;  display: inline-block;  vertical-align: middle;}#viewport .options .option [acif-template="template::2005"] {  position: absolute;  right: 0px;  top: 0px;  bottom: 0px;}#viewport .options .option:active .option_content span.text {  color: #990308;}#viewport .tip {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;  color: #cd040b;  font-size: 13px;}#viewport .tip::after {  content: "";  margin-left: 5px;  width: 13px;  height: 13px;  display: inline-block;  background-image: url(https://verizon-dev.inq.com/chatskins/sites/10004593/flash/VZW-Common-Assets/images/icon-caveat-2@2X.png);  background-repeat: no-repeat;  background-size: cover;}#viewport button {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  box-sizing: border-box;  cursor: pointer;  border: 0;  background: black;  text-align: left;  padding: 22px 30px;  font-size: 16px;  color: white;}#viewport button.btn-active {  background: #cd040b;}#viewport button.btn-inactive {  background: #a6a6a6;}#viewport button.extended {  width: 100%;}#viewport button span {  float: right;}#viewport button span svg {  float: right;  fill: white;}@media (min-width: 451px) {  #viewport #view-container {    padding: 25px 22px;  }  #viewport .options .option {    padding: 5px 0px;    margin-top: 15px;    /* Caret */  }  #viewport .options .option .option_content {    position: relative;    display: inline-block;  }  #viewport .options .option .option_content span.text {    font-size: 16px;    padding-right: 25px;  }  #viewport .options .option [acif-template="template::2005"] {    -webkit-transition: right .5s ease, color .2s ease;    transition: right .5s ease, color .2s ease;  }  #viewport .options .option:hover .option_content span.text {    color: #A80309;  }  #viewport .options .option:hover [acif-template="template::2005"] {    right: -10px;  }  #viewport [acif-action="back"] {    position: absolute;    bottom: 0px;    left: 0px;  }  #viewport [acif-action="back"] .caret {    position: relative;    left: 0;  }  #viewport [acif-action="back"]:hover .caret {    -webkit-animation: BACK-CARET 0.2s 1;    /* Safari 4+ */    -moz-animation: BACK-CARET 0.2s 1;    /* Fx 5+ */    -o-animation: BACK-CARET 0.2s 1;    /* Opera 12+ */    animation: BACK-CARET 0.2s 1;    /* IE 10+, Fx 29+ */  }}@media (max-width: 450px) {  #viewport #view-container {    border-top: 1px solid #ccc;    background-color: white;    padding: 0px;  }  #viewport #wrapper {    padding: 0px;  }  #viewport [acif-action="back"] {    display: block;    background-color: #a6a6a6;    padding: 20px 12px;  }  #viewport .heading,  #viewport .subheading {    padding-top: 20px;    padding-left: 18px;    padding-right: 18px;  }  #viewport .options .option {    position: relative;    border-bottom: 1px solid #ccc;    padding: 33px 18px;  }  #viewport .options .option .option_content {    color: black;    position: relative;  }  #viewport .options .option .option_content span.text {    font-size: 15px;    padding-right: 35px;  }  #viewport .options .option:active {    background-color: #a6a6a6;  }  #viewport .cushion {    padding: 0px 18px;  }}@keyframes BACK-CARET {  0% {    left: 0;  }  70% {    left: -4px;  }  100% {    left: 0;  }}';
});
define('Automatons/styles/2011', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  padding: 1em;  color: #fff;  background: #cf0000;  width: auto;  height: auto;  margin: auto;  padding: 20px 30px;  font-weight: bold;  border-radius: 0px;  transition: 0.2s;  letter-spacing: .8px;  font-weight: normal;  text-align: center;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-submit:hover {  transition: 0.2s;  background: #a80309 !important;}#viewport .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;}#viewport #view-container .heading {  font-weight: bold;}#viewport #view-container .heading-first-line {  display: block;  font-size: 1.5em;  color: #c6040b;  margin-bottom: 0.8em;}#viewport #view-container .formify-heading-required {  font-size: 0.85em;  font-weight: bold;  color: #c6040b;}#viewport #view-container .req-label {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #c6040b;}#viewport #view-container svg {  fill: white;  position: absolute;  margin-top: -32px;  margin-left: 200px;}#viewport #view-container button > svg {  margin-top: 3px;  margin-left: 25px;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container button {  float: none;}#viewport #view-container select {  padding: 0;  margin: 0.5em 0 0 0;  background: #fff;  color: #333;  height: inherit;  appearance: menulist !important;  -moz-appearance: menulist !important;  -webkit-appearance: menulist !important;}#viewport #view-container select::-ms-expand {  display: block !important;}#viewport #view-container footer {  background-color: inherit;}#viewport #thankYou {  font-size: 16px;  text-align: left;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou span.hidden-btn-desc {  position: absolute;  top: -9999px;  left: -9999px;  margin: 0;  padding: 0;}#viewport #thankYou p.lead {  font-size: 24px;  font-weight: bold;  color: #c6040b;  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  cursor: pointer;  border-radius: 0px;  background-color: #4b4b4b;  color: white;  font-weight: bold;  width: 135px;  height: 50px;  margin-top: 80px;  text-align: left;  padding-left: 30px;}#viewport div[acif-node-name="Desktop_EAVerizonWirelessNPS"] {  border-top: 1px solid #ccc;}';
});
define('Automatons/styles/2012', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #A80309;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport h1.heading {  line-height: initial;}';
});
define('Automatons/styles/2013', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  padding: 1em;  color: #fff;  background: #cf0000;  width: auto;  height: auto;  margin: auto;  padding: 20px 30px;  font-weight: bold;  border-radius: 0px;  transition: 0.2s;  letter-spacing: .8px;  font-weight: normal;  text-align: center;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-submit:hover {  transition: 0.2s;  background: #a80309 !important;}#viewport .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;  /* fix styling conflicts */}#viewport #view-container .heading {  font-weight: bold;  font-size: 10pt;  line-height: 1.2em;  color: #000;}#viewport #view-container .heading-first-line {  display: block;  font-size: 1.5em;  color: #c6040b;  margin-bottom: 0.8em;}#viewport #view-container .formify-heading-required {  font-size: 0.85em;  font-weight: bold;  color: #c6040b;}#viewport #view-container .req-label {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset-radio"] label {  margin: 0.5em 0 0.2em 0;}#viewport #view-container fieldset[class*="formify-fieldset-radio"] span {  margin-left: 0.5em;  font-size: 11pt;  color: #000;}#viewport #view-container fieldset[class*="formify-fieldset-radio"] input {  width: 20px;  height: 20px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container fieldset[class*="formify-fieldset"] {  border-top: 1px solid #999;}#viewport #view-container fieldset[class*="formify-label"] {  color: #000;  line-height: 1.2em;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;  width: 75%;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset-textarea"][acif-required="true"] > label::after {  content: " *";  color: #c6040b;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container button {  float: none;}#viewport #view-container select {  background-color: #fff;  padding: 0;}#viewport #view-container footer {  background-color: inherit;}#viewport #view-container .formify-legend {  margin-bottom: 0;  color: #000;  font-size: 11pt;}#viewport #thankYou {  font-size: 16px;  text-align: left;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou span.hidden-btn-desc {  position: absolute;  top: -9999px;  left: -9999px;  margin: 0;  padding: 0;}#viewport #thankYou p {  font-weight: bold;  color: #e0e0e0;  margin-bottom: 10%;  text-align: center;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}';
});
define('Automatons/styles/2014', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  padding: 1em;  color: #fff;  background: #cf0000;  width: auto;  height: auto;  margin: auto;  padding: 20px 30px;  font-weight: bold;  border-radius: 0px;  transition: 0.2s;  letter-spacing: .8px;  font-weight: normal;  text-align: center;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-submit:hover {  transition: 0.2s;  background: #a80309 !important;}#viewport .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;}#viewport #view-container .heading {  font-weight: bold;}#viewport #view-container .heading-first-line {  display: block;  font-size: 1.5em;  color: #c6040b;  margin-bottom: 0.8em;}#viewport #view-container .formify-heading-required {  font-size: 0.85em;  font-weight: bold;  color: #c6040b;}#viewport #view-container .req-label {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #c6040b;}#viewport #view-container svg {  fill: white;  position: absolute;  margin-top: -32px;  margin-left: 200px;}#viewport #view-container button > svg {  margin-top: 3px;  margin-left: 25px;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container button {  float: none;}#viewport #view-container select {  padding: 0;  margin: 0.5em 0 0 0;  background: #fff;  color: #333;  height: inherit;  appearance: menulist !important;  -moz-appearance: menulist !important;  -webkit-appearance: menulist !important;}#viewport #view-container select::-ms-expand {  display: block !important;}#viewport #view-container footer {  background-color: inherit;}#viewport #thankYou {  font-size: 16px;  text-align: left;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou span.hidden-btn-desc {  position: absolute;  top: -9999px;  left: -9999px;  margin: 0;  padding: 0;}#viewport #thankYou p.lead {  font-size: 24px;  font-weight: bold;  color: #c6040b;  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  cursor: pointer;  border-radius: 0px;  background-color: #4b4b4b;  color: white;  font-weight: bold;  width: 135px;  height: 50px;  margin-top: 80px;  text-align: left;  padding-left: 30px;}#viewport div[acif-node-name="Desktop_EAVerizonWirelessNPS"] {  border-top: 1px solid #ccc;}#viewport #view-container .heading-first-line {  margin-bottom: 0;  font-size: 1.125em;}#viewport #view-container .formify-heading-required {  display: none;}#viewport #view-container .required-heading {  color: #c6040b;  font-size: 12px;}';
});
define('Automatons/styles/2015', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  padding: 1em;  color: #fff;  background: #cf0000;  width: auto;  height: auto;  margin: auto;  padding: 20px 30px;  font-weight: bold;  border-radius: 0px;  transition: 0.2s;  letter-spacing: .8px;  font-weight: normal;  text-align: center;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-submit:hover {  transition: 0.2s;  background: #a80309 !important;}#viewport .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;  /* fix styling conflicts */}#viewport #view-container .heading {  font-weight: bold;  font-size: 1.2em;  color: #000;}#viewport #view-container .heading-first-line {  display: block;  font-size: 1.4em;  color: #c6040b;  margin-bottom: 0.4em;}#viewport #view-container .formify-heading-required {  font-size: 0.85em;  font-weight: bold;  color: #c6040b;}#viewport #view-container .req-label {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #c6040b;}#viewport #view-container svg {  fill: white;  position: absolute;  margin-top: -32px;  margin-left: 200px;}#viewport #view-container button > svg {  margin-top: 3px;  margin-left: 25px;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container button {  float: none;}#viewport #view-container select {  background-color: #fff;  padding: 4px;}#viewport #view-container footer {  background-color: inherit;}#viewport #thankYou {  font-size: 16px;  text-align: left;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou span.hidden-btn-desc {  position: absolute;  top: -9999px;  left: -9999px;  margin: 0;  padding: 0;}#viewport #thankYou p.lead {  font-size: 1.4em;  font-weight: bold;  color: #c6040b;  margin-bottom: 10%;  font-family: "arial black";}#viewport #thankYou span p:last-of-type {  font-weight: normal;  font-family: "arial";  font-size: 18px;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  cursor: pointer;  border-radius: 0px;  background-color: #4b4b4b;  color: white;  font-weight: bold;  width: 135px;  height: 50px;  margin-top: 60px;  text-align: left;  padding-left: 30px;}';
});
define('Automatons/styles/2016', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #A80309;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport #view-container {  overflow-y: scroll;  overflow-x: hidden;}#viewport .title {  font-size: 1.5em;}#viewport .subheader {  color: #333;  font-size: 12px;  line-height: 14px;  margin: 0;}#viewport .button-primary {  text-align: left;  width: 100%;  margin-top: 20px;}#viewport .button-primary [acif-template="template::2005"] {  float: right;}#viewport fieldset.invalid select {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport p.invalid-pattern {  color: #cd040b;  font-size: 12px;  font-weight: bold;  position: absolute;  right: 0;}#viewport p.invalid-required,#viewport p.invalid-pattern,#viewport p.invalid-min {  display: none;}#viewport fieldset.invalid-required .invalid-required,#viewport fieldset.invalid-pattern .invalid-pattern,#viewport fieldset.invalid-min .invalid-min {  display: block;}#viewport legend {  display: block;  font-size: 13px;  font-weight: bold;  line-height: 24.5px;  margin-bottom: 5px;  padding-top: 5px;}#viewport select {  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  color: #333;  display: block;  font-size: 12px;  font-weight: bold;  height: auto;  outline: 0;  padding: 10px;  width: 100%;}#viewport select option {  color: #333;}#viewport select,#viewport input[type="text"] {  border: 1px solid transparent;  border-bottom-color: #CCC;  background-color: transparent;  box-shadow: none;  transition: background-color 0.2s ease, border-color 0.2s ease;}#viewport select:focus,#viewport input[type="text"]:focus {  background-color: #fff;  border-color: #CCC;}#viewport textarea {  border: 1px solid transparent;  border-bottom-color: #CCC;  background-color: transparent;  box-shadow: none;  box-sizing: border-box;  padding: 12px 10px;  resize: none;  transition: background-color 0.2s ease, border-color 0.2s ease;  width: 100%;}#viewport textarea:focus {  background-color: #fff;  border-color: #CCC;}#viewport span {  font-weight: normal;  line-height: 20px;  vertical-align: top;}#viewport fieldset[type="checkbox"] label {  display: inline-block;  font-size: 13px;  font-weight: bold;  line-height: 24.5px;  margin-bottom: 2px;  margin-left: 10px;  vertical-align: top;  width: 150px;}#viewport fieldset[type="checkbox"] label:nth-of-type(even) {  float: right;}#viewport .arrow-svg {  float: right;  margin-top: 5px;}#viewport .required-text {  color: #cd040b;  font-size: small;  text-align: right;}#viewport .othertext {  margin-bottom: 5px;}#viewport .custom-checkbox {  position: absolute;  opacity: 0;}#viewport .custom-checkbox + span {  cursor: pointer;  display: block;  font-size: 12px;  line-height: 28px;  position: relative;  padding: 0 0 0 30px;}#viewport .custom-checkbox + spasssn::before {  content: "";  background: #fff;  box-sizing: border-box;  border: 2px solid #a0a0a0;  display: inline-block;  height: 20px;  margin-right: 10px;  vertical-align: text-top;  width: 20px;}#viewport .custom-checkbox:checked + span::before {  background: #cd040b;  border: 2px solid #cd040b;}#viewport .custom-checkbox + span::before {  background: #fff;  box-sizing: border-box;  border: 2px solid #a0a0a0;  content: "";  display: inline-block;  font-family: vzwIcons;  font-size: 9px;  height: 20px;  line-height: 15px;  left: 0;  margin-right: 10px;  padding: 1px 0 0;  position: absolute;  text-align: center;  top: 5px;  vertical-align: text-top;  width: 20px;}#viewport .custom-checkbox:hover + span::before {  border: 2px solid #cd040b;}#viewport .custom-checkbox + span:hover::before {  border: 2px solid #cd040b;}#viewport .custom-checkbox:checked + span::before {  background: #cd040b;  border-color: #cd040b;  color: #fff;  content: "\\002714";  font-size: 12px;}';
});
define('Automatons/styles/2021', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2024', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #container {  border-right: 1px solid #ac4141;  box-sizing: border-box;  height: 100%;  line-height: initial;  padding: 1px;  position: relative;  display: flex;  flex-direction: column;  justify-content: space-between;}#viewport #container .header {  color: #000;  font-weight: bold;  background-color: #D6D7D5;}#viewport #container div {  background-color: #FBFCFD;  border: 1px solid #D6D7D5;  color: #979696;  flex: 1;  padding: 20px 0 0 15px;}#viewport #container div img {  height: 20px;}#viewport #container div#close {  background: transparent;  border: none;  color: #fff;  cursor: pointer;  height: 10px;  width: 10px;  padding: 2px;  position: absolute;  bottom: 25px;  right: 60px;  text-align: center;  font-family: Arial, Helvetica, sans-serif;}#viewport #container div#close button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-weight: 500;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2025', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  padding-left: 20px;  padding-right: 10px;}#viewport #container {  box-sizing: border-box;  height: 100%;  line-height: initial;  padding: 15px 10px 10px 10px;  position: relative;  font-family: Arial, Helvetica, sans-serif;  font-size: 12px;}#viewport #container .content {  height: calc(100% - 40px);  overflow-y: auto;  overflow-x: hidden;}#viewport #container .header {  color: #000;  font-size: 1.8em;  font-weight: bold;  padding-bottom: 5px;}#viewport #container .header .image_container {  position: relative;}#viewport #container .header .image_container img {  height: 30px;  position: absolute;  left: -10px;  top: -10px;  z-index: -1;}#viewport #container .disclaimer {  font-size: 0.8em;  padding-top: 30px;}#viewport #container .bold {  font-weight: bold;}#viewport #container .red {  color: #d53329;}#viewport #container div#close {  background: transparent;  border: none;  color: #fff;  cursor: pointer;  width: 10px;  padding: 2px;  position: absolute;  bottom: 20px;  left: 45%;  text-align: center;  font-family: Arial, Helvetica, sans-serif;}#viewport #container div#close button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-weight: 500;  padding: 5px 10px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2026', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  padding-left: 20px;  padding-right: 10px;}#viewport #container {  box-sizing: border-box;  height: 100%;  line-height: initial;  padding: 25px 3px 10px 10px;  position: relative;  display: flex;  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;  font-family: Arial, Helvetica, sans-serif;  font-size: 10px;}#viewport #container .cell {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;  -webkit-flex: 0 0 50%;  -ms-flex: 0 0 50%;  flex: 0 0 50%;}#viewport #container .cell .vertical-center {  align-items: center;}#viewport #container .cell .baseline {  align-items: flex-end;  padding-bottom: 10px;}#viewport #container .header {  color: #000;  font-size: 2.2em;  font-weight: bold;  padding-bottom: 5px;}#viewport #container .jumbo {  font-size: 1.7em;}#viewport #container .jumbo_header {  color: #000;  font-size: 10.2em;  font-weight: bold;  line-height: 0.8;  padding-bottom: 5px;  text-align: right;}#viewport #container .disclaimer {  font-size: 0.9em;  padding-top: 10px;}#viewport #container .bold {  font-weight: bold;}#viewport #container .red {  color: #d53329;}#viewport #container img {  width: 100px;}#viewport #container div#close {  background: transparent;  border: none;  color: #fff;  cursor: pointer;  width: 10px;  padding: 2px;  position: absolute;  bottom: 20px;  left: 45%;  text-align: center;  font-family: Arial, Helvetica, sans-serif;}#viewport #container div#close button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-weight: 500;  padding: 5px 10px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}@media screen and (max-width: 750px) {  #viewport #container {    -webkit-flex-direction: column;    -ms-flex-direction: column;    flex-direction: column;  }  #viewport #container .cell {    -webkit-flex-direction: column;    -ms-flex-direction: column;    flex-direction: column;  }}';
});
define('Automatons/styles/2027', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  line-height: initial;  padding-left: 20px;  padding-right: 10px;}#viewport #container {  box-sizing: border-box;  height: 100%;  padding: 25px 3px 10px 10px;  position: relative;  font-family: Arial, Helvetica, sans-serif;  font-size: 12px;}#viewport #container .disclaimer {  font-size: 0.8em;  padding-top: 20px;}#viewport #container .bold {  font-weight: bold;}#viewport #container .red {  color: #d53329;}#viewport #container img {  width: 100%;}#viewport #container div#close {  background: transparent;  border: none;  color: #fff;  cursor: pointer;  width: 10px;  padding: 2px;  position: absolute;  bottom: 20px;  left: 45%;  text-align: center;  font-family: Arial, Helvetica, sans-serif;}#viewport #container div#close button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-weight: 500;  padding: 5px 10px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2028', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  padding-left: 20px;  padding-right: 10px;}#viewport #container {  box-sizing: border-box;  height: 100%;  line-height: initial;  padding: 25px 3px 10px 10px;  position: relative;  display: flex;  flex-direction: column;  font-family: Arial, Helvetica, sans-serif;  font-size: 12px;}#viewport #container .disclaimer {  font-size: 0.8em;  padding-top: 20px;}#viewport #container .bold {  font-weight: bold;}#viewport #container .red {  color: #d53329;}#viewport #container img {  width: 100%;}#viewport #container div#close {  background: transparent;  border: none;  color: #fff;  cursor: pointer;  width: 10px;  padding: 2px;  position: absolute;  bottom: 15px;  left: 45%;  text-align: center;  font-family: Arial, Helvetica, sans-serif;}#viewport #container div#close button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-weight: 500;  padding: 5px 10px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2030', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */  /* Animations */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #A80309;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport #view-container {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  position: relative;  box-sizing: border-box;  height: 100%;}#viewport #view-container .flex-column {  height: 100%;  display: flex;  flex-flow: column wrap;  justify-content: space-between;}#viewport #view-container .agent-busy {  display: flex;  flex-direction: column;  justify-content: space-around;}#viewport #view-container .agent-busy div:first-child {  display: flex;  flex-direction: column;  text-align: center;  font-size: 1.2em;}#viewport #view-container .agent-busy .loader {  text-align: center;}#viewport #view-container .agent-busy .loader img {  display: inline-block;}#viewport #view-container .agent-busy h1 {  margin-bottom: 20px;}#viewport #view-container .agent-busy p {  text-align: center;  flex-basis: auto;  font-weight: bold;}#viewport .heading {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .text {  flex-basis: 180px;}#viewport fieldset {  padding: 0;}#viewport .options {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .options .option {  display: block;  cursor: pointer;  /* Caret */}#viewport .options .option .option_content span.text {  font-weight: 400;  font-style: normal;  line-height: 20px;  text-decoration: none;  color: black;  display: inline-block;  vertical-align: middle;}#viewport .options .option [acif-template="template::2005"] {  position: absolute;  right: 0px;  top: 0px;  bottom: 0px;}#viewport .options .option:active .option_content span.text {  color: #990308;}#viewport .tip {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;  color: #cd040b;  font-size: 13px;}#viewport .tip::after {  content: "";  margin-left: 5px;  width: 13px;  height: 13px;  display: inline-block;  background-image: url(https://verizon-dev.inq.com/chatskins/sites/10004593/flash/VZW-Common-Assets/images/icon-caveat-2@2X.png);  background-repeat: no-repeat;  background-size: cover;}#viewport button {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  box-sizing: border-box;  cursor: pointer;  border: 0;  background: black;  text-align: left;  padding: 22px 30px;  font-size: 16px;  color: white;}#viewport button.btn-active {  background: #cd040b;}#viewport button.btn-inactive {  background: #a6a6a6;}#viewport button.extended {  width: 100%;}#viewport button span {  float: right;}#viewport button span svg {  float: right;  fill: white;}@media (min-width: 451px) {  #viewport #view-container {    padding: 25px 22px;  }  #viewport .options .option {    padding: 5px 0px;    margin-top: 15px;    /* Caret */  }  #viewport .options .option .option_content {    position: relative;    display: inline-block;  }  #viewport .options .option .option_content span.text {    font-size: 16px;    padding-right: 25px;  }  #viewport .options .option [acif-template="template::2005"] {    -webkit-transition: right .5s ease, color .2s ease;    transition: right .5s ease, color .2s ease;  }  #viewport .options .option:hover .option_content span.text {    color: #A80309;  }  #viewport .options .option:hover [acif-template="template::2005"] {    right: -10px;  }  #viewport [acif-action="back"] {    position: absolute;    bottom: 0px;    left: 0px;  }  #viewport [acif-action="back"] .caret {    position: relative;    left: 0;  }  #viewport [acif-action="back"]:hover .caret {    -webkit-animation: BACK-CARET 0.2s 1;    /* Safari 4+ */    -moz-animation: BACK-CARET 0.2s 1;    /* Fx 5+ */    -o-animation: BACK-CARET 0.2s 1;    /* Opera 12+ */    animation: BACK-CARET 0.2s 1;    /* IE 10+, Fx 29+ */  }}@media (max-width: 450px) {  #viewport #view-container {    border-top: 1px solid #ccc;    background-color: white;    padding: 0px;  }  #viewport #wrapper {    padding: 0px;  }  #viewport [acif-action="back"] {    display: block;    background-color: #a6a6a6;    padding: 20px 12px;  }  #viewport .heading,  #viewport .subheading {    padding-top: 20px;    padding-left: 18px;    padding-right: 18px;  }  #viewport .options .option {    position: relative;    border-bottom: 1px solid #ccc;    padding: 33px 18px;  }  #viewport .options .option .option_content {    color: black;    position: relative;  }  #viewport .options .option .option_content span.text {    font-size: 15px;    padding-right: 35px;  }  #viewport .options .option:active {    background-color: #a6a6a6;  }  #viewport .cushion {    padding: 0px 18px;  }}@keyframes BACK-CARET {  0% {    left: 0;  }  70% {    left: -4px;  }  100% {    left: 0;  }}';
});
define('Automatons/styles/2031', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  padding: 1em;  color: #fff;  background: #cf0000;  width: auto;  height: auto;  margin: auto;  padding: 20px 30px;  font-weight: bold;  border-radius: 0px;  transition: 0.2s;  letter-spacing: .8px;  font-weight: normal;  text-align: center;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-submit:hover {  transition: 0.2s;  background: #a80309 !important;}#viewport .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;  /* fix styling conflicts */}#viewport #view-container .heading {  font-weight: bold;  line-height: 1.5em;}#viewport #view-container .heading-first-line {  display: block;  font-size: 1.3em;  color: #c6040b;  margin-bottom: 0.8em;}#viewport #view-container .formify-heading-required {  font-size: 0.85em;  font-weight: bold;  color: #c6040b;  padding-top: 15px;}#viewport #view-container .formify-submit {  background-color: #cf0000;  width: auto;  height: auto;  padding: 18px 30px;  font-weight: bold;  border-radius: 0px;}#viewport #view-container .formify-submit::after {  content: url(https://static.inq.com/sites/10004593/assets/automatons/images/arrow.svg);  margin: 0 0 0 10px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport #view-container .formify-fieldset-radio .heading {  font-weight: normal;}#viewport #view-container .formify-fieldset-radio .heading::after {  display: table;  content: "";  clear: both;}#viewport #view-container .formify-fieldset-radio .heading .left {  float: left;}#viewport #view-container .formify-fieldset-radio .heading .right {  float: right;}#viewport #view-container .radio-field-group {  display: flex;  justify-content: space-between;}#viewport #view-container .radio-field-group .block-elem {  display: block !important;}#viewport #view-container .radio-field-group .formify-label {  display: flex;  flex-direction: column;  float: none;}#viewport #view-container .req-label {  color: #c6040b;}#viewport #view-container input[type="radio"] {  -webkit-appearance: radio;  -moz-appearance: radio;  -ms-appearance: radio;  width: auto;  height: auto;  position: static;  opacity: 1;  max-height: none;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container fieldset[class*="fieldset-radio"] .formify-input,#viewport #view-container fieldset[class*="fieldset-radio"] .formify-option-label {  display: inline;}#viewport #view-container fieldset[class*="fieldset-radio"][acif-required="true"] > legend:first-child::after {  content: " *";  color: #c6040b;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"]:not([class*="fieldset-radio"]) > label::after {  content: " *";  color: #c6040b;}#viewport #view-container svg {  fill: white;  position: absolute;  margin-top: -32px;  margin-left: 200px;}#viewport #view-container button > svg {  margin-top: 3px;  margin-left: 25px;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container .formify-submit {  text-align: left;  padding-left: 30px;}#viewport #view-container button {  float: none;}#viewport #view-container select {  padding: 0;  margin: 0.5em 0 0 0;  background: #fff;  color: #333;  height: inherit;  appearance: menulist !important;  -moz-appearance: menulist !important;  -webkit-appearance: menulist !important;}#viewport #view-container select::-ms-expand {  display: block !important;}#viewport #view-container footer {  background-color: inherit;  margin-bottom: 10px;}#viewport #thankYou {  font-size: 16px;  display: table;  height: 100%;  width: 100%;  text-align: center;}#viewport #thankYou span.hidden-btn-desc {  position: absolute;  top: -9999px;  left: -9999px;  margin: 0;  padding: 0;}#viewport #thankYou p.lead {  font-size: 24px;  font-weight: bold;  color: #c6040b;  margin-bottom: 10%;  line-height: 1.3em;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #cf0000;  cursor: pointer;  width: auto;  height: auto;  padding: 20px 30px;  color: white;  font-weight: bold;  border-radius: 0;  margin-top: 40px;}#viewport #thankYou button span {  vertical-align: middle;}#viewport #thankYou button svg {  margin: 0 0 0 5px;  position: relative;  display: inline-block;  vertical-align: middle;}#viewport div[acif-node-name="Desktop_EAVerizonWirelessNPS"] {  border-top: 1px solid #ccc;}';
});
define('Automatons/styles/2032', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */  /* Animations */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #740206;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport #view-container {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  position: relative;  box-sizing: border-box;  height: 100%;}#viewport #view-container .mt-15 {  margin-top: 15px;}#viewport #view-container .flex-column {  height: 100%;  display: flex;  flex-flow: column wrap;  justify-content: space-between;}#viewport #view-container .agent-busy {  display: flex;  flex-direction: column;  justify-content: space-around;}#viewport #view-container .agent-busy div:first-child {  display: flex;  flex-direction: column;  text-align: center;  font-size: 1.2em;}#viewport #view-container .agent-busy .loader {  text-align: center;}#viewport #view-container .agent-busy .loader img {  display: inline-block;}#viewport #view-container .agent-busy h1 {  margin-bottom: 20px;}#viewport #view-container .agent-busy p {  text-align: center;  flex-basis: auto;  font-weight: bold;}#viewport .heading {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .text {  flex-basis: 180px;}#viewport fieldset {  padding: 0;}#viewport .options {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .options .option {  display: block;  cursor: pointer;  /* Caret */}#viewport .options .option .option_content span.text {  font-weight: 400;  font-style: normal;  line-height: 20px;  text-decoration: none;  color: black;  display: inline-block;  vertical-align: middle;}#viewport .options .option [acif-template="template::2005"] {  position: absolute;  right: 0px;  top: 0px;  bottom: 0px;}#viewport .options .option:active .option_content span.text {  color: #990308;}#viewport .tip {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;  color: #cd040b;  font-size: 13px;}#viewport .tip::after {  content: "";  margin-left: 5px;  width: 13px;  height: 13px;  display: inline-block;  background-image: url(https://verizon-dev.inq.com/chatskins/sites/10004593/flash/VZW-Common-Assets/images/icon-caveat-2@2X.png);  background-repeat: no-repeat;  background-size: cover;}#viewport button {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  box-sizing: border-box;  cursor: pointer;  border: 0;  background: black;  text-align: left;  padding: 22px 30px;  font-size: 16px;  color: white;}#viewport button.btn-active {  background: #cd040b;}#viewport button.btn-inactive {  background: #a6a6a6;}#viewport button.extended {  width: 100%;}#viewport button span {  float: right;}#viewport button span svg {  float: right;  fill: white;}@media (min-width: 451px) {  #viewport #view-container {    padding: 25px 22px;  }  #viewport .options .option {    padding: 5px 0px;    margin-top: 15px;    /* Caret */  }  #viewport .options .option .option_content {    position: relative;    display: inline-block;  }  #viewport .options .option .option_content span.text {    font-size: 16px;    padding-right: 25px;  }  #viewport .options .option [acif-template="template::2005"] {    -webkit-transition: right .5s ease, color .2s ease;    transition: right .5s ease, color .2s ease;  }  #viewport .options .option:hover .option_content span.text {    color: #A80309;  }  #viewport .options .option:hover [acif-template="template::2005"] {    right: -10px;  }  #viewport [acif-action="back"] {    position: absolute;    bottom: 0px;    left: 0px;  }  #viewport [acif-action="back"] .caret {    position: relative;    left: 0;  }  #viewport [acif-action="back"]:hover .caret {    -webkit-animation: BACK-CARET 0.2s 1;    /* Safari 4+ */    -moz-animation: BACK-CARET 0.2s 1;    /* Fx 5+ */    -o-animation: BACK-CARET 0.2s 1;    /* Opera 12+ */    animation: BACK-CARET 0.2s 1;    /* IE 10+, Fx 29+ */  }}@media (max-width: 450px) {  #viewport #view-container {    border-top: 1px solid #ccc;    background-color: white;    padding: 0px;  }  #viewport #wrapper {    padding: 0px;  }  #viewport [acif-action="back"] {    display: block;    background-color: #a6a6a6;    padding: 20px 12px;  }  #viewport .heading,  #viewport .subheading {    padding-top: 20px;    padding-left: 18px;    padding-right: 18px;  }  #viewport .options .option {    position: relative;    border-bottom: 1px solid #ccc;    padding: 33px 18px;  }  #viewport .options .option .option_content {    color: black;    position: relative;  }  #viewport .options .option .option_content span.text {    font-size: 15px;    padding-right: 35px;  }  #viewport .options .option:active {    background-color: #a6a6a6;  }  #viewport .cushion {    padding: 0px 18px;  }}@keyframes BACK-CARET {  0% {    left: 0;  }  70% {    left: -4px;  }  100% {    left: 0;  }}#viewport #offline-wrapper [acif-node],#viewport #offline-wrapper [acif-node] * {  cursor: pointer;}#viewport #offline-wrapper .node__wrapper * {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  font-size: 14px;  color: #333;}#viewport #offline-wrapper .node__wrapper {  background-color: #F7F7F7;  padding: 20px 14px;  position: relative;  overflow: hidden;}#viewport #offline-wrapper .node__header {  margin: 0 0 10px;  font-family: NeueHaasGroteskDisplayBold, Arial, Helvetica, sans-serif;  font-size: 24px;  font-weight: 600;  color: #cd040b;  /*width: 320px;*/}#viewport #offline-wrapper .node__subheader {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  font-size: 13px;  color: #000;}#viewport #offline-wrapper .node__subheader--notice {  font-size: 18px;  margin-top: 0;}#viewport #offline-wrapper .notice {  padding: 0px 15px;  display: table;  width: 100%;  box-sizing: border-box;}#viewport #offline-wrapper .notice__icon {  vertical-align: top;  width: 45px;  position: absolute;  top: 15px;  right: 20px;}#viewport #offline-wrapper .hba__list {  display: block;  list-style: none;  padding: 0;  margin: 20px -20px 0;}#viewport #offline-wrapper .hba__item .i-r-arrow {  width: 11px;  height: 15px;  display: inline-block;  vertical-align: middle;  margin-left: 10px;}#viewport #offline-wrapper .hba__item {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  display: block;  padding: 10px 44px 10px 20px;  margin: 0;  font-size: 16px;  color: #000;  -webkit-transition: ease .15s background;  transition: ease .15s background;}#viewport #offline-wrapper .hba__item[acif-node]:hover {  background: #DFDFDF;}#viewport #offline-wrapper .hba__item[acif-node]:active {  background: #ccc;}#viewport #offline-wrapper .hba__item.is-inactive {  font-size: 16px;  color: #959595;}#viewport #offline-wrapper .hba__item button {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  border: 0px;  margin: 0;  background-color: transparent;  font-size: 16px;  padding: 0;}#viewport #offline-wrapper .hba__label {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: black;  padding: 5px 24px 5px 0px;  display: inline-block;  background-color: transparent;  background-position: right center;  background-repeat: no-repeat;  -webkit-transition: ease .15s padding;  transition: ease .15s padding;}#viewport #offline-wrapper .node__hop {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  font-size: 14px;  color: #666;  padding: 10px 10px 0px 10px;}#viewport #offline-wrapper .node__hop a {  color: #06c;  text-decoration: none;}#viewport #offline-wrapper .node__hop a:hover {  color: #06c;  text-decoration: underline;}#viewport #offline-wrapper .support {  padding: 0 15px;  color: black;}#viewport #offline-wrapper .support h2 {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  font-size: 18px;  margin-top: 0px;  color: black;  padding-bottom: 10px;}#viewport #offline-wrapper .support h3 {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  margin: 0 0 5px 0;  font-size: 12px;  color: black;}#viewport #offline-wrapper .support dl {  margin: 0 0 15px 0;  line-height: 18px;}#viewport #offline-wrapper .support dl dt,#viewport #offline-wrapper .support dl dd {  margin: 0;  display: inline-block;}#viewport #offline-wrapper .support dl dt {  font-size: 11px;  width: 35%;  margin-right: 5%;  text-align: right;  vertical-align: top;}#viewport #offline-wrapper .support dl dd {  font-size: 11px;  width: 55%;}#viewport #offline-wrapper .padding-bottom-30 {  padding-bottom: 30px;}#viewport #offline-wrapper .thick {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: black;  font-size: 16px;  line-height: 22px;}#viewport #offline-wrapper .thick a {  font-family: NeueHaasGroteskTextBold, Arial, Helvetica, sans-serif;  color: #136CD1;}';
});
define('Automatons/styles/2041', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2042', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2043', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Reset */  /* Forms */  /* Template: 2007 - Back Button */  /* Misc */  /* Verizon Global */  /* Animations */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport * {  margin: 0;  padding: 0;}#viewport #view-container {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  background-color: #f6f6f6;  padding: 12px 18px;}#viewport #wrapper {  letter-spacing: 0.025em;  box-sizing: border-box;  position: relative;  text-align: left;  color: #000;  height: 100%;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport .heading,#viewport .subheading {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  color: #cd040b;  font-weight: bold;}#viewport .heading {  font-size: 23px;  line-height: 32px;}#viewport .subheading {  font-size: 20px;  line-height: 28px;}#viewport p,#viewport span {  font-size: inherit;  line-height: 24.5px;  font-weight: inherit;}#viewport a,#viewport .link {  font-size: 14px;  color: #0066CC;  text-decoration: none;  transition: text-decoration 0.2s ease;  cursor: pointer;}#viewport a:hover,#viewport .link:hover {  color: #00478E;  text-decoration: underline;}#viewport a:active,#viewport .link:active {  color: #0066CC;  text-decoration: underline;}#viewport svg {  vertical-align: middle;  fill: #cd040b;}#viewport .legal {  font-size: 10px;  line-height: 16px;}#viewport form {  margin: 8px 0;}#viewport fieldset {  position: relative;  padding-bottom: 10px;}#viewport fieldset.invalid input {  border-color: #cd040b;  background-image: url("http://mediav3.inq.com/media/sites/10004489/images/icon-Exclamation-Mark-32x28.png");}#viewport fieldset.invalid p.invalid-required {  opacity: 1;  visibility: visible;}#viewport fieldset.invalid.focus p.invalid-required {  opacity: 0;  visibility: hidden;}#viewport fieldset.invalid.focus .tooltip {  opacity: 1;  visibility: visible;}#viewport label {  display: block;  font-size: 13px;  line-height: 24.5px;  font-weight: bold;  margin-bottom: 2px;}#viewport input[type="text"] {  padding: 12px 10px;  display: block;  width: 100%;  color: #333;  background-color: #fff;  background-origin: content-box;  background-repeat: no-repeat;  background-position: right center;  background-size: 16px;  box-sizing: border-box;  border: 1px solid #CCC;  outline: 0;  font-weight: bold;  font-size: 12px;}#viewport p.invalid-required {  position: absolute;  right: 0;  font-size: 12px;  font-weight: bold;  color: #cd040b;  visibility: hidden;  opacity: 0;}#viewport .tooltip {  z-index: 101;  visibility: hidden;  opacity: 0;  position: absolute;  left: 0;  top: 70px;  width: 220px;  text-align: center;  transition: visibility .2s ease, opacity .5s ease;}#viewport .tooltip .arrow-up {  width: 0;  height: 0;  display: inline-block;  border-left: 11px solid transparent;  border-right: 11px solid transparent;  border-bottom: 10px solid #fff;}#viewport .tooltip .content {  text-align: left;  padding: 12px 8px;  background-color: #fff;  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);}#viewport .tooltip h6 {  font-size: 16px;  margin-top: 4px;}#viewport .tooltip ul {  list-style: disc;  margin-top: 6px;  padding: 8px 18px;}#viewport .tooltip ul > li {  font-weight: bold;  font-size: 12px;}#viewport [type="button"],#viewport [type="submit"],#viewport .primary-button-large,#viewport .primary-button-small,#viewport .secondary-button {  margin-top: 12px;  color: #FFF;  font-size: 16px;  font-weight: bold;  line-height: 26.5px;  text-align: center;  box-sizing: border-box;  border: 0;  padding-left: 26px;  padding-right: 36px;  cursor: pointer;}#viewport [type="button"] .caret,#viewport [type="submit"] .caret,#viewport .primary-button-large .caret,#viewport .primary-button-small .caret,#viewport .secondary-button .caret {  position: relative;  left: 10px;  fill: #FFF;}#viewport [type="submit"],#viewport [type="button"],#viewport .primary-button-large,#viewport .primary-button-small {  background-color: #cd040b;}#viewport [type="submit"]:hover,#viewport [type="button"]:hover,#viewport .primary-button-large:hover,#viewport .primary-button-small:hover {  background-color: #740206;}#viewport [type="submit"]:active,#viewport [type="button"]:active,#viewport .primary-button-large:active,#viewport .primary-button-small:active {  background-color: #990308;}#viewport .secondary-button {  background-color: #4B4B4B;}#viewport .secondary-button:hover {  background-color: #959595;}#viewport .secondary-button:active {  background-color: #CCC;}#viewport [type="submit"],#viewport .primary-button-large {  padding-top: 14px;  padding-bottom: 14px;}#viewport [type="button"],#viewport .primary-button-small {  padding-top: 8px;  padding-bottom: 8px;}#viewport .secondary-button {  font-size: 16px;  color: #FFF;  background-color: #4B4B4B;}#viewport [acif-action="back"] {  cursor: pointer;  color: #000;  font-size: 15px;  font-weight: bold;  vertical-align: middle;  display: block;}#viewport [acif-action="back"] > .span {  vertical-align: middle;}#viewport [acif-action="back"] > .span > svg {  position: relative;  left: 0;  margin-right: 2px;  vertical-align: middle;  fill: #cd040b;}#viewport .bold {  font-weight: bold;}#viewport .hidden {  display: none;}#viewport .center {  text-align: center;}#viewport .is-required::after {  content: "*";  color: #cd040b;}#viewport .cushion {  margin: 15px 0;}#viewport .tighten-text {  line-height: normal;}#viewport .padding-top {  padding-top: 30px;}#viewport #loader {  color: #4B4B4B;  font-size: 16px;  font-weight: bold;  display: block;  text-align: center;  margin: 40px auto;}#viewport #view-container {  font-family: NeueHaasGroteskText, Arial, Helvetica, San-Serif;  position: relative;  box-sizing: border-box;  height: 100%;  overflow-y: auto;  padding: 25px 22px;}#viewport #view-container .mt-15 {  margin-top: 15px;}#viewport #view-container .flex-column {  height: 100%;  display: flex;  flex-flow: column wrap;}#viewport #view-container .agent-busy {  display: flex;  flex-direction: column;  justify-content: space-around;}#viewport #view-container .agent-busy div:first-child {  display: flex;  flex-direction: column;  text-align: center;  font-size: 1.2em;}#viewport #view-container .agent-busy .loader {  text-align: center;}#viewport #view-container .agent-busy .loader img {  display: inline-block;}#viewport #view-container .agent-busy h1 {  margin-bottom: 20px;}#viewport #view-container .agent-busy p {  text-align: center;  flex-basis: auto;  font-weight: bold;}#viewport .heading {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .text {  flex-basis: 180px;}#viewport fieldset {  padding: 0;}#viewport .options {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;}#viewport .options .option {  display: block;  cursor: pointer;  /* Caret */}#viewport .options .option .option_content span.text {  font-weight: 400;  font-style: normal;  line-height: 20px;  text-decoration: none;  color: black;  display: inline-block;  vertical-align: middle;}#viewport .options .option [acif-template="template::2005"] {  position: absolute;  right: 0px;  top: 0px;  bottom: 0px;}#viewport .options .option:active .option_content span.text {  color: #990308;}#viewport .tip {  font-family: NeueHaasGroteskTextBold, Helvetica, Arial, sans-serif;  color: #cd040b;  font-size: 13px;}#viewport .tip::after {  content: "";  margin-left: 5px;  width: 13px;  height: 13px;  display: inline-block;  background-image: url(https://verizon-dev.inq.com/chatskins/sites/10004593/flash/VZW-Common-Assets/images/icon-caveat-2@2X.png);  background-repeat: no-repeat;  background-size: cover;}#viewport button {  font-family: "NeueHaasGroteskTextBold", Helvetica, Arial, sans-serif;  box-sizing: border-box;  cursor: pointer;  border: 0;  background: black;  text-align: left;  padding: 22px 30px;  font-size: 16px;  color: white;}#viewport button.btn-active {  background: #cd040b;}#viewport button.btn-inactive {  background: #a6a6a6;}#viewport button.extended {  width: 100%;}#viewport button span {  float: right;}#viewport button span svg {  float: right;  fill: white;}#viewport .options .option {  padding: 5px 0px;  margin-top: 15px;  /* Caret */}#viewport .options .option .option_content {  position: relative;  display: inline-block;}#viewport .options .option .option_content span.text {  font-size: 16px;  padding-right: 25px;}#viewport .options .option [acif-template="template::2005"] {  -webkit-transition: right .5s ease, color .2s ease;  transition: right .5s ease, color .2s ease;}#viewport .options .option:hover .option_content span.text {  color: #A80309;}#viewport .options .option:hover [acif-template="template::2005"] {  right: -10px;}#viewport [acif-action="back"] {  position: absolute;  bottom: 0px;  left: 0px;}#viewport [acif-action="back"] .caret {  position: relative;  left: 0;}#viewport [acif-action="back"]:hover .caret {  -webkit-animation: BACK-CARET 0.2s 1;  /* Safari 4+ */  -moz-animation: BACK-CARET 0.2s 1;  /* Fx 5+ */  -o-animation: BACK-CARET 0.2s 1;  /* Opera 12+ */  animation: BACK-CARET 0.2s 1;  /* IE 10+, Fx 29+ */}@keyframes BACK-CARET {  0% {    left: 0;  }  70% {    left: -4px;  }  100% {    left: 0;  }}#viewport .title {  font-size: 1.5em;}#viewport .subheader {  font-size: 12px;  margin: 0;  line-height: 16px;  color: #333;}#viewport .button-primary [acif-template="template::2005"] {  float: right;}#viewport .button-primary span {  margin-top: 5px;}#viewport select,#viewport input[type="textarea"],#viewport textarea {  width: 100%;  padding: 10px;  box-sizing: border-box;}#viewport p.invalid-required,#viewport p.invalid-pattern {  text-align: right;  position: static!important;}#viewport p.invalid-pattern {  font-size: 12px;  font-weight: bold;  color: #cd040b;}#viewport fieldset {  margin-bottom: 20px;}#viewport fieldset .invalid-required,#viewport fieldset .invalid-pattern {  display: none !important;}#viewport fieldset.invalid.invalid-required .invalid-required,#viewport fieldset.invalid.invalid-pattern .invalid-pattern {  display: block !important;}#viewport fieldset.invalid.focus .invalid-required {  visibility: visible !important;  opacity: 1 !important;  display: block;}#viewport div fieldset[type="text"]:first-child label {  text-align: right;}#viewport h4 {  line-height: 1.5em;  margin-bottom: 10px;}';
});
define('Automatons/styles/2046', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* reset */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport #view-container {  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;  font-size: 12px;  color: #6b6d6e;  height: 100%;}#viewport #view-container .wrapper {  box-sizing: border-box;  box-shadow: inset 0 10px 8px -10px #ccc, inset -6px 0 6px -6px #ccc;  -webkit-box-shadow: inset 0 10px 8px -10px #ccc, inset -6px 0 6px -6px #ccc;  -moz-box-shadow: inset 0 10px 8px -10px #ccc, inset -6px 0 6px -6px #ccc;  display: flex;  flex-direction: column;  height: 100%;  padding: 0 10px 10px 10px;}#viewport #view-container .wrapper h1,#viewport #view-container .wrapper h2,#viewport #view-container .wrapper p {  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;  text-align: center;  margin: 21px auto;  line-height: 18px;}#viewport #view-container .wrapper h1 {  padding: 0px 16px;  font-size: 20px;  font-weight: 600;  text-transform: uppercase;}#viewport #view-container .wrapper h2 {  padding: 0px 16px;  line-height: 20px;  font-size: 19px;}#viewport #view-container .wrapper p {  padding: 0px 16px;  font-style: italic;  font-size: 17px;  line-height: 19px;}#viewport #view-container .wrapper .image-wrapper {  margin: 20px auto;  margin-top: 25px;  text-align: center;}#viewport #view-container .wrapper .image-wrapper img {  width: 40px;  height: 40px;  margin: 0 auto;}#viewport #view-container .wrapper .upload-wrapper {  display: flex;  flex: 1;  overflow-y: auto;}#viewport #view-container .wrapper .upload-wrapper .upload-section {  flex: 1 1;}#viewport #view-container .wrapper .footer-section {  padding: 10px 0;}#viewport #view-container .wrapper .footer-section .btn-cancel,#viewport #view-container .wrapper .footer-section .btn-upload {  border: 3px #CF0000 solid;  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;  font-size: 18px;  min-width: 75px;  padding: 5px 18px;  padding-top: 6px;  text-transform: uppercase;}#viewport #view-container .wrapper .footer-section .btn-upload {  background: #CF0000;  color: #fff;  float: right;}#viewport #view-container .wrapper .footer-section .btn-upload:hover,#viewport #view-container .wrapper .footer-section .btn-upload:focus {  background: #d43b3b;}#viewport #view-container .wrapper .footer-section .btn-cancel {  background: none;  color: #CF0000;  float: left;}#viewport #view-container .wrapper .hide {  display: none;}';
});
define('Automatons/styles/2047', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2048', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2049', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2050', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2051', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /************* Defaults************/  /***  Responsive attributes**  References:*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex*  2) https://css-tricks.com/almanac/properties/f/flex/*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items*  5) http://godban.com.ua/projects/flexgrid***/  /**  Apply Mixins to create Layout/Flexbox styles**/}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport button,#viewport select,#viewport html,#viewport textarea,#viewport input {  font-family: Roboto, "Helvetica Neue", sans-serif;}#viewport select,#viewport button,#viewport textarea,#viewport input {  font-size: 100%;}@-moz-document url-prefix() {  #viewport .layout-fill {    margin: 0;    width: 100%;    min-height: 100%;    height: 100%;  }}#viewport .layout-align {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;}#viewport .layout-align-start,#viewport .layout-align-start-start,#viewport .layout-align-start-center,#viewport .layout-align-start-end,#viewport .layout-align-start-stretch {  -webkit-justify-content: start;  -ms-flex-pack: start;  justify-content: start;}#viewport .layout-align-center,#viewport .layout-align-center-start,#viewport .layout-align-center-center,#viewport .layout-align-center-end,#viewport .layout-align-center-stretch {  -webkit-justify-content: center;  -ms-flex-pack: center;  justify-content: center;}#viewport .layout-align-end,#viewport .layout-align-end-start,#viewport .layout-align-end-center,#viewport .layout-align-end-end,#viewport .layout-align-end-stretch {  -webkit-justify-content: flex-end;  -ms-flex-pack: end;  justify-content: flex-end;}#viewport .layout-align-space-around,#viewport .layout-align-space-around-center,#viewport .layout-align-space-around-start,#viewport .layout-align-space-around-end,#viewport .layout-align-space-around-stretch {  -webkit-justify-content: space-around;  -ms-flex-pack: distribute;  justify-content: space-around;}#viewport .layout-align-space-between,#viewport .layout-align-space-between-center,#viewport .layout-align-space-between-start,#viewport .layout-align-space-between-end,#viewport .layout-align-space-between-stretch {  -webkit-justify-content: space-between;  -ms-flex-pack: justify;  justify-content: space-between;}#viewport .layout-align-start-start,#viewport .layout-align-center-start,#viewport .layout-align-end-start,#viewport .layout-align-space-between-start,#viewport .layout-align-space-around-start {  -webkit-align-items: flex-start;  -ms-flex-align: start;  align-items: flex-start;  -webkit-align-content: flex-start;  -ms-flex-line-pack: start;  align-content: flex-start;}#viewport .layout-align-start-center,#viewport .layout-align-center-center,#viewport .layout-align-end-center,#viewport .layout-align-space-between-center,#viewport .layout-align-space-around-center {  -webkit-align-items: center;  -ms-flex-align: center;  align-items: center;  -webkit-align-content: center;  -ms-flex-line-pack: center;  align-content: center;  max-width: 100%;}#viewport .layout-align-start-center > *,#viewport .layout-align-center-center > *,#viewport .layout-align-end-center > *,#viewport .layout-align-space-between-center > *,#viewport .layout-align-space-around-center > * {  max-width: 100%;  box-sizing: border-box;}#viewport .layout-align-start-end,#viewport .layout-align-center-end,#viewport .layout-align-end-end,#viewport .layout-align-space-between-end,#viewport .layout-align-space-around-end {  -webkit-align-items: flex-end;  -ms-flex-align: end;  align-items: flex-end;  -webkit-align-content: flex-end;  -ms-flex-line-pack: end;  align-content: flex-end;}#viewport .layout-align-start-stretch,#viewport .layout-align-center-stretch,#viewport .layout-align-end-stretch,#viewport .layout-align-space-between-stretch,#viewport .layout-align-space-around-stretch {  -webkit-align-items: stretch;  -ms-flex-align: stretch;  align-items: stretch;  -webkit-align-content: stretch;  -ms-flex-line-pack: stretch;  align-content: stretch;}#viewport .flex {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  box-sizing: border-box;}#viewport .flex-grow {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  box-sizing: border-box;}#viewport .flex-initial {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-auto {  -webkit-flex: 1 1 auto;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  box-sizing: border-box;}#viewport .flex-none {  -webkit-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  box-sizing: border-box;}#viewport .flex-noshrink {  -webkit-flex: 1 0 auto;  -ms-flex: 1 0 auto;  flex: 1 0 auto;  box-sizing: border-box;}#viewport .flex-nogrow {  -webkit-flex: 0 1 auto;  -ms-flex: 0 1 auto;  flex: 0 1 auto;  box-sizing: border-box;}#viewport .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-0,#viewport .layout-row > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 0%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-0,#viewport .layout-column > .flex-0 {  -webkit-flex: 1 1 0%;  -ms-flex: 1 1 0%;  flex: 1 1 0%;  max-width: 100%;  max-height: 0%;  box-sizing: border-box;}#viewport .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-5,#viewport .layout-row > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 5%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-5,#viewport .layout-column > .flex-5 {  -webkit-flex: 1 1 5%;  -ms-flex: 1 1 5%;  flex: 1 1 5%;  max-width: 100%;  max-height: 5%;  box-sizing: border-box;}#viewport .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-10,#viewport .layout-row > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 10%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-10,#viewport .layout-column > .flex-10 {  -webkit-flex: 1 1 10%;  -ms-flex: 1 1 10%;  flex: 1 1 10%;  max-width: 100%;  max-height: 10%;  box-sizing: border-box;}#viewport .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-15,#viewport .layout-row > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 15%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-15,#viewport .layout-column > .flex-15 {  -webkit-flex: 1 1 15%;  -ms-flex: 1 1 15%;  flex: 1 1 15%;  max-width: 100%;  max-height: 15%;  box-sizing: border-box;}#viewport .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-20,#viewport .layout-row > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 20%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-20,#viewport .layout-column > .flex-20 {  -webkit-flex: 1 1 20%;  -ms-flex: 1 1 20%;  flex: 1 1 20%;  max-width: 100%;  max-height: 20%;  box-sizing: border-box;}#viewport .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-25,#viewport .layout-row > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 25%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-25,#viewport .layout-column > .flex-25 {  -webkit-flex: 1 1 25%;  -ms-flex: 1 1 25%;  flex: 1 1 25%;  max-width: 100%;  max-height: 25%;  box-sizing: border-box;}#viewport .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-30,#viewport .layout-row > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 30%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-30,#viewport .layout-column > .flex-30 {  -webkit-flex: 1 1 30%;  -ms-flex: 1 1 30%;  flex: 1 1 30%;  max-width: 100%;  max-height: 30%;  box-sizing: border-box;}#viewport .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-35,#viewport .layout-row > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 35%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-35,#viewport .layout-column > .flex-35 {  -webkit-flex: 1 1 35%;  -ms-flex: 1 1 35%;  flex: 1 1 35%;  max-width: 100%;  max-height: 35%;  box-sizing: border-box;}#viewport .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-40,#viewport .layout-row > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 40%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-40,#viewport .layout-column > .flex-40 {  -webkit-flex: 1 1 40%;  -ms-flex: 1 1 40%;  flex: 1 1 40%;  max-width: 100%;  max-height: 40%;  box-sizing: border-box;}#viewport .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-45,#viewport .layout-row > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 45%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-45,#viewport .layout-column > .flex-45 {  -webkit-flex: 1 1 45%;  -ms-flex: 1 1 45%;  flex: 1 1 45%;  max-width: 100%;  max-height: 45%;  box-sizing: border-box;}#viewport .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-50,#viewport .layout-row > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 50%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-50,#viewport .layout-column > .flex-50 {  -webkit-flex: 1 1 50%;  -ms-flex: 1 1 50%;  flex: 1 1 50%;  max-width: 100%;  max-height: 50%;  box-sizing: border-box;}#viewport .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-55,#viewport .layout-row > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 55%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-55,#viewport .layout-column > .flex-55 {  -webkit-flex: 1 1 55%;  -ms-flex: 1 1 55%;  flex: 1 1 55%;  max-width: 100%;  max-height: 55%;  box-sizing: border-box;}#viewport .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-60,#viewport .layout-row > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 60%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-60,#viewport .layout-column > .flex-60 {  -webkit-flex: 1 1 60%;  -ms-flex: 1 1 60%;  flex: 1 1 60%;  max-width: 100%;  max-height: 60%;  box-sizing: border-box;}#viewport .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-65,#viewport .layout-row > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 65%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-65,#viewport .layout-column > .flex-65 {  -webkit-flex: 1 1 65%;  -ms-flex: 1 1 65%;  flex: 1 1 65%;  max-width: 100%;  max-height: 65%;  box-sizing: border-box;}#viewport .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-70,#viewport .layout-row > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 70%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-70,#viewport .layout-column > .flex-70 {  -webkit-flex: 1 1 70%;  -ms-flex: 1 1 70%;  flex: 1 1 70%;  max-width: 100%;  max-height: 70%;  box-sizing: border-box;}#viewport .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-75,#viewport .layout-row > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 75%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-75,#viewport .layout-column > .flex-75 {  -webkit-flex: 1 1 75%;  -ms-flex: 1 1 75%;  flex: 1 1 75%;  max-width: 100%;  max-height: 75%;  box-sizing: border-box;}#viewport .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-80,#viewport .layout-row > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 80%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-80,#viewport .layout-column > .flex-80 {  -webkit-flex: 1 1 80%;  -ms-flex: 1 1 80%;  flex: 1 1 80%;  max-width: 100%;  max-height: 80%;  box-sizing: border-box;}#viewport .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-85,#viewport .layout-row > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 85%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-85,#viewport .layout-column > .flex-85 {  -webkit-flex: 1 1 85%;  -ms-flex: 1 1 85%;  flex: 1 1 85%;  max-width: 100%;  max-height: 85%;  box-sizing: border-box;}#viewport .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-90,#viewport .layout-row > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 90%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-90,#viewport .layout-column > .flex-90 {  -webkit-flex: 1 1 90%;  -ms-flex: 1 1 90%;  flex: 1 1 90%;  max-width: 100%;  max-height: 90%;  box-sizing: border-box;}#viewport .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-95,#viewport .layout-row > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 95%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-95,#viewport .layout-column > .flex-95 {  -webkit-flex: 1 1 95%;  -ms-flex: 1 1 95%;  flex: 1 1 95%;  max-width: 100%;  max-height: 95%;  box-sizing: border-box;}#viewport .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-100,#viewport .layout-row > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-100,#viewport .layout-column > .flex-100 {  -webkit-flex: 1 1 100%;  -ms-flex: 1 1 100%;  flex: 1 1 100%;  max-width: 100%;  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33,#viewport .layout-row > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: calc(33.33333333%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66,#viewport .layout-row > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: calc(66.66666667%);  max-height: 100%;  box-sizing: border-box;}#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33,#viewport .layout-column > .flex-33 {  -webkit-flex: 1 1 33%;  -ms-flex: 1 1 33%;  flex: 1 1 33%;  max-width: 100%;  max-height: calc(33.33333333%);  box-sizing: border-box;}#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66,#viewport .layout-column > .flex-66 {  -webkit-flex: 1 1 66%;  -ms-flex: 1 1 66%;  flex: 1 1 66%;  max-width: 100%;  max-height: calc(66.66666667%);  box-sizing: border-box;}#viewport .layout,#viewport .layout-column,#viewport .layout-row {  box-sizing: border-box;  display: -webkit-flex;  display: -ms-flexbox;  display: flex;}#viewport .layout-column {  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;}#viewport .layout-row {  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;}#viewport .layout-padding-sm > *,#viewport .layout-padding > .flex-sm {  padding: 4px;}#viewport .layout-padding,#viewport .layout-padding-gt-sm,#viewport .layout-padding-md,#viewport .layout-padding > *,#viewport .layout-padding-gt-sm > *,#viewport .layout-padding-md > *,#viewport .layout-padding > .flex,#viewport .layout-padding > .flex-gt-sm,#viewport .layout-padding > .flex-md {  padding: 8px;}#viewport .layout-padding-gt-md > *,#viewport .layout-padding-lg > *,#viewport .layout-padding-gt-lg > *,#viewport .layout-padding > .flex-gt-md,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-lg,#viewport .layout-padding > .flex-gt-lg {  padding: 16px;}#viewport .layout-margin-sm > *,#viewport .layout-margin > .flex-sm {  margin: 4px;}#viewport .layout-margin,#viewport .layout-margin-gt-sm,#viewport .layout-margin-md,#viewport .layout-margin > *,#viewport .layout-margin-gt-sm > *,#viewport .layout-margin-md > *,#viewport .layout-margin > .flex,#viewport .layout-margin > .flex-gt-sm,#viewport .layout-margin > .flex-md {  margin: 8px;}#viewport .layout-margin-gt-md > *,#viewport .layout-margin-lg > *,#viewport .layout-margin-gt-lg > *,#viewport .layout-margin > .flex-gt-md,#viewport .layout-margin > .flex-lg,#viewport .layout-margin > .flex-gt-lg {  margin: 16px;}#viewport .layout-wrap {  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;}#viewport .layout-nowrap {  -webkit-flex-wrap: nowrap;  -ms-flex-wrap: nowrap;  flex-wrap: nowrap;}#viewport .layout-fill {  margin: 0;  width: 100%;  min-height: 100%;  height: 100%;}#viewport #view-container {  text-align: left;  height: 100%;}#viewport button {  cursor: pointer;  transition: all .3s ease;}#viewport #view-container {  border-right: 1px solid #666;  box-sizing: border-box;  height: 100%;  padding: 15px;  position: relative;  text-align: center;}#viewport #ap-video {  text-align: center;}#viewport iframe {  display: block;  height: 315px;  width: 560px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  margin-top: 25px;  padding: 7px 14px;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
});
define('Automatons/styles/2052', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport #view-container {  box-sizing: border-box;  height: 100%;  padding: 25px;  position: relative;  color: #6d6d6d;  border-top: 1px solid #dbdbdb;}#viewport h2 {  color: #cd040b;  font-size: 26px;  line-height: 1.3em;  margin: 0 0 30px;}#viewport p {  margin-bottom: 15px;}#viewport button {  background-color: #cd040b;  border: 2px solid #cd040b;  color: #fff;  cursor: pointer;  font-size: 12px;  font-weight: 500;  line-height: 1.45;  padding: 7px 14px;  position: relative;  text-align: left;  white-space: nowrap;  width: 90%;  vertical-align: middle;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}#viewport svg {  fill: #fff;  height: 10px;  position: absolute;  width: 10px;  right: 10px;  top: 10px;}#viewport span {  display: inline-block;  margin-top: 15px;  font-size: 12px;  cursor: pointer;  text-decoration: underline;  color: #0077cc;}';
});
define('Automatons/styles/2053', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* reset */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport #view-container {  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;  font-size: 12px;  color: #6b6d6e;  height: 100%;}#viewport #view-container > .wrapper {  display: flex;  flex-direction: column;  justify-content: space-around;  height: 100%;}#viewport #view-container .image-container {  width: 265px;  overflow: hidden;  margin: 0 auto;}#viewport #view-container .image-container img {  width: 100%;}#viewport #view-container .button-container {  text-align: center;}#viewport #view-container button.close {  background: #931a1d;  color: #fff;  font-size: 16px;  padding: 12px 55px;  border-radius: 15px;  border: 0;  cursor: pointer;}';
});
define("Automatons/templates/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<svg id=\"tcChat-clock-svg\" role=\"img\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 35 35\"><path d=\"M250,236.88A13.13,13.13,0,1,0,263.13,250,13.14,13.14,0,0,0,250,236.88Zm0,24.06A10.94,10.94,0,1,1,260.93,250,10.94,10.94,0,0,1,250,260.93Z\" transform=\"translate(-232.5 -232.5)\"/><path class=\"c2fdc90b-a796-4805-9b1e-67dbb7795b19\" d=\"M250,232.5A17.5,17.5,0,1,0,267.5,250,17.52,17.52,0,0,0,250,232.5Zm0,32.82A15.32,15.32,0,1,1,265.32,250,15.33,15.33,0,0,1,250,265.32Z\" transform=\"translate(-232.5 -232.5)\"/><path class=\"c2fdc90b-a796-4805-9b1e-67dbb7795b19\" d=\"M251.09,249.55v-6.17a1.09,1.09,0,1,0-2.18,0V250a1.11,1.11,0,0,0,.32.78l4.38,4.35a1.09,1.09,0,0,0,1.54-1.55Z\" transform=\"translate(-232.5 -232.5)\"/>/svg>";
});
define("Automatons/templates/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "reuse";
});
define("Automatons/templates/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">    <% if(api.getBreadcrumbs().length > 2) { %>    <div acif-template=\"template::2007\">Back Button</div>    <% } %>    <h5 class=\"heading tighten-text\"><%= header %></h5>    <form class=\"options\" acif-next-transition=\"next\" novalidate acif-submit-on-click>        <fieldset type=\"radio\" name=\"Last Option Selected\" required>            <% _.each(options, function(option) { %>            <label class=\"option\">                <input value=\"<%= option.text %>\" class=\"hidden\"/>                <p class=\"option_content\">                    <span class=\"text\"><%= option.text %>                        <% if (typeof option.tip !== 'undefined') { %>                        <span>(<%= option.tip %>)</span>                        <% } %></span>                    <span acif-template=\"template::2005\">SVG - Caret Right</span>                </p>            </label>            <% }); %>        </fieldset>    </form></div>";
});
define("Automatons/templates/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<button class=\"btn-active extended\" acif-ignore-aa acif-node=\"<%= api.getTargetChatNode() %>\">Continue to queue<span acif-template=\"template::2005\">SVG - Caret Right</span></button> ";
});
define("Automatons/templates/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<svg class=\"caret\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\"><title>vzw-caret</title><path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\" /></svg>";
});
define("Automatons/templates/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-action=\"back\">    <span class=\"caret\">        <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\">        \t<title>vzw-caret</title>        \t<path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\"               style=\"fill:#cd040b\" transform=\"translate(10,0) scale(-1,1)\"/>        </svg>    </span>    <span>Back</span></div>";
});
define("Automatons/templates/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<button class=\"button-primary\" type=\"submit\">  <% if (typeof chatButtonName !== 'undefined') { %>    <%= chatButtonName %>  <% } else { %>    Start chat  <% } %>  <span acif-template=\"template::2005\">SVG - Caret Right</span></button>";
});
define("Automatons/templates/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <h1 class=\"heading\">Agents are now available.</h1>    <p class=\"text cushion\">An agent is now available to answer your questions. Please click the button below to initiate a chat conversation with one of our experts.</p>    <div acif-template=\"template::402\">Button - Chat now</div> </div>";
});
define("Automatons/templates/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"padding-top\"></div><h5 class=\"subheading\">Unfortunately, you have reached us outside our hours of operation.</h5>";
});
define("Automatons/templates/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">    <div class=\"padding-top\"></div>    <h5 class=\"subheading tighten-text\">To better assist you, we are redirecting you to a page that can help you with your inquiry.</h5>    <div id=\"loader\">\t\t<img class=\"loading_ellipsis_gif\" src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/loader_extra_large.gif\" alt=\"VZW Loader Extra Large\"/>   \t</div></div>";
});
define("Automatons/templates/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"tooltip hidden\">    <div class=\"arrow-up\"></div>    <div class=\"content\">    \t<h6>This field must</h6>    \t<ul>        \t<% _.each(required_properties, function(property) { %>        \t<li>            \t<%= property.text %>        \t</li>        \t<% }); %>    \t</ul>\t</div></div>";
});
define("Automatons/templates/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<h4 class=\"title\"><%= header %></h4>\t<p class=\"subheader\"><%= subheader %></p>\t<form acif-next-node=<%= node_id %> novalidate>        <% _.each(fieldsets, function(fieldset) { %>\t\t\t<fieldset name=\"<%= fieldset.name %>\" type=\"<%= fieldset.type %>\" <% if(fieldset.isRequired){ %>required<% } %> >        \t\t<label <% if(fieldset.isRequired){ %>class=\"is-required\"<% } %>>                    <%= fieldset.label %>                </label>                <% if (fieldset.type !== \"select\") { %>                    <input <% if(fieldset.placeholder) { %>placeholder=\"<%= fieldset.placeholder %>\"<% } %> <% if(fieldset.pattern){ %>pattern=\"<%= fieldset.pattern %>\"<% } %>/>                <% } else { %>                \t<select>                        <% if (fieldset.placeholder) { %>                        \t<option value=\"\" disabled selected><%= fieldset.placeholder %></option>                        <% } %>                \t<% _.each(fieldset.options, function(option) { %>                \t\t<option><%= option %></option>                \t<% }); %>                \t</select>                <% } %>                <% if (fieldset.tooltip) { %>                <div class=\"tooltip hidden\">                    <div class=\"arrow-up\"></div>                    <div class=\"content\">                        <h6>This field must</h6>                        <ul>                            <% _.each(fieldset.tooltip, function(required_property) { %>                            <li><%= required_property %></li>                            <% }); %>                        </ul>                    </div>                </div>                <% } %>                <% if(fieldset.isRequired) { %>                \t<p class=\"invalid-required\"><%= fieldset.error %></p>                <% } %>                <% if(fieldset.hasPatternError) { %>                  <p class=\"invalid-pattern\"><%= fieldset.patternError %></p>                <% } %>\t\t\t</fieldset>        <% }); %>         <div acif-template=\"template::2008\">Button Start Chat</div>\t</form></div>";
});
define("Automatons/templates/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <h1 class=\"heading\">Unfortunately all of our <br/>agents are busy right now.</h1>    <div class=\"text\">        <p class=\"cushion\">We are currently experiencing longer than average wait times.</p>        <% if(topic === \"making a purchase\") { %>        <p class=\"cushion\">For immediate assistance on making a purchase, please <span class=\"link\" acif-node=\"<%= node_id %>\">click here</span> to see our newest plans.</p>        <% } else { %>        <p class=\"cushion\">For immediate assistance on <%= topic %>, please <span class=\"link\" acif-node=\"<%= node_id %>\">click here</span> for common FAQs.</p>        <% } %>    </div>    <div acif-template=\"template::2004\">Button - Continue to Queue</div></div>";
});
define("Automatons/templates/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<h1 class=\"heading\">Unfortunately all of our <br/>agents are busy right now.</h1><div class=\"text\">    <p class=\"cushion\">Please try again shortly.</p>    <% if(topic === \"making a purchase\") { %>    <p class=\"cushion\">For immediate assistance on making a purchase, please <span class=\"link\" acif-node=\"<%= node_id %>\">click here</span> to see our newest plans.</p>    <% } else { %>    <p class=\"cushion\">For immediate assistance on <%= topic %>, please <span class=\"link\" acif-node=\"<%= node_id %>\">click here</span> for common FAQs.</p>    <% } %></div>";
});
define("Automatons/templates/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"node__wrapper\">    <h2 class=\"node__header\">Our Apologies</h2>    <p class=\"node__subheader padding-bottom-30\">Unfortunately, <%= who %> are currently unavailable.</p>\t<p class=\"thick\">For further assistance at this time please utilize the <a href=\"#\" acif-node=\"node::2044\">HBA KB</a> or reach out to your supervisor.</p></div>";
});
define("Automatons/templates/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"formify-group\" data-fieldset-group>  <h2><%= field.label %></h2>    <div class=\"formify-scale-row formify-scale-header\">    <div class=\"formify-scale-cell formify-scale-statement\"></div>      <% _.each(field.scale, function(rawScaleItem) {        var scaleItem = {};        scaleItem.label = rawScaleItem.label || rawScaleItem;        scaleItem.value = rawScaleItem.value || rawScaleItem;      %>      <div class=\"formify-scale-cell\">      <%= scaleItem.label %>      </div>      <% }); %>    </div>  <% _.each(field.options, function(rawOption) {    var option = {};    option.label = rawOption.label || rawOption;    option.id = rawOption.id || _.dasherize(rawOption);  %>    <fieldset class=\"formify-scale-item\" data-field-type=\"radio\" name=\"<%= option.id %>\" <%= field._required_attr %>>      <div class=\"formify-scale-row\">      <div class=\"formify-scale-cell formify-scale-statement\">        <legend class=\"formify-legend\"><%= option.label %></legend>      </div>      <% _.each(field.scale, function(rawScaleItem) {        var scaleItem = {};        scaleItem.label = rawScaleItem.label || rawScaleItem;        scaleItem.value = rawScaleItem.value || rawScaleItem;      %>      <label class=\"formify-scale-cell formify-scale-option\">        <input class=\"formify-scale-input\" type=\"radio\" value=\"<%= scaleItem.value %>\" />        <span class=\"formify-scale-label\"><%= scaleItem.label %></span>      </label>      <% }); %>      </div>    </fieldset>  <% }); %></div>";
});
define("Automatons/templates/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <span class=\"hidden-btn-desc\">Close</span>        </span>        <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close <div acif-template=\"template::2005\"></div></button>    </div></div>";
});
define("Automatons/templates/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>Please be advised that '[agent-id]' received an After Chat Survey with scores: Ownership: '(Q1)', Choice: '(Q0)'. Please click on the following link to view the completed survey:<a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript</a></p><p>ChatID: [engagement-id]</p><p>Comments: [improve-experience]</p>";
});
define("Automatons/templates/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<fieldset class=\"formify-fieldset-select\" name=\"<%= field.id %>\" acif-field-type=\"<%= field.type_attr %>\" <%= field._attrs %>>  <label class=\"formify-label\"><%= field.label %></label>  <select class=\"formify-input\" <%= field._multiple_attr + field._min_attr + field._max_attr %> data-no-fancy>    <% if (!field.multiple) { %>      <option value=\"\"><%= field.placeholder %></option>    <% } %>    <% _.each(field.options, function(rawOption) {        var option = {};        option.label = rawOption.label || rawOption;        option.value = rawOption.value || rawOption;    %>    <option value=\"<%= option.value %>\"><%= option.label %></option>    <% }); %>  </select>  <%= field.validate._html %></fieldset>";
});
define("Automatons/templates/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<h4 class=\"title\"><%= header %></h4>\t<p class=\"subheader\"><%= subheader %></p>    <form acif-next-node=<%= node_id %> novalidate>        <% _.each(fieldsets, function(fieldset) { %>            <fieldset name=\"<%= fieldset.name %>\" type=\"<%= fieldset.type %>\" <% if(fieldset.isRequired){ %>required<% } %>  <% if(fieldset.minRequired){ %><%= fieldset.minRequired %><% } %>>                      <% if (fieldset.type === \"text\") { %>                          <label <% if(fieldset.isRequired){ %>class=\"is-required\"<% } %>>                              <%= fieldset.label %>                          </label>                          <input <% if(fieldset.placeholder) { %>placeholder=\"<%= fieldset.placeholder %>\"<% } %> <% if(fieldset.maxlength) { %>maxlength=\"<%= fieldset.maxlength %>\"<% } %> <% if(fieldset.pattern){ %>pattern=\"<%= fieldset.pattern %>\"<% } %>/>                      <% } else if (fieldset.type === \"textarea\") { %>                          <label <% if(fieldset.isRequired){ %>class=\"is-required\"<% } %>>                            <%= fieldset.label %>                          </label>                          <textarea <% if(fieldset.placeholder) { %>placeholder=\"<%= fieldset.placeholder %>\"<% } %> <% if(fieldset.maxlength) { %>maxlength=\"<%= fieldset.maxlength %>\"<% } %> <% if(fieldset.pattern){ %>pattern=\"<%= fieldset.pattern %>\"<% } %>></textarea>                      <% } else if (fieldset.type === \"checkbox\") { %>                \t\t    <legend <% if(fieldset.isRequired){ %>class=\"is-required\"<% } %>><%= fieldset.label %> </legend>                        <% _.each(fieldset.options, function(option) { %>                          <label>                              <input type=\"checkbox\" value=\"<%= option %>\" class=\"custom-checkbox\"/>                              <span><%= option%></span>                          </label>                         <% }); %>                      <% } else { %>                        <label <% if(fieldset.isRequired){ %>class=\"is-required\"<% } %>>                              <%= fieldset.label %>                        </label>                        <select>                              <% if (fieldset.placeholder) { %>                                <option value=\"\" disabled selected><%= fieldset.placeholder %></option>                              <% } %>                        <% _.each(fieldset.options, function(option) { %>                          <option><%= option %></option>                        <% }); %>                        </select>                      <% } %>                      <% if(fieldset.isRequired) { %>                        <p class=\"invalid-required\"><%= fieldset.requiredErrorMesssage %></p>                      <% } %>                      <% if(fieldset.pattern) { %>                        <p class=\"validation-message invalid-pattern\"><%= fieldset.dataErrorMesssage %></p>                      <% } %>            </fieldset>           <% if (fieldset.type === \"select\") { %>              <% _.each(fieldset.showExtraInput, function(selection) { %>                <div acif-base-field-name=\"<%= fieldset.name %>\" acif-base-field-value=\"<%= selection %>\">                    <input class=\"othertext\" type=\"text\" <% if(fieldset.otherplaceholder) { %>placeholder=\"<%= fieldset.otherplaceholder %>\"<% } %> name=\"<%= fieldset.name %>_other\" <% if(fieldset.maxlength) { %>maxlength=\"<%= fieldset.maxlength %>\"<% } %> <% if(fieldset.isRequired){ %>required<% } %> />                      <% if(fieldset.isRequired) { %>                        <p class=\"invalid-required\"><%= fieldset.requiredErrorMesssage %></p>                      <% } %>                </div>              <% }) %>            <% } %>        \t        <% }); %>     <button class=\"button-primary\" type=\"submit\">Start chat<span class=\"arrow-svg\"><svg class=\"caret\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\"><title>vzw-caret</title><path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\" /></svg></span></button>      <p class=\"required-text\">* required fields</p>\t</form></div>";
});
define("Automatons/templates/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a positive satisfaction rating. Please click on the following link to view the survey. To view the transcript, please click <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">here</a>.</p><p>ChatID: [engagement-id]</p><p>AgentID: [agent-id]</p><p>Team: [agent-attribute.Team]</p><p>Comments: [representative-rating-reason-social-media]</p>";
});
define("Automatons/templates/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a rating that requires coaching/attention. Please click on the following link to view the survey:To view the transcript, please click <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">here</a>.</p><p>ChatID: [engagement-id]</p><p>AgentID: [agent-id]</p><p>Team: [agent-attribute.Team]</p><p>Comments: [representative-rating-reason-social-media]</p>";
});
define("Automatons/templates/2770", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<div acif-template=\"template::2010\">Chat - OHOP</div>    <div acif-template=\"template::2009\">Chat - Agents Unavailable (Common FAQS)</div></div>";
});
define("Automatons/templates/2771", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting today.</span>    Please provide us with your feedback so we may serve you better in the future.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2772", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Gracias por utilizar nuestro servicio de Chat.</span>    <span class=\"required-heading\">Obligatorio *.</span></div><div acif-template=\"formify\"></div><div acif-template=\"template::2005\"></div>";
});
define("Automatons/templates/2773", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Tus comentarios ya fueron enviados.</p>            <p>Gracias por tu tiempo y tu participación.</p>            <span class=\"hidden-btn-desc\">Cerrar</span>        </span>        <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Cerrar <div acif-template=\"template::2005\"></div></button>    </div></div>";
});
define("Automatons/templates/2774", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <p class=\"lead\">Your feedback has been submitted!</p>        <p>Thank you for your time and participation.</p>    </div></div>";
});
define("Automatons/templates/2775", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"node__wrapper\">    <div class=\"notice padding-bottom-30\">        <div class=\"notice__text\">            <h1 class=\"node__header\">Our Apologies</h1>            <p class=\"node__subheader\">All of our agents are currently offline.<br/>Please reach out to your supervisor for assistance.</p>        </div>        <div class=\"notice__icon\">            <div acif-template=\"template::2001\" />        </div>    </div>    <div class=\"support\">\t\t<h2>Support Hours of Operation: </h2>            <h3>HBA Care and Transition</h3>            <dl>                <dt>Monday &ndash; Friday:</dt>                <dd>08:00 a.m. &ndash; 02:00 a.m. (EST)</dd>                <dt>Saturday:</dt>                <dd>08:00 a.m. &ndash; 10:00 p.m. (EST)</dd>                <dt>Sunday:</dt>                <dd>10:00 a.m. &ndash; 10:00 p.m. (EST)</dd>            </dl>            <h3>HBA Tech</h3>            <dl>                <dt>Monday &ndash; Friday:</dt>                <dd>09:00 a.m. &ndash; 02:00 a.m. (EST)</dd>                <dt>Saturday:</dt>                <dd>03:30 p.m. &ndash; 12:00 a.m. (EST)</dd>                <dt>Sunday:</dt>                <dd>12:00 p.m. &ndash; 08:30 p.m. (EST)</dd>            </dl>    </div></div>";
});
define("Automatons/templates/2776", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2777", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Tus comentarios ya fueron enviados.</p>            <p>Gracias por tu tiempo y tu participación.</p>            <span class=\"hidden-btn-desc\">Cerrar</span>        </span>        <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Cerrar <div acif-template=\"template::2005\"></div></button>    </div></div>";
});
define("Automatons/templates/2778", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\" acif-aria-speak>    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2779", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div><div acif-template=\"template::2005\"></div>";
});
define("Automatons/templates/2780", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2781", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Gracias por utilizar nuestro servicio de Chat.</span>    <span class=\"required-heading\">Obligatorio *.</span></div><div acif-template=\"formify\"></div><div acif-template=\"template::2005\"></div>";
});
define("Automatons/templates/2782", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\" acif-aria-speak>    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2783", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<div acif-template=\"template::2010\">Chat - OHOP</div>    <div acif-template=\"template::2009\">Chat - Agents Unavailable (Common FAQS)</div></div>";
});
define("Automatons/templates/2784", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Tus comentarios ya fueron enviados.</p>            <p>Gracias por tu tiempo y tu participación.</p>            <span class=\"hidden-btn-desc\">Cerrar</span>        </span>        <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Cerrar <div acif-template=\"template::2005\"></div></button>    </div></div>";
});
define("Automatons/templates/2785", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <p class=\"lead\">Your feedback has been submitted!</p>        <p>Thank you for your time and participation.</p>        <button acif-action=\"exit\">Close</button>    </div></div>";
});
define("Automatons/templates/2786", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Gracias por utilizar nuestro servicio de Chat.</span>    <span class=\"required-heading\">Obligatorio *.</span></div><div acif-template=\"formify\"></div><div acif-template=\"template::2005\"></div>";
});
define("Automatons/templates/2787", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<div acif-template=\"template::2010\">Chat - OHOP</div>    <div acif-template=\"template::2009\">Chat - Agents Unavailable (Common FAQS)</div></div>";
});
define("Automatons/templates/2788", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"node__wrapper\">    <h2 class=\"node__header\">Welcome to Verizon&nbsp;Wireless.</h2>    <p class=\"node__subheader\">Please choose one of the following options so that we can route you to the correct agent.</p>    <ul class=\"hba__list\">        <li acif-node=\"node::2002\" class=\"hba__item\">            <span class=\"hba__label\">General account inquiry</span>            <img  class=\"i-r-arrow\" src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/icon-caret-active-2x.png\">        </li>        <li acif-node=\"node::2003\" class=\"hba__item\">            <span class=\"hba__label\">Technical support inquiry</span>            <img class=\"i-r-arrow\" src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/icon-caret-active-2x.png\">        </li>        <li acif-node=\"node::2067\" class=\"hba__item\">            <span class=\"hba__label\">Transition support inquiry</span>            <img  class=\"i-r-arrow\" src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/icon-caret-active-2x.png\">        </li>    </ul></div>";
});
define("Automatons/templates/2789", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"template::2019\"></div>";
});
define("Automatons/templates/2790", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting today.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2791", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\" acif-aria-speak>    Thank you for chatting. Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2792", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <p>Thank you for your time!</p>    </div></div>";
});
define("Automatons/templates/2793", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\" acif-aria-speak>    Thank you for chatting. Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2794", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <p>Thank you for your time!</p>    </div></div>";
});
define("Automatons/templates/2795", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thank you for your time!</p>        </span>    </div></div>";
});
define("Automatons/templates/2796", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2797", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2798", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thank you for your time!</p>        </span>    </div></div>";
});
define("Automatons/templates/2799", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2800", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<div acif-template=\"template::2010\">Chat - OHOP</div>    <div acif-template=\"template::2009\">Chat - Agents Unavailable (Common FAQS)</div></div>";
});
define("Automatons/templates/2801", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2802", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<h1 class=\"heading\">Unavailable at <br/>this time.</h1><p class=\"bold cushion\">Please try again shortly</p><p class=\"cushion\">We apologize as agents are not available at this time. Please try again later.</p>";
});
define("Automatons/templates/2803", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"template::2019\"></div>";
});
define("Automatons/templates/2804", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thanks for chatting.</span>    Please provide us with your feedback so we may serve you better.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2805", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"template::2019\"></div>";
});
define("Automatons/templates/2806", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">\t<div acif-template=\"template::2010\">Chat - OHOP</div>    <p class=\"cushion\">For immediate assistance on making a purchase, please <span class=\"link\" acif-node=\"<%= node_id %>\">click here</span> to see our newest plans.</p></div>";
});
define("Automatons/templates/2807", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"template::2019\"></div>";
});
define("Automatons/templates/2808", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\" acif-aria-speak>    <span class=\"heading-first-line\">Thank you for chatting.</span>    Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div><div acif-template=\"template::2005\"></div>";
});
define("Automatons/templates/2809", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">    <video width=\"480\" height=\"360\" controls=\"controls\">      <source src=\"https://static.inq.com/sites/10004593/assets/automatons/videos/ccc_blank_final.mp4\" type=\"video/mp4\">    </video>    <div>        <button acif-action=\"exit\" class=\"close\" onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed video');\">Close Video</button>    </div></div>";
});
define("Automatons/templates/2851", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"container\" class=\"flex\">  <div class=\"content\">    <div class=\"layout-row\">      <div class=\"flex-50\">        <div class=\"header\">          <span class=\"red\">go</span>unlimited          <span class=\"image_container\">              <img src=\"https://static.inq.com/sites/10004593/assets/automatons/images/checkmark-red.jpg\">          </span>        </div>        <div>          <div class=\"bold\">            All the data you need<br />            on America's<br />            best network.<br />            <br />            Plan details          </div>          Unlimited 4G LTE data(1)<br />          Unlimited Talk & Text<br />          DVD-quality streaming(2)<br />          Unlimited mobile hotspot (600kbps)<br />          Verizo up revards(3)          </div>      </div>        <div class=\"flex-50\">        <div class=\"header\">          <span class=\"red\">beyond</span>unlimited          <span class=\"image_container\">              <img src=\"https://static.inq.com/sites/10004593/assets/automatons/images/checkmark-red.jpg\">          </span>        </div>        <div>          <div class=\"bold\">            Everything you want<br />            from an unlimited plan.<br />            And then some.<br />            <br />            Plan details          </div>          Premium unlimited 4G LTE data(4)<br />          Unlimited Talk & Text<br />          Mexico & Canada included(5)<br />          HD-quality streaming<br />          Unlimited mobile hotspot with<br />          15GB per line at full 4G LTE(6)<br />          Verizon Up rewards(7)        </div>      </div>    </div>        <div class=\"layout-row disclaimer\">      <div class=\"flex-100\">        1 In times of congestion, your data may be temporarily slower than other traffic.  Plan eligibile for up to 10 phones or tablets and up to 20 connected devices.        <br />        2 DVD-quality streaming at 4G LTE speeds.  Phones SD/480p, tablets HD/720p.        <br />        3 Rewards included when using My Verizon app.        <br />        4 After 22GB/line, in times of congestion, your data may be temporarily slower than other traffic.  Plan eligible for up to 10 phones or tablets and up to 20 connected devices.        <br />        5 Unlimited calling from US. Plus, take your talk, text & data with you; 4G world device required.  International data reduced to 2G speeds after 512MB/day.        <br />        6 Unlimited mobile hotspot with up to 15GB at 4G LTE speeds; above 15B speed limited to up to 500kbps.        <br />        7 Rewards included when using My Verizon app.      </div>    </div>  </div>   <div id=\"close\">    <button acif-action=\"exit\" class=\"close close-image\" onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed AP Device Payments');\">Close</button>  </div></div> ";
});
define("Automatons/templates/2852", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"container\">  <div class=\"cell\">    <div class=\"layout-row baseline\">      <div class=\"flex-35\">        <div class=\"jumbo_header\">          <span>#</span>1        </div>      </div>      <div class=\"flex-65\">        <div class=\"header\">          Overall<br />          network.        </div>              </div>    </div>        <div class=\"layout-row\">      <div class=\"flex-100 jumbo\">        RootMetrics just ranked us the #1 overall network in the U.S. for the 8th time in a row.      </div>    </div>    <div class=\"layout-row vertical-center\">      <div class=\"flex-35\">        <img src=\"https://static.inq.com/sites/10004593/assets/automatons/images/highestInQualityAward.png\">      </div>      <div class=\"flex-65 bold jumbo\">          Highest in Wireless<br />          Network Quality<br />          Performance Across<br />          All 6 Regions      </div>      </div>    <div class=\"layout-row\">      <div class=\"flex-100 jumbo\">        For the 18th time in a row, Verizon<br />        received more awards than any other<br />        provider in the J.D. Power Wireless<br />        Network Quality Study.      </div>      </div>  </div>  <div class=\"cell\">      <div class=\"layout-row baseline\">          <div class=\"flex-35\">            <div class=\"jumbo_header\">              <span>#</span>1            </div>          </div>          <div class=\"flex-65\">            <div class=\"header\">              Network<br />              performance<br />              satisfaction            </div>          </div>        </div>        <div class=\"layout-row\">          <div class=\"flex-100 jumbo\">            For 35 quarters in a row, Verizon ranked 1st in Network Performance Satisfaction<br />            - that's 8 years running.          </div>        </div>        <div class=\"layout-row\">          <div class=\"flex-100 disclaimer\">            1. Rankings based on the RootMetrics US National RootScore Report: 1H            2017.  Testd with best commercially available smartphones on four             national mobile networks across all available network types.  Your            experiences may vary.  The RootMetrics award is not an endorsement of            Verizon.  Visit www.rootmetrics.com for more details.          </div>        </div>        <div class=\"layout-row\">          <div class=\"flex-100 disclaimer\">            2. Verizon Wireless received the highest numerical score among wireless            service providers in the J.D. Power 2017 US Wireless Network Quality            Performance Study - volume 1, based on 42,922 total responses            throughout the Northeast, Southeast, North Central(tied), Southwest,            by customers with wireless phones, surveyed July-December 2016.  Your            experiences may vary.  Visit jdpower.com.          </div>        </div>        <div class=\"layout-row\">          <div class=\"flex-100 disclaimer\">            3. Based on Verizon's analysis of Nielsen's Mobile Insights survey data,            which uses respondent's self-reported rating (1 to 10 scale) of network            quality satisfaction with their carrier.  The underlying source data is an            estimate based on a national survey of 90,000 quarterly mobile phone            users between Q1 20017, and Q2 2016.          </div>        </div>        <div id=\"close\">          <button acif-action=\"exit\" class=\"close close-image\" onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed AP Device Payments');\">Close</button>        </div>    </div></div>";
});
define("Automatons/templates/2853", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"container\">    <div class=\"layout-row\">      <div class=\"flex-80\">        <div>          Better speed matters.<br />          <br />          Sprint's \"faster\" LTE Plus network covers less than 10% of the area of Verizon's LTE network,          with a standard 4G LTE footprint of only 661,000 square miles.<br />        </div>      </div>      <div class=\"flex-20\">        <img src=\"https://static.inq.com/sites/10004593/assets/automatons/images/barometer.png\">      </div>    </div>    <div class=\"layout-row\">      <div class=\"flex-100\">        Verizon's LTE network covers over 2.4 million square miles.  And Verizon delivers consistently        fast speeds in more places than any other network, based on our analysis of Nielsen data. It's        fast when you need it to be, not just every now and then.      </div>    </div>    <div class=\"layout-row disclaimer\">      <div class=\"flex-100\">          Sprint 4G LTE and LTE plus coverage as of April 2016. \"Consistently fast\" based on Verizon analysis of Nielson Top 100 market Drive Test results of upload and download speeds during Drive #3 2015.      </div>    </div>       <div id=\"close\">      <button acif-action=\"exit\" class=\"close close-image\" onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed AP Device Payments');\">Close</button>    </div>    </div>";
});
define("Automatons/templates/2854", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"container\">    <div class=\"layout-row\">      <div class=\"flex-80\">        <div>          Better coverage matters.<br />          <br />          Other providers offer \"almost the same amount\" of 4G LTE coverage as Verizon, but Verizon          LTE covers 2.4 million squrae miles.  Compare that to <br />          T-Mobile LTE, which only covers 1.4 million miles.        </div>      </div>      <div class=\"flex-20\">        <img src=\"https://static.inq.com/sites/10004593/assets/automatons/images/greyMap.jpg\">      </div>    </div>    <div class=\"layout-row\">      <div class=\"flex-100\">          <br />          Verizon offers the best LTE coverage in America.  Not \"almost the best.\"  See the difference?      </div>    </div>    <div class=\"layout-row disclaimer\">      <div class=\"flex-100\">          T-Mobile 4G LTE coverage as of April 2016      </div>    </div>       <div id=\"close\">      <button acif-action=\"exit\" class=\"close close-image\" onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed AP Device Payments');\">Close</button>    </div>    </div>";
});
define("Automatons/templates/2855", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">    <h5 class=\"heading tighten-text\"><%= header %></h5>    <form class=\"options\" acif-next-transition=\"next\" novalidate acif-submit-on-click>        <fieldset type=\"radio\" name=\"Last Option Selected\" required>            <% _.each(options, function(option) { %>            <label class=\"option\">                <input value=\"<%= option.text %>\" class=\"hidden\"/>                <p class=\"option_content\">                    <span class=\"text\"><%= option.text %>                    <span acif-template=\"template::2005\">SVG - Caret Right</span>                </p>            </label>            <% }); %>        </fieldset>    </form></div>";
});
define("Automatons/templates/2856", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\" class=\"agent-busy\">  <div>    <h1 class=\"heading\"><%= header %></h1>    <p class=\"text\">      <%= content %>    </p>  </div>  <div class=\"loader\">    <img src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/loader_extra_large.gif\" alt=\"VZW Loader Extra Large\"/>  </div></div>";
});
define("Automatons/templates/2857", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">    <div class=\"padding-top\"></div>    <h5 class=\"subheading tighten-text\">To better assist you, we are redirecting you to a page that can help you with your inquiry.</h5>    <div id=\"loader\">\t\t<img class=\"loading_ellipsis_gif\" src=\"https://media-verizon.inq.com/media/sites/10004593/flash/VZW-Common-Assets/MediaAssets/loader_extra_large.gif\" alt=\"VZW Loader Extra Large\"/>   \t</div></div>";
});
define("Automatons/templates/2900", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<fieldset class=\"formify-fieldset-radio <%= field.inline ? 'formify-fieldset-inline' : '' %>\"  name=\"<%= field.id %>\" acif-field-type=\"<%= field.type_attr %>\" <%= field._attrs %>>  <legend class=\"formify-legend\"><%= field.label %></legend>  <% if (field.headingLeft || field.headingRight) { %>    <div class=\"heading\">      <span class=\"left\"><%= field.headingLeft %></span>      <span class=\"right\"><%= field.headingRight %></span>    </div>    <div class=\"radio-field-group\">  <% } %>  <% _.each(field.options, function(rawOption) {    var option = {};    option.label = rawOption.label || rawOption;    option.value = rawOption.value || rawOption;  %>    <label class=\"formify-label\">      <input class=\"formify-input\" type=\"<%= field.type %>\" name=\"<%= field.id %>\" value=\"<%= option.value %>\" />      <span class=\"formify-option-label<% if (field.headingLeft || field.headingRight) {%> block-elem<% } %>\">        <%= option.label %>      </span>    </label>  <% }); %>  <% if (field.headingLeft || field.headingRight) { %>  </div>  <% } %>  <%= field.validate._html %></fieldset>";
});
define("Automatons/templates/2901", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">    <span class=\"heading-first-line\">Thank you for chatting today.</span>    <% if (typeof subHeading === 'string') { %>    <%= subHeading %>    <% } else { %>    Please provide us with your feedback so we may serve you better in the future.    <% } %></div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2902", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <span class=\"hidden-btn-desc\">Close</span>        </span>        <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">          <span>Close</span>          <svg class=\"caret\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\"><title>vzw-caret</title><path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\" /></svg>        </button>    </div></div>";
});
define("Automatons/templates/2903", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">    <h5 class=\"heading tighten-text\"><%= header %></h5>    <p class=\"mt-15\"><%= subHeading %></p>    <form class=\"options\" acif-next-transition=\"next\" novalidate acif-submit-on-click>        <fieldset type=\"radio\" name=\"Last Option Selected\" required>            <% _.each(options, function(option) { %>            <label class=\"option\">                <input value=\"<%= option.text %>\" class=\"hidden\"/>                <p class=\"option_content\">                    <span class=\"text\"><%= option.text %>                    <span acif-template=\"template::2005\">SVG - Caret Right</span>                </p>            </label>            <% }); %>        </fieldset>    </form></div>";
});
define("Automatons/templates/2904", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"offline-wrapper\">  <div class=\"node__wrapper\">      <div class=\"notice padding-bottom-30\">          <div class=\"notice__text\">              <h1 class=\"node__header\">Our Apologies</h1>              <p class=\"node__subheader\">All of our agents are currently offline.<br/>Please reach out to your supervisor for assistance.</p>          </div>          <div class=\"notice__icon\">              <div acif-template=\"template::2001\" />          </div>      </div>      <div class=\"support\">  \t\t<h2>Support Hours of Operation: </h2>              <h3>Support Coordinator Care</h3>              <dl>                  <dt>Monday &ndash; Friday:</dt>                  <dd>05:00 a.m. &ndash; 09:00 a.m. (EST)</dd>                  <dt>Saturday &ndash; Sunday:</dt>                  <dd>06:00 a.m. &ndash; 07:00 p.m. (EST)</dd>              </dl>              <h3>Support Coordinator Tech</h3>              <dl>                <dt>Monday &ndash; Friday:</dt>                <dd>05:00 a.m. &ndash; 09:00 a.m. (EST)</dd>                <dt>Saturday &ndash; Sunday:</dt>                <dd>06:00 a.m. &ndash; 07:00 p.m. (EST)</dd>              </dl>      </div>  </div></div>";
});
define("Automatons/templates/2935", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"wrapper\">  <h5 class=\"heading tighten-text\">    <%= header %>  </h5>  <p class=\"mt-15\">    <%= subHeading %>  </p>  <form class=\"options\" acif-next-transition=\"next\" novalidate acif-submit-on-click>    <fieldset type=\"radio\" name=\"BFO Option Selected\" required>      <% _.each(options, function(option) { %>        <label class=\"option\">                <input value=\"<%= option.text %>\" class=\"hidden\"/>                <p class=\"option_content\">                    <span class=\"text\"><%= option.text %>                    <span acif-template=\"template::2005\">SVG - Caret Right</span>                </p>            </label>        <% }); %>    </fieldset>  </form></div>";
});
define("Automatons/templates/2936", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/suspend_service_final.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/2937", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/add_rem_features.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/2938", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">  <div class=\"center-container\">      <span id=\"thanks-message\">          <p class=\"lead\">Thank you for your time!</p>      </span>  </div></div>";
});
define("Automatons/templates/2978", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"heading\">  <span class=\"heading-first-line\">Thank you for chatting.</span>  Please take a moment to complete the following brief survey.</div><div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2979", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a survey. Please click on the following link to view the survey:  <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">here</a>.</p>  <p>AgentID: [agent-id]</p>  <p>ChatID: [engagement-id]</p>";
});
define("Automatons/templates/2980", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <h1 class=\"heading\">Chat is currently busy.</h1>    <div class=\"text\">        <p class=\"cushion\">Check back soon.</p>    </div></div>";
});
define("Automatons/templates/2981", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <h1 class=\"heading\">Chat is closed.</h1>    <div class=\"text\">        <p class=\"cushion\">You can chat with us during the hours of 7 am - 8 pm EST.</p>    </div></div>";
});
define("Automatons/templates/3022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"wrapper\">  <div class=\"upload-wrapper\">    <div class=\"upload-section\">      <div class=\"image-wrapper\">        <img alt=\"File Upload\" src=\"https://static.inq.com/sites/10004593/assets/automatons/images/ico-file-upload-40x40.png\">      </div>      <h1>DISCLAIMER</h1>      <h2>By uploading this file, you acknowledge that the agent will be able to view the contents of the file.</h2>      <p>         Uploaded documents will be deleted at the end of this Chat session, and will not become part of your account records.      </p>      <p acif-file-upload-status></p>      <input type=\"file\" id=\"selectedFile\" class=\"hide\" acif-upload-to-agent />    </div>  </div>  <div class=\"footer-section\">    <button class=\"btn-cancel\" acif-action=\"exit\">Close</button>    <button class=\"btn-upload\" onclick=\"document.querySelector('[type=file]').click()\">Upload</button>  </div></div>";
});
define("Automatons/templates/3062", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/upgrade.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/3063", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/mb_chpln.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/3064", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/add_user.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/3065", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/ccc_cui.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/3066", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"ap-video\">  <video width=\"480\" height=\"360\" controls=\"controls\">    <source src=\"https://www.verizonwireless.com/content/dam/businessportal/content/assets/external_videos/packages.mp4\" type=\"video/mp4\">  </video>  <div>      <button acif-action=\"informAgentPressingClose;exit\" class=\"close\">Close Video</button>  </div></div>";
});
define("Automatons/templates/3067", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <div>        <h1 class=\"heading\">Chat is currently unavailable in your location.</h1>        <div class=\"text\">            <p class=\"cushion\">Please contact your supervisor for available support options.</p>        </div>    </div></div>";
});
define("Automatons/templates/3107", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<header class=\"formify-header\" acif-aria-speak>    <% if (formify.heading) { %>    <h1 class=\"formify-heading\"><%= formify.heading %></h1>    <% } %>    <% if (!formify.hasNoRequiredItems) { %>    <p class=\"formify-heading-required\">Required items indicated with *.</p>    <% } %></header>";
});
define("Automatons/templates/3108", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<h2>Hello! Thank you for<br /> returning.</h2><p>Would you like to reconnect to a chat agent?</p><button acif-node=\"node::2174\">  <strong>Yes, connect me</strong>  <svg class=\"caret\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\"><title>vzw-caret</title><path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\" /></svg></button><span acif-action=\"exit\">No, thank you.</span>";
});
define("Automatons/templates/3109", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a less than satisfactory response on the survey. Please click on the following link to view the survey:  <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">here</a>.</p>  <p>AgentID: [agent-id]</p>  <p>ChatID: [engagement-id]</p>";
});
define("Automatons/templates/3110", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"wrapper\">  <div class=\"image-container\">    <img      src=\"https://static.inq.com/sites/10004593/assets/automatons/images/<%= image %>\"      alt=\"<%= alt %>\"    />  </div>  <div>  <div class=\"button-container\">    <button      class=\"close\"      acif-action=\"exit\"      onClick=\"window.top.inQ.ACIF.IJSF.sendDatapassMessage('User closed <%= image_description %>');\"    >      Close    </button>  </div></div>";
});
define("Automatons/templates/3233", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>Please be advised that '[agent-id]' received an After Chat Survey with score of [representative-performance] for the following  question:  <br />  <br /> Q: Considering your Internet chat session with the last representative, how would you rate their performance?  <br />  <br />  <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript</a></p><p>ChatID: [engagement-id]</p><p>Comments: [improve-experience]</p>";
});
define("Automatons/templates/3234", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>Please be advised that '[agent-id]' received an After Chat Survey with score of [recommendation-likelihood] for the following  question:  <br />  <br /> Q: How likely is it that you would recommend Verizon Wireless to a friend or colleague?  <br />  <br />  <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript\">https://portal.touchcommerce.com/portal/portal.jsp#transcript_10004593_engagementID:[engagement-id]:transcript</a></p><p>ChatID: [engagement-id]</p><p>Comments: [improve-experience]</p>";
});
define("Automatons/templates/3237", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"flex-column\">    <div>        <h1 class=\"heading\">We are unable to complete your chat request.</h1>        <div class=\"text\">            <p class=\"cushion\">Please refresh the page and try again. If you continue to receive this message please report this issue to your supervisor.</p>        </div>    </div></div>";
});
define("Automatons/templates/402", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<button class=\"btn-active extended\" acif-ignore-aa acif-node=\"<%= api.getTargetChatNode() %>\">Chat now<span acif-template=\"template::2005\">SVG - Caret Right</span></button> ";
});
define("Automatons/templates/formify-map", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = { "formify-type-radio-scale": 2017, "formify-type-select": 2022, "formify-type-radio": 2900, "formify-header": 3107 };
});
ACIF.onConfigsReady.resolve();
//# sourceMappingURL=acif-configs.map
