(function() {
    'use strict';
    
    /* to a set module */
	angular.module('myApp',[]);
	
	/* to a get module */
	angular
		.module('myApp')
	    .controller('ParentController', ParentController);

	function ParentController() { 
		var vm = this;
		vm.firstName = "Hii john papa ";

	}
	angular
		.module('myApp')
	    .controller('childController', childController);

	function childController() { 
		var vm = this;
		vm.lastName = "Hii john papa child";

	}
})();.