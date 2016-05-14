'use strict';

angular.module('trends').factory('Trends', ['$resource',
	function($resource) {
		return $resource('locations/:locationId', { categoryId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);