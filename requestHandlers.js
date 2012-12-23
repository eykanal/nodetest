function start() {
	console.log("Request handler 'start' was called");
}

function upload() {
	console.log("Request handler 'upload' was called");
}

function missing(handle) {
	console.log("Request handler " + handle + " not found")
}

exports.start   = start;
exports.upload  = upload;
exports.missing = missing;