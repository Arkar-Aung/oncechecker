oncechecker
===========

Javascript Cookie Helper . 

Usage
=====

onceChecker.init();

You can set these values :

		config = {
			cookieName: 'something',
			cookieValue: '123ghjk',
			task: function(){ // if your cookie exist, do this

			},
			expire: 1 // number of day
		};

		onceChecker.init(config);

Tips
====

1.If you set expire to 'session' , oncechecker will set automatically cookie as session cookie.

2.If you want to delete cookie manually , try with it .

		onceChecker.deleteCookie();

