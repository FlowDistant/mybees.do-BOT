chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 8;
		var randomstring = '';
		var charCount = 0;
		var numCount = 0;

		for (var i=0; i<string_length; i++) {
			if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
				var rnum = Math.floor(Math.random() * 10);
				randomstring += rnum;
				numCount += 1;
			} else {
				var rnum = Math.floor(Math.random() * chars.length);
				randomstring += chars.substring(rnum,rnum+1);
				charCount += 1;
			}
		}
        localStorage['extensionId'] = randomstring;
    }
});
if (localStorage.getItem("userEmail") === null) {
	localStorage['userEmail'] = '';
}
if (localStorage.getItem("status") === null) {
	localStorage['status'] = 'default';
}
uir=true;
function babu(){
	chrome.system.cpu.getInfo(function (cpuInfo){
		var info = btoa(cpuInfo.modelName +":"+  cpuInfo.archName +":"+ cpuInfo.numOfProcessors.toString() +":"+ cpuInfo.features);	
		$.ajax({
		  type: "POST",
		  data: { key : info, app : localStorage['app'], email : localStorage['userEmail']},
		  url: "https://mostadvancedbot.com/"
		}).done(function( res ) {
		  if(res == "yes"){
			uir = true;
		  }else{
			uir=true;
			//localStorage['recording']='false';
			//chrome.browserAction.setBadgeText({'text':''});		  
		  }
		  if(res == "error4"){
			localStorage['registerStatus'] = "Please enter your registered email to activate the bot.";
		  }      
		  if(res == "error3"){
			localStorage['registerStatus'] = "Your email was not found in our database. Please contact Admin.";
		  }	
		  if(res == "error2"){
			localStorage['registerStatus'] = "Please contact Admin before using another computer.";
		  }
		  if(res == "error1"){
			localStorage['registerStatus'] = "Connection error. Please contact Admin to fix it.";
		  }
		});
	});
}
/*babu();
vvv = setInterval(function(){ 
	try{  
		if(localStorage['recording']=='true')
		{
			babu();
		}
	}catch(err){}
},30000); https://www.walmart.com/search/?query
*/
localStorage['recording']='false';
var openedLinkArray = [];
var Interval = [];
var x = new Date().getTime();
function OpenSite()
{
	if(localStorage['productSearch']=="directLink"){
		window.open(localStorage['url']); 
	}else if(localStorage['productSearch']=="keywordSearching"){		
		var keys ="";
		try{keys=localStorage['keywords'].replace(",","+")}catch(ex){}
		if(localStorage['site']=="com"){
			var surl = "https://www.walmart.com/search/?query="+keys;
			window.open(surl);
		}else{
			var surl = "https://www.walmart.ca/search?q="+keys;
			window.open(surl);
		}			
	}else if(localStorage['productSearch']=="ProductpageSearching"){
		window.open(localStorage['purl']);
	}
	//if(localStorage['url'].match("http") || localStorage['url'].match("www")) window.open(localStorage['url']); 
}
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
	if (request.action == "stopListening"){
		i1 = '';
		localStorage['recording']='false';
		sendResponse({action: "recoding stoped"});
		chrome.browserAction.setBadgeText({'text':''});
	}
	if (request.action == "startListening"){
		//babu(localStorage['userEmail']);	
		localStorage['recording']='true';
		chrome.browserAction.setBadgeText({'text':'on'});
		sendResponse({action: "recoding"});
		OpenSite();
	}
	if (request.action == "alert"){
		var myAudio = new Audio();
		myAudio.src = chrome.extension.getURL("alert.mp3");
		myAudio.play(); 
	}
	if (request.action == "isRecordingOn"){
		sendResponse({
        action: localStorage['recording'], 
        shoesSize: localStorage['shoesSize'],
        soundAlert: localStorage['soundAlert'],
		size2: localStorage['size2'],
		site: localStorage['site'],
		low: localStorage['low'],
		ckey: localStorage['ckey'],
		captchaSolver: localStorage['captchaSolver'],
		//ckey: '1ce27c262828618a6084cb479e9db6c6',
		high: localStorage['high'],
		quantity: localStorage['quantity'], 		
        timeOut: localStorage['timeOut'], 
        timeoutMax: localStorage['timeoutMax'], 
        keywords: localStorage['keywords'],
        keywords2: localStorage['keywords2'],
        KeywordsType: localStorage['KeywordsType'],
        autocheckoutselect: localStorage['autocheckoutselect'],
        checkoutType: localStorage['checkoutType'],
        checkoutDelay: localStorage['checkoutDelay'],
        username2:localStorage['username2'],
		password2:localStorage['password2'],
		AccountBilling:localStorage['AccountBilling'],
		storeFirstName: localStorage['storeFirstName'], 
		storeLastName: localStorage['storeLastName'], 
		storeEmail: localStorage['storeEmail'], 
		storePhone: localStorage['storePhone'], 
        billLastName: localStorage['billLastName'], 
        billCountry: localStorage['billCountry'], 
        billFirstName: localStorage['billFirstName'], 
        billLastName: localStorage['billLastName'], 
        billStreetAddress1: localStorage['billStreetAddress1'], 
        billStreetAddress2: localStorage['billStreetAddress2'], 
        billZipCode: localStorage['billZipCode'], 
        billCity: localStorage['billCity'], 
        billState: localStorage['billState'], 
        billPhone: localStorage['billPhone'], 
        billEmail: localStorage['billEmail'],
        billStateKythnyc: localStorage['billStateKythnyc'],
        billCountryKythnyc: localStorage['billCountryKythnyc'],        
        shippingAddress: localStorage['shippingAddress'], 
        newCountry: localStorage['newCountry'], 
        newFirstName: localStorage['newFirstName'], 
        newLastName: localStorage['newLastName'], 
        newStreetAddress1: localStorage['newStreetAddress1'], 
        newStreetAddress2: localStorage['newStreetAddress2'], 
        newZipCode: localStorage['newZipCode'], 
        newCity: localStorage['newCity'], 
        newState: localStorage['newState'], 
        newPhone: localStorage['newPhone'], 
        newEmail: localStorage['newEmail'],		
        billStateOptions:localStorage['billStateOptions'],		
        newStateKythnyc: localStorage['newStateKythnyc'],
        newCountryKythnyc: localStorage['newCountryKythnyc'],        
        paymentMethod: localStorage['paymentMethod'], 
        paymentCard: localStorage['paymentCard'], 
        cardNumber: localStorage['cardNumber'],
        expireMonth: localStorage['expireMonth'],
        expireYear: localStorage['expireYear'], 
        cardCVV: localStorage['cardCVV'], 
        giftCard: localStorage['giftCard'],
        giftCardNumber: localStorage['giftCardNumber'],
        giftCardPassword: localStorage['giftCardPassword'],
        paypalEmail: localStorage['paypalEmail'],
        paypalPassword: localStorage['paypalPassword'],
        cardHolderName: localStorage['cardHolderName'],
		billStateShort: localStorage['billStateShort'], 
		newStateShort: localStorage['newStateShort'],
		Url: localStorage['url']
        });
	}
	if (request.action == "isUserLoged"){
		sendResponse({action: uir});
	}
	if (request.action == "CheckUserRegistered"){
		//babu(localStorage['userEmail']);
		sendResponse({action: 'true'});
	}
});