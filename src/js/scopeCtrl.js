(function() {
    'use strict';
    
    /* to a set module */
	angular
		.module('myApp',[
			'ngRoute',
			'ngMessages'
		]);
	
	/* to a get module */
	
	/**
	* @Controller: ParentController && childController
	* @desc: Controller Declaration with "$scope"
	* @Example:Accessing 'Ctrl' variable
	* $rootscope
	* |_$scope
	*   |_Ctrl ------()
	*/
	
	angular
		.module('myApp')
	    .controller('ParentController', ParentController);

	function ParentController($scope,$routeParams,$route,$rootScope) { 
		var scopeCtrl;
    
    /**
    * @desc:Dynamic Css variable
    */
        $scope.Ctrl = "scopeCtrl"; 
		$scope.parentName = "Hii parentCtrl";
		$scope.controlElement = "Hiii directive";
		$scope.movie = "Ice Age";
	    $scope.rating = 5;
	/**
    * @desc:$routeParams 
    */
	    $scope.orderID = $routeParams.orderId;
	    $scope.orderActive = $routeParams.orderId ? true: false;
	    //This is useful when we are using same Ctrl for different Htmls in routing
	    $scope.companyName = $route.current.laptopCompany;
	    $scope.ngTemplate = $route.current.ngtemplate;

	    $scope.data ="I am BroadcastEvent"
		 $scope.broadcastEvent= function (){
		    $rootScope.$broadcast('greeting', $scope.data);
		 }
		//$scope.$on not works 
		$rootScope.$on('emitEventListener', listenEmitEvent)
		function listenEmitEvent($event, message){
	    	alert("Hi" +" "+ message);
		};

	    $scope.students = [
			{name: 'Mark Waugh', city:'New York'},
			{name: 'Steve Jonathan', city:'London'},
			{name: 'John Marcus', city:'Paris'}
		];
	    
	    /*$scope.display = function(movieName) {
	        alert("Movie : " + movieName);
	    };*/
	    
	    $scope.$watch('movie', function (newVal, oldVal) {
	    	//alert("value changed:"+ newVal);
	    	console.log(newVal);
	    }); 
	}
	
	angular
		.module('myApp')
	    .controller('childController', childController);
	
	function childController($scope,$rootScope) { 
		$scope.childName = "Hi childCtrl";
		
		/*$scope.$on('someEvent', function(event, mass) {
		 	$scope.broadcast= mass;
		});*/
        $scope.emitData ="I am EmitEvent"
		$scope.$on('greeting', listenGreeting)
		$scope.$on('greeting', listenGreeting)
		function listenGreeting($event, message){
	    	alert('Hi'+' '+ message);
		};
		
		$scope.emitEvent= function (){
		    $rootScope.$emit('emitEventListener', $scope.emitData);
		 }
	}	
})();