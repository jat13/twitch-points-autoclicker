let changeRefresh = document.getElementById('changeRefresh');

chrome.storage.sync.get('interval', function(data){
	document.getElementById(data.interval).checked = true;
});

changeRefresh.onclick = function(element){
	let rate = document.querySelector('input[name=rate]:checked').value;

	chrome.storage.sync.set({interval: rate}, function(){
		console.log("Interval changed to "+rate);
	});
};