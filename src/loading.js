setTimeout(function() {
	
	var getParameterByName = function(name, url) {
	    url = url||window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	    var results = regex.exec(url);
	    
	    if (!results) {
	    	return null;
	    }
	    
	    if (!results[2]) {
	    	return '';
	    }

	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	document.getElementById('loading-target').innerHTML = [
		'<div class="message">',
			'Failed to load ',
			'<span class="url">',
				getParameterByName('url')||window.location.search,
			'</span>',
		'</div>',
		'<div>',
			'This is most likely because it does not allow itself to be shown in an iframe.',
		'</div>',
	].join('')
}, 1000);

