// function to get the cookie value
getCookieValue = function(cookieName) {
    var cVal = "";
    if (typeof Cookie == "object" && typeof Cookie.read != "undefined") {
        cVal = Cookie.read(cookieName)
    } else {
        if (document.cookie) {
            var i, x, y, kvpArr = document.cookie.split(";");
            for (i = 0; i < kvpArr.length; i++) {
                var kvp = kvpArr[i];
                if (typeof kvp == "string" && kvp !== "") {
                    var key = kvp.substr(0, kvp.indexOf("=")).replace(/^\s+|\s+$/g, "");
                    if (cookieName === key) {
                        cVal = kvp.substr(kvp.indexOf("=") + 1);
                        break
                    }
                }
            }
        }
    }
return (null != cVal) ? cVal : ""
};
