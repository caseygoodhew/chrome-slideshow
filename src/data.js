function setPref(key, value) {
	var config = localStorage.config ? JSON.parse(localStorage.config) : {};
	config[key] = value;
	localStorage.config = JSON.stringify(config);	
}

function getPref(key) {
	if (!localStorage.config) {
		return;
	}
	var config = localStorage.config ? JSON.parse(localStorage.config) : {};
	return config[key];
}