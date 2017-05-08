(function() {
    'use strict';
    
    /* to a set module */
	angular
		.module('myApp',[
			'ngRoute',
			'ngMessages',
			'angularModalService'
		]);
	
	/**
	* @Controller: ParentController
	* @desc: Controller Declaration with "$scope"
	* @Example:Accessing 'Ctrl' variable
	* $rootscope
	* |_$scope
	*   |_Ctrl ------()
	*/
	/* to a get module */
	angular
		.module('myApp')
	    .controller('ParentController', ParentController);

	function ParentController($scope, $routeParams, $route, $rootScope, $timeout, ModalService) { 
		var scopeCtrl;
    
    /**
    * @desc:Dynamic Css variable
    */
        $scope.ctrl = "parentCtrl"; 
        $scope.names = "myCtrl";
		$scope.parentName = "Hii parentCtrl";
		$scope.controlElement = "Hiii directive";
		$scope.movie = "Ice Age";
	    $scope.rating = 5;
	    $scope.elementDir ="Hii Ctrl";
	    $scope.ctrlRole ="Hii Ctrl";
	/**
    * @desc:$routeParams 
    */
	    $scope.orderID = $routeParams.orderId;
	    $scope.orderActive = $routeParams.orderId ? true: false;
	    //This is useful when we are using same Ctrl for different Htmls in routing
	    $scope.companyName = $route.current.laptopCompany;
	    $scope.ngTemplate = $route.current.ngtemplate;
	/**
    * @desc:modal popup open function 
    */    
	    $scope.loginPage = function() {
	        ModalService.showModal({
	            templateUrl: '../views/login.html',
	            controller: "ModalController"
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	                $scope.message = "You said " + result;
	            });
	        });
	    };
	    
	/**
    * @desc:EventListners
    */   
	    $scope.data ="I am BroadcastEvent"
		$scope.broadcastEvent= function (){
		   $rootScope.$broadcast('greeting', $scope.data);
		};
		//$scope.$on not works incase of $emit
		$rootScope.$on('emitEventListener', listenEmitEvent)
		function listenEmitEvent($event, message){
	    	alert("Hi" +" "+ message);
		};

	    $scope.students = [
			{name: 'Mark Waugh', city:'New York'},
			{name: 'Steve Jonathan', city:'London'},
			{name: 'John Marcus', city:'Paris'}
		];
	    
	    $scope.directcall = function(Name) {
	        console.log("Movie : " + Name);
	    };

	    $scope.display = function(Name) {
	        console.log("Movie : " + Name);
	    };

	    $scope.ctrlfunction = function(names){
	    	console.log(names);
	    };
	

	    /**
	    * @desc:different function definitions
	    */ 
	    function type1(){
	    	$scope.type1 =" i am type1";
	    }
	    var type2 = function (){
	    	$scope.type2 =" i am type2";
	    }
	    $scope.functionTypes =  function() {
	        type1();
	        type2();
	    };
	    
	    /**
	    * @desc:$watch events
	    */ 

	    $scope.users =[
	    	{name:'sushma', rank:1},
	    	{name:'sasi', rank:2},
	    	{name:'subhashini', rank:20}

	    ];
	    var newUsersArray =[];
	    var newUsersObj ={};
	    
	    //By reference(i will change only for whole array change)
     	//$scope.users = newUsersArray; // i will watch the change
     	//$scope.users.push(newUsersObj); // i won't watch the change(because it is element change)
     	//$scope.users[0].name = 'Honey'; // i won't watch the change(because it is property change)
	    $scope.$watch('users', function (newVal, oldVal) {
	    	console.log("value changed:"+ newVal);
	    }); 
	    
	     //By collection items(i will change only for whole array or object change)
	     //$scope.users = newUsersArray; // i will watch the change
	     //$scope.users.push(newUsersObj); // i will watch the change
	     //$scope.users[0].name = 'Honey'; // i won't watch the change(because it is property change)
	    $scope.$watchCollection('users', function (newVal, oldVal) {
	    	console.log("value changed:"+ newVal);
	    });
	    
	    //By value(i will change for all changes)
	    $scope.$watch('movie', function (newVal, oldVal) {
	    	console.log("value changed:"+ newVal);
	    },true); 
		    

	    var executeInTenSeconds = function() {
		    $scope.movie = "timeOut";
		    //$scope.users.push(newUsersObj);
		    //$scope.users[0].name = 'Honey';
		};

        $timeout(executeInTenSeconds, 10000);
        //$timeout(executeInTenSeconds, 2000, false); // $timeout is set to false, $timeout will skip the $rootScope.$apply()

        /**
	    * @desc:$timeout events
	    */ 
        
	    $scope.timeInMs = 0;
  
	    /*var countUp = function() {
	        $scope.timeInMs+= 500;
	        $timeout(countUp, 500);
	    }*/    
	    //$timeout(countUp, 500); 
	    $timeout(function countUp () {
	        $scope.timeInMs+= 500;
	        $timeout(countUp, 500);
	    }, 500);    
	    
	    
	    $scope.timeInMs_old = 0;
	  
	    var countUp_old = function() {
	        $scope.timeInMs_old+= 500;        
	        setTimeout(function () {
	        $scope.$apply(countUp_old);
	    }, 500);
	    }
	        
	    setTimeout(function () {
	        $scope.$apply(countUp_old);
	    }, 500);


	}
	
	angular
		.module('myApp')
	    .controller('ModalController', ModalController);
	
	function ModalController($scope,$rootScope) { 
			$scope.close = function(result) {
	 	close(result, 500); // close, but give 500ms for bootstrap to animate
	 };
	}	
})();