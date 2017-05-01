(function() {
    'use strict';
		angular	
			.module('myApp')
			.controller('ServicesController', ServicesController);
		function ServicesController($scope, CalculatorService) {

			    $scope.doSquare = function() {
			        $scope.answer = CalculatorService.square($scope.number);
			    }

			    $scope.doCube = function() {
			        $scope.answer = CalculatorService.cube($scope.number);
			    }
		};
})();		