
var index = 0;
var sites;

var getRemoteConfig = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var x = document.createElement('x');
			x.innerHTML = xhttp.responseText;
			var els = x.getElementsByClassName('js-file-line');
			var result = Array.prototype.slice.call(els).map(x => x.innerText).join('');
			sites = JSON.parse(result);
			startTimer();
		}
	};
	xhttp.open("GET", 'https://github.com/caseygoodhew/sherlock-agile-dashboard/blob/master/chrome-slideshow-config.json', true);
	xhttp.send();
}

var timer = function() {
	
	var iframe = document.getElementById('target');
	var site = sites[index];

	iframe.onload = function() {

		iframe.onload = null;
		iframe.src = site.url;
		setTimeout(timer, site.displayTime || getPref('default-display-time') || 5000);
	}

	iframe.src = "loading.html?url="+site.url;
	
	index++;
		
	if (index >= sites.length) {
		index = 0;
	}
}

var startTimer = function() {
	sites = sites || getPref('sites') || [];

	if (sites.length) {
		timer();
	}
}

getRemoteConfig();