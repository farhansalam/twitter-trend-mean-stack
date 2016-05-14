'use strict';

//Setting up route
angular.module('trends').config(['$stateProvider',
	function($stateProvider) {
		// Trends state routing
		$stateProvider.
		state('trends', {
			url: '/locations',
			templateUrl: 'modules/trends/views/trends.client.view.html'
		}).

		state('viewTrends', {
			url: '/locations/:locationId',
			templateUrl: 'modules/trends/views/view-trends.client.view.html'
		});	
	}
]);