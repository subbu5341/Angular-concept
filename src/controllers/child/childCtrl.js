(function() {
    'use strict';
    angular
		.module('myApp')
	    .controller('childController', childController);
	
	function childController($scope, $rootScope, $location, $window) { 
		$scope.childName = "Hi childCtrl";
		$scope.myUrl = $location.absUrl();
		
		$scope.gitRepoLink = function (){
			$window.location.href ="https://github.com/subbu5341";
		}

		$scope.homeRoute = function (){
			$location.path('/parentCtrl');
		}
		
		//Event Listener functionality
		$scope.emitData ="I am EmitEvent"
		$rootScope.$on('greeting', listenGreeting)
		
		function listenGreeting($event, message){
	    	alert('Hi'+' '+ message);
		};
		
		$scope.emitEvent= function (){
		    $rootScope.$emit('emitEventListener', $scope.emitData);
		 }
	}	
})();