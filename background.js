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


localStorage['recording']='false';
var openedLinkArray = [];
var Interval = [];
var x = new Date().getTime();

function OpenSite()
{

       window.open(localStorage['url']); 
	
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
        
        soundAlert: localStorage['soundAlert'],
		site: localStorage['site'],
		quantity: localStorage['quantity'], 
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