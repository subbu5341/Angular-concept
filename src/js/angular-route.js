	angular	
		.module('myApp')
		.config(config)
	
	function config ($routeProvider) {
	  $routeProvider
		  .when('/scopeCtrl', {
		    templateUrl: '../views/indexScope.html',
		   	controller: 'ParentController'
		  })
		  .when('/thisCtrl', {
		    templateUrl: '../views/indexThis.html',
			controller: 'ParentController',
			controllerAs: 'Parent'
		  })
		  .otherwise({
		    redirectTo: '/'
		  });
	};		