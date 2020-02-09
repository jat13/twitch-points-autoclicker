setTimeout(function(){
	chrome.tabs.query({url: '*://*.twitch.tv/*'}, function(tabs){
		tabs.forEach(function(tab){
			chrome.tabs.executeScript(
				tab.id,
				{file: 'scripts/autoclick.js'});
		});
	});
},1000);

// Code for first launch
chrome.runtime.onInstalled.addListener(function(){
	chrome.storage.sync.set({interval: 10}, function(){
		console.log("Variables ok");
	});

	// Popup will only be accesible on twitch.tv
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.twitch.tv'},
			})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});