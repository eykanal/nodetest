function route(handle, pathname) {
	console.log("Routing request for " + pathname);

	if( typeof handle[pathname] === 'function') {
		handle[pathname];
	} else {
		handle["/404"](pathname);
	}
}

exports.route = route;