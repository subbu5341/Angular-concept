(function() {
    'use strict';
    angular
		.module('myApp')
	    .controller('childController', childController);
	
	function childController($scope, $rootScope, $location, $window) { 
		$scope.childName = "Hi childCtrl";
		$scope.myUrl = $location.absUrl();
		$scope.arrayName = 'red';
		
		$scope.gitRepoLink = function (){
			$window.location.href ="https://github.com/subbu5341";
		}

		$scope.homeRoute = function (){
			$location.path('/parentCtrl');
		}
		
		//Event Listener functionality
		$scope.emitData ="I am EmitEvent"
		$rootScope.$on('greeting', listenGreeting)
		
		function listenGreeting($event, message){
	    	alert('Hi'+' '+ message);
		};
		
		$scope.emitEvent= function (){
		    $rootScope.$emit('emitEventListener', $scope.emitData);
		}

		//call and apply methods
		var person1 = {name: 'Marvin', age: 42, size: '2xM'};
		var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};
		var args = ['ram','subbu'];
		var sayHello = function(){
		    console.log('Hello, ' + this.name);
		};
		var sayGoodbye = function(greeting1,greeting2){
		    console.log(greeting1 + this.name + greeting2);
		};

		sayHello.call(person1);
		sayHello.call(person2);
		sayGoodbye.call(person1,'Hiiiii');
		sayGoodbye.apply(person1,args);

		$scope.getClass = function(keyVal) {
		    var theClass;
		    //var myArray ={class1: 'red', class2: 'yellow'};
		    var myArray = ['red','salary','emp'];
		    angular.forEach(myArray, function(value, key) {
		        if(value === keyVal) {
		            theClass = value;
		        }
		    });
		    return theClass;
		}

		$scope.checkArray= function(arrayName){
			Array.prototype.inArray = function(needle) {
				for (var i = 0, len = this.length; i < len; i++) {
				 if (this[i] === needle) {
				 	return true;
				 }
				}
				return false;
			}
			var a = ['red', 'green', 'blue'];
			$scope.arrayName = arrayName;
		    var b = a.inArray($scope.arrayName);
		    alert(b);
		}
		
		$scope.removeDuplicates= function(){
			Array.prototype.inArray = function() {
			    	var count = 0;
			    	//var array =[];
					for (var i = 0, len = this.length; i < len; i++) {
						count = 0;
						for (var j = 0, len = this.length; j < len; j++) {
							if (this[i] == this[j] ) {
							 	count++;
							 	if(count == 2){
							 		this.splice(i,1);
							 		count =0;
							 		//console.log(array)
							 	}
						    }	
					    }
					}
					return this;
				}
				var a = ['red', 'green', 'red','blue','green'];
				var b = a.inArray();
			    alert(b);
		}	    	  
	}	
})();