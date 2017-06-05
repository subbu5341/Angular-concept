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

		/**
	    * @desc:css function concepts
	    */
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
		/**
	    * @desc:map method
	    */
	    var numbers = [4, 9, 16, 25];
	    var mapArray = numbers.map(Math.sqrt);
	    // String Interpolation
	    alert(`mapArray ${mapArray}`)
		/**
	    * @desc:Event Listener functionality
	    */
		$scope.emitData ="I am EmitEvent"
		$rootScope.$on('greeting', listenGreeting)
		
		function listenGreeting($event, message){
	    	alert('Hi'+' '+ message);
		};
		
		$scope.emitEvent= function (){
		    $rootScope.$emit('emitEventListener', $scope.emitData);
		}

		/**
	    * @desc:call and apply an bind methods
	    */
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

		function passed(){
		  var args = Array.prototype.slice.call(arguments);
		  return args.indexOf(2) != -1;
		}
        
        passed(5,3,1,2);
        //bind example

       
		var monica = {
		  name: 'Monica Geller',
		  total: 400,
		  deductMontlyFee: function(fee){
		     this.total = this.total - fee;
		     return this.name + ' remaining balance is '+ this.total; 
		  }
		}

		var rachel = {name: 'Rachel Green', total: 1500};
		var bindVariable =monica.deductMontlyFee;
		//bindVariable();
		var rachelFeeDeductor = bindVariable.bind(rachel, 200);
		rachelFeeDeductor(); //"Rachel Green remaining balance is 1300"
		rachelFeeDeductor(); //"Rachel Green remaining balance is 1100"
		alert("Hi i am from" + rachelFeeDeductor());
        //check this example in console
		/* this.x = 9;    // this refers to global "window" object here in the browser
		var module = {
		  x: 81,
		  getX: function() { return this.x; }
		};

		module.getX(); // 81

		var retrieveX = module.getX;
		retrieveX();   
		// returns 9 - The function gets invoked at the global scope

		// Create a new function with 'this' bound to module
		// New programmers might confuse the
		// global var x with module's property x
		var boundGetX = retrieveX.bind(module);
		boundGetX(); // 81
		alert("Hi i am from" + boundGetX());*/
		
		/**
	    * @desc:prototype concept functions
	    */ 
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
			
			// best approach	
			  var newArr = [];
			  var obj = {};
			  for(var i=0;i<this.length;i++){
			  	 if(!obj[this[i]]){     	
			        newArr.push(this[i]);
			        obj[this[i]] = true;
			     }
			  }
			   return newArr; 	
			   
		   	//my approach
		   		/*var count = 0;
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
				return this;*/
			}
			var a = ['red', 'green', 'red','blue','green'];
			var b = a.inArray();
		    alert(b);
		}	    	  
	}

    /**
    * @desc:private and public properties and methods example(Encapsulation)
    */ 
	
	// Person Module
	var Person = function ( name ) {
	    
	    // Private variables and functions that only
	    // ..other private or public functions may access
	    // ..and cannot be accessed outside this Module
	    var age       = 0,
	        maxAge    = 30,
	        maxWeight = 80,
	        isAlive   = true,
	        weight    = 20,
	        name      = name || 'Un-named';
	    
	    var growOld = function () { 
	        if ( age++ >= maxAge ) {
	            die();
	        }
	    }
	    var gainWeight = function () { 
	        weight++;
	        if ( weight >= maxWeight ) {
	            die();
	        }
	    }

	    var loseWeight = function () { 
	        weight--;
	        if ( weight <= 0 ) {
	            die();
	        }
	    } 

	    var die = function () { isAlive = false; }
	    

	    // All the properties and methods contained by 
	    // ..this object being returned will be public
	    // ..and will be accessible in the global scope.
	    return {
	        speak : function () { 
	            if ( !isAlive ) {
	                alert('Dead man can\'t speak.');
	                return;
	            }

	            alert('Speaking...');
	            growOld(); 
	        },

	        walk : function () { 
	            if( !isAlive ) {
	                alert('Dead man can\'t walk');
	                return;
	            }

	            alert('Walking'); 
	            growOld(); 
	            loseWeight(); 
	        },

	        eat : function () {
	            if (!isAlive ) {
	                alert('Dead man can\'t eat');
	            }
	            gainWeight(); 
	        }
	    }
	}();

	/**
    * @desc:closures concept
    */
	for(var i=0;i<4;i++){
		(function(val){
			setTimeout(function(){
				console.log('From closures' + val);
			},1000)
		})(i);
	}
	// this one also do the same
	for(let i=0;i<4;i++){
		setTimeout(function(){
			console.log('From closures' + val);
		},1000)
	}
	/**
    * @desc:different way of calling function
    */ 
	Person;	


	/**
    * @desc:callback and promises
    */ 
	
	//predefined callback
	a("Hello world", b);

	//custom callback
	a("Hello world", function(s) {
		console.log(s + ", how are you?");
	});


	function a(s, callback) {
		callback(s);
	}

	function b(s) {
		console.log(s + "!!!");
	}


	function getResult(getr){
	   setTimeout(function(){ getr(10000) },5000);
	}
	getResult(function (result) {
	  alert("From callback "+ result);
	});

	let cleanRoom = function() {
		return new Promise(function(resolve, reject) {
			resolve('Cleaned the room')
		});
	}
	
	let removeGarbage = function(message) {
		return new Promise(function(resolve, reject) {
			resolve(message + 'remove garbage')
		});
	}
	let winIceCream = function(message) {
		return new Promise(function(resolve, reject) {
			resolve(message + 'win ice cream')
		});
	}
	
	// Execute one after another
	/*cleanRoom().then(function(result) {
		return removeGarbage(result);
	}).then(function(result) {
		return winIceCream(result)
	}).then(function(result) {
		alert('finished' + result);
	})*/
	
	// Do something after complition of all callbacks
	Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
		console.log('all finished');
	})

	// Do something after complition of anyone callback(Ex:3 servers have same data for redundency it)
	/*Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
		console.log('all finished');
	})*/
})();