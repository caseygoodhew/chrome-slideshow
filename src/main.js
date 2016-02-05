
var index = 0;
var sites = getPref('sites') || [];// ['https://google.com', 'https://docs.google.com/presentation/d/1RbQ8oS5dmrgWl8NrzmJU_nUtdslkkLWKSfs2Zb8whpk/embed?start=false&loop=false&delayms=3000'];             

/*setPref('sites',[
	{ url: 'https://google.com', displayTime: 2500 }, 
	{ url: 'https://docs.google.com/presentation/d/1RbQ8oS5dmrgWl8NrzmJU_nUtdslkkLWKSfs2Zb8whpk/embed?start=false&loop=false&delayms=3000' }
]);*/

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

if (sites.length) {
	timer();
}

