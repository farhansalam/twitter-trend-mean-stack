'use strict';

angular.module('trends').controller('TrendsController', ['$scope', '$location', '$stateParams', 'Authentication', 'Trends',
	function($scope, $location, $stateParams, Authentication, Trends) {
		$scope.authentication = Authentication;
	  	$scope.currentPage = 1;
	  	$scope.pageSize = 3;
	  	$scope.offset = 0;
	  	
	  	$scope.pageChanged = function() {
			$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;
		};

		$scope.find = function() {
			$scope.trends = Trends.query();
		};

		$scope.findOne = function() {
			$scope.trends = Trends.get({ 
				locationId: $stateParams.locationId
			});
		};

		$scope.trendSearch = function(location) {
			$location.path('locations/' + location._id);
		};
	}
]);