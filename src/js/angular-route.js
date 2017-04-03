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
	}		