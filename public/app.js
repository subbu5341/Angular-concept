	angular	
		.module('myApp')
		.config(config);
	
	function config ($routeProvider) {
	  $routeProvider
		  .when('/scopeCtrl', {
		    templateUrl: '../views/indexScope.html',
		   	controller: 'ParentController'
		  })
		  /*.when('/thisCtrl', {
		    templateUrl: '../views/indexThis.html',
			controller: 'ParentController',
			controllerAs: 'Parent'
		  })*/
		  .when('/directtemplate', {
		    templateUrl: 'ngTemplate.html',
		   	controller: 'ParentController',
		   	ngtemplate:'Hii I am ngTemplate'
		  })
		  .when('/routeWithParms', {
		    templateUrl: '../views/routeWithParms.html',
		   	controller: 'ParentController',
		   	laptopCompany: 'Samsung'
		  })
		  .when('/routeWithParms', {
		    templateUrl: '../views/routeWithParms.html',
		   	controller: 'ParentController',
		   	laptopCompany: 'Sony'
		  })
		  .when('/showOrder/:orderId', {
		    templateUrl: '../views/routeWithParms.html',
		   	controller: 'ParentController'
		  })	
		  .otherwise({
		    redirectTo: '/'
		  });
	}		;	/**
	* Directive: movieDirective
	* @desc: Directive Declaration in "Normal Controller" ("$scope")
	*/
	angular
		.module('myApp')
		.directive('movieDirective', movieDirective);
	
	function movieDirective() {
	/**
  	 * @desc:scope:false also will work like two-way-binding ('=') 
  	 */
   	 /**
   	 *  @desc:scope:true also will work like one-way-binding ('@') 
   	 */	
		return {
	        restrict: "E",
	  		/*scope: {
	            movie: '=film',
	            rating: '@',
	            display: '&'
	        },*/
			transclude: true,// for Showing both templates(Html+Directive templates)
	        
			//templateUrl: '../views/my-isolated-scope.html',
			template: "<div ng-transclude>Movie title : {{movie}}</div>"+
	        "Type a new movie title : <input type='text' ng-model='movie' />"+
	        "<div>Movie rating : {{rating}}</div>"+
	        "Rate the movie : <input type='text' ng-model='rating' />"+
	        /*"<div><button ng-click='display({movieName:movie})'>View Movie</button></div>"*/
			"<div><button ng-click='display(movie)'>View Movie</button></div>",
			link: function(scope, element, attrs) {
	            scope.movie = "Panda"; 
				scope.display = function(movieName) {
		            alert("Movie : " + movieName);
		        };

				/*element.bind('click', function () {
                	element.html('You clicked me!');
            	});
	            element.bind('mouseenter', function () {
	                element.css('background-color', 'yellow');
	            });
	            element.bind('mouseleave', function () {
	                element.css('background-color', 'white');
	            }); */
		    }
		};
	};(function() {
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
		$scope.firstName = "Hii john papa parent";
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

	    $scope.data ="I am parent"
		 $scope.broadcastEvent= function (){
		    $rootScope.$broadcast('greeting', $scope.data);
		 }
		//$scope.$on not works 
		$rootScope.$on('emitEventListener', listenEmitEvent)
		function listenEmitEvent($event, message){
	    	alert("Hi" + message);
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
		$scope.lastName = "Hii john papa child";
		
		/*$scope.$on('someEvent', function(event, mass) {
		 	$scope.broadcast= mass;
		});*/
        $scope.emitData ="I am Child"
		$scope.$on('greeting', listenGreeting)
		$scope.$on('greeting', listenGreeting)
		function listenGreeting($event, message){
	    	alert("Hi" + message);
		};
		
		$scope.emitEvent= function (){
		    $rootScope.$emit('emitEventListener', $scope.emitData);
		 }
	}	
})();;(function() {
    'use strict';
    
    /* 
    @desc:	To a set module 
    */
	angular.module('myApp',["ngRoute"]);
	
	/** 
	* @desc:To a get module 
	*/
	/**
	* @Controller: ParentController && ParentChildController
	* @desc: Controller Declaration with "this"
    * @Example:Accessing 'Ctrl' variable
	* $rootscope
	* |_$scope
	*   |_Parent
	*     |_Ctrl
	*/	
	
	angular
		.module('myApp')
	    .controller('ParentController', ParentController);

	function ParentController($scope) { 
		
		/**
		* @desc: Here this = $scope.Parent
		*/
		/**
        * @desc:Dynamic Css variable
        */
        /* jshint validthis: true */
		var vm = this;
		vm.Ctrl = "thisCtrl";
		vm.firstName = "Hii john papa ";
		vm.movie = "Ice Age";
	    vm.rating = 5;
	    vm.display = function(movieName) {
	        alert("Movie : " + movieName);
	    };
      	
      	/**
        * @desc:'$watch' Declaration 
        */
      	/*$scope.$watch(angular.bind(this, function () {
	    	return this.movie; 
	    }), function (newVal, oldVal) {
	  		alert("value changed:"+ newVal);
	   	});*/
		 $scope.$watch('Parent.movie', function (newVal, oldVal) {
	    	alert("value changed:"+ newVal);
	    });
		
	}
	angular
		.module('myApp')
	    .controller('ChildController', ChildController);

	function ChildController() { 
		/*
		@desc: Here this = $scope.Child
		*/
		var vm = this;
		vm.lastName = "Hii john papa child";
	}

	/*
	Directive: myIsolatedScope
	@desc: Directive Declaration in "Controller As" ("this")
	*/

	angular
		.module('myApp')
	.directive('myIsolatedScope', myIsolatedScope);
	
	function myIsolatedScope() {
	  return {
	    restrict: 'A',
	    scope: {
	    	 movie: '=film',
	         rating: '@',
	         display: '&'
	    },
	     //templateUrl: '../views/my-isolated-scope.html'
	     template: 
	        "<div>Movie rating : {{rating}}</div>"+
	        "Rate the movie : <input type='text' ng-model='rating' />"+
			"<div>Movie title : {{movie}}</div>"+
	        "Type a new movie title : <input type='text' ng-model='movie' />"+
	        "<div><button ng-click='display({movieName:movie})'>View Movie</button></div>",
	  };
	}
	
})();