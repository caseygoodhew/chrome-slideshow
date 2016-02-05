document.getElementById('default-display-time').value=getPref('default-display-time')||5000;
var sites = getPref('sites');
sites = sites ? JSON.stringify(sites) : '';
document.getElementById('sites').value=sites;

document.getElementById('button').onclick = function() {
	
	var error = false;
	var time = document.getElementById('default-display-time').value;
	if (isNaN(time)) {
		alert('default-display-time is not a number');
		error = true;
	} else if (time <= 0) {
		alert('default-display-time must be bigger than 0');
		error = true;
	}

	try
	{
		sites = document.getElementById('sites').value;
		if (!sites) {
			sites = '[]';
		} else {
			sites = JSON.parse(sites);
		}
	}
	catch (ex) {
		alert('Couldn\'t convert to JSON object');
		error = true;
	}

	if (!error) {
		setPref('default-display-time', time);
		setPref('sites', sites);
	}
};