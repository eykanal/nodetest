function route(handle, pathname, response) {
	console.log("Routing request for " + pathname);

	if( typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		handle["/404"](response, pathname);
	}

}

exports.route = route;