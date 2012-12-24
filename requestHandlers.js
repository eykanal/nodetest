var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called");

	exec("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Upload stuff.");
	response.end();
}

function missing(response, handle) {
	console.log("Request handler " + handle + " not found");

	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Missing page");
	response.end();
}

exports.start   = start;
exports.upload  = upload;
exports.missing = missing;