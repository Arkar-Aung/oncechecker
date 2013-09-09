/* =========================================================
 * oncechecker.js v1
 * Arkar Aung
 * =========================================================
 * This is javascript cookie helper .
 * ========================================================= */

var onceChecker = {
	config : {
		cookieName : 'checkerName',
		cookieValue : 'onceChecker',
		expire : '1', // number of day
		task : function() {		
		}
	},

	init : function(config) {
		if(config && typeof(config) === 'object') {
			$.extend(onceChecker.config,config);
		}

			if(onceChecker.checkCookie() == null) {
				onceChecker.setCookie();
				onceChecker.config.task();
			}
	},

	checkCookie : function() {
		
		var dc = document.cookie;
		var prefix = onceChecker.config.cookieName + "=";
	    var begin = dc.indexOf("; " + prefix);

	    if (begin == -1) {
	        begin = dc.indexOf(prefix);
	        if (begin != 0) return null;
	    }
	    else
	    {
	        begin += 2;
	        var end = document.cookie.indexOf(";", begin);
	        if (end == -1) {
	        end = dc.length;
	        }
	    }
	    
	    return unescape(dc.substring(begin + prefix.length, end));
	},

	setCookie : function() {
		var cookieName = onceChecker.config.cookieName;
		var cookieValue = onceChecker.config.cookieValue;

		if(onceChecker.config.expire == 'expire') {
			document.cookie =  cookieName + "=" + cookieValue + "; path=/";
		}else {
			var cookieExpire = onceChecker.getExpTime();
			document.cookie =  cookieName + "=" + cookieValue + cookieExpire + "; path=/";
		}
	},

	deleteCookie : function() {
			var cookieName = onceChecker.config.cookieName;
		    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	},

	getExpTime : function() {
		var date = new Date();
		var day = parseInt(onceChecker.config.expire);
        date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();

        return expires;
	}

};