(function() {
    'use strict';
    
    /* to a set module */
	angular.module('myApp',[]);
	
	/* to a get module */
	angular
		.module('myApp')
	    .controller('ParentController', ParentController);

	function ParentController($scope) { 
		/*var vm = this;
		vm.firstName = "Hii john papa ";*/
		$scope.firstName = "i am scope element(Parent)";
		$scope.controlElement = "Hiii directive";
		$scope.movie = "Ice Age";
	    $scope.rating = 5;
	    $scope.display = function(movie) {
	        alert("Movie : " + movie);
	    }

	}
	angular
		.module('myApp')
	    .controller('childController', childController);

	function childController($scope) { 
		/*var vm = this;
		vm.lastName = "Hii john papa child";*/
		$scope.lastName = "i am scope element(Child)"


	}
	angular
		.module('myApp')
	.directive('myIsolatedScope', myIsolatedScope);
	
	function myIsolatedScope() {
	  return {
	    restrict: 'A',
	    scope: {
	    	name:'@'
	    },
	     templateUrl: '../views/my-isolated-scope.html',
	    //template: 'Name: {{name}}'
	  };
	}
	angular
		.module('myApp')
	.directive('movieDirective', movieDirective);
	
	function movieDirective() {
		return {
	        restrict: "E",
	        scope: {
	            movie: '=film',
	            rating: '@',
	            display: '&'
	        },
	        template: "<div>Movie title : {{movie}}</div>"+
	        "Type a new movie title : <input type='text' ng-model='movie' />"+
	        "<div>Movie rating : {{rating}}</div>"+
	        "Rate the movie : <input type='text' ng-model='rating' />"+
	        "<div><button ng-click='display(movie)'>View Movie</button></div>"

	    };
	};	
})();.