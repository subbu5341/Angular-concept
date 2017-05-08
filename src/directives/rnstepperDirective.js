(function() {
    'use strict';	
	
	angular
		.module('myApp')
		.directive('stepperDirective', stepperDirective);
	
	function stepperDirective() {
	var directive = {
	        restrict: 'EA',
	        template:'maxLimit:<input ng-model="maxlimit"><br><br>'+
	        'minLimit:<input ng-model="minlimit"><br><br>'+
	        '<button ng-click="numIncrease()" ng-disabled="count == maxlimit" class="rnStepper">+</button>'+
	        '<button class="rnStepperBox">{{count}}</button>'+
	        '<button ng-click="numDecrease()" ng-disabled="count == minlimit" class="rnStepper">-</button><br>',
	        scope: {},//directive reusable case we want to use the isolate scope.because isolate scope changes the child scope from instance to instance(This way, the scope for each directive is local only to that directive instance.)
	        //if you want to know clearly comment isolate scope(Ex:scope: {}) and check the directive behaviour in html by changing values
	        link: linkFunc
	        //bindToController: true
	    };

	return directive;
    }
    
    function linkFunc (scope, element, attrs) {
    	scope.count = 0;
    	scope.plus = false;
    	scope.minus = false;
    	scope.maxlimit=10;
    	scope.minlimit=0;
		scope.numIncrease = function() {
			scope.count++;
		};
		scope.numDecrease = function() {
			scope.count--;
		};
	}
})();	