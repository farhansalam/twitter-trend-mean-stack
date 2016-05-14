'use strict';

// Trends module config
angular.module('trends').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Locations', 'trends', 'dropdown', '/locations');
		Menus.addSubMenuItem('topbar', 'trends', 'List Locations', 'locations');
	}
]);