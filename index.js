var router = require("./router");
var server = require("./server");
var requestHandlers = require("./requestHandlers");

handle = {
	"/" 		: requestHandlers.start,
	"/start" 	: requestHandlers.start,
	"/upload" 	: requestHandlers.upload,
	"/404"		: requestHandlers.missing
};

server.start(router.route, handle);