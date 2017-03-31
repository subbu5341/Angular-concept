(function() {
    'use strict';
    
    /* to a set module */
	angular.module('myApp',["ngRoute"]);
	
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

	function ParentController($scope) { 
		var scopeCtrl;
    
    /**
    * @desc:Dynamic Css variable
    */
        $scope.Ctrl = "scopeCtrl"; 
		$scope.firstName = "Hii john papa(Parent)";
		$scope.controlElement = "Hiii directive";
		$scope.movie = "Ice Age";
	    $scope.rating = 5;
	    
	    $scope.display = function(movieName) {
	        alert("Movie : " + movieName);
	    };
	    
	    $scope.$watch('movie', function (newVal, oldVal) {
	    	alert("value changed:"+ newVal);
	    }); 
	};
	
	angular
		.module('myApp')
	    .controller('childController', childController);
	
	function childController($scope) { 
		$scope.lastName = "Hii john papa child";
	};

	
})();