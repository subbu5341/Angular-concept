(function() {
    'use strict';
	angular
		.module('myApp')
		.service('MathService',MathService); 
	function MathService () {
		var vm = this;
	    vm.add = function(a, b) { 
	    	return a + b 
	    };
	    
	    vm.subtract = function(a, b) { 
	    	return a - b 
	    };
	    
	    vm.multiply = function(a, b) { 
	    	return a * b 
	    };
	    
	    vm.divide = function(a, b) { 
	    	return a / b 
	    };
	}

	angular
			.module('myApp')
			.service('CalculatorService',CalculatorService); 
	function CalculatorService (MathService){
	    var vm = this;
	    vm.square = function(a) { 
	    	return MathService.multiply(a,a); 
	    };
	    
	    vm.cube = function(a) { 
	    	return MathService.multiply(a, MathService.multiply(a,a)); 
	    };

	}
})();