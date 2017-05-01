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
		  .when('/routeWthAction', {
		    templateUrl: '../views/routeWithAction.html',
		   	controller: 'ParentController'
		  })
		  .when('/parentCtrl', {
		    templateUrl: '../controllers/parent/parent.html',
		   	controller: 'ParentController'
		  })
		   .when('/services', {
		    templateUrl: '../services/services.html',
		   	controller: 'ServicesController'
		  })
		    .when('/DirectivesComm', {
		    templateUrl: '../directives/directivesComm.html',
		   	//controller: 'ServicesController'
		  })
		  .when('/childCtrl', {
		    templateUrl: '../controllers/child/child.html',
		   	controller: 'childController'
		  })	
		  .otherwise({
		    redirectTo: '/'
		  });
	}		