(function() {
    'use strict';	
	
	angular
		.module('myApp')
		.directive('stepperDirective', stepperDirective);
	
	function stepperDirective() {
	var directive = {
	        restrict: 'EA',
	        template:'maxLimit:<input ng-model="maxlimit"><br><br>'+
	        'minLimit:<input ng-model="maxlimit"><br><br>'+
	        '<button ng-click="numIncrease()" ng-disabled="count == maxlimit" class="rnStepper">+</button>'+
	        '<button class="rnStepperBox">{{count}}</button>'+
	        '<button ng-click="numDecrease()" ng-disabled="count == minlimit" class="rnStepper">-</button><br>',
	        scope: {},//directive reusable case we want to use the isolate scope.because isolate scope changes the child scope from instance to instance
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