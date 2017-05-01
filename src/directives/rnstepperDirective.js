(function() {
    'use strict';	
	
	angular
		.module('myApp')
		.directive('stepperDirective', stepperDirective);
	
	function stepperDirective() {
	var directive = {
	        restrict: 'EA',
	        template:'<button ng-click="numIncrease()" ng-disabled="count == 10" class="rnStepper">+</button>'+
	        '<span ng-transclude></span>'+
	        '<button ng-click="numDecrease()" ng-disabled="count == 0" class="rnStepper">-</button>',
	       /* scope: {
	            num: '=',
	        },*/
			transclude: true, 
			link: linkFunc
	        //bindToController: true
	    };

	return directive;
    }
    
    function linkFunc (scope, element, attrs, ctrl) {
    	scope.count = 0;
    	scope.plus = false;
    	scope.minus = false;
		scope.numIncrease = function() {
			scope.count++;
		};
		scope.numDecrease = function() {
			scope.count--;
		};
	}
})();	