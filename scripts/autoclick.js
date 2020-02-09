function click(target){
	let targetElement = target.querySelector('.tw-interactive');
	if(targetElement != null){
		console.log("Bonus box clicked")
		targetElement.click();
	} else {
		console.log("Bonus box not ready")
	}
}

function findContainer(){
	let target = document.querySelector('.community-points-summary > div:last-child');
	if(target != null){
		click(target);
	} else {
		console.log("Not in a channel")
	}
}

function main(interval){
	setInterval(function(){
		findContainer();
	}, interval*1000);
}

console.log("Autoclicker activated");
chrome.storage.sync.get('interval', function(data){
	main(data.interval);
});