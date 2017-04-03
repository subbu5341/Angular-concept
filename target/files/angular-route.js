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
		  .when('/johnHtml', {
		    templateUrl: 'templates/john_app.html',
		   	controller: 'ParentController'
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
	}		.