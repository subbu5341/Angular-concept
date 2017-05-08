(function() {
    'use strict';	
	/**
	* Directive: movieDirective
	* @desc: Directive Declaration in "Normal Controller" ("$scope")
	*/
	angular
		.module('myApp')
		.directive('movieDirective', movieDirective);
	
	function movieDirective() {
	/**
  	 * @desc:scope:false also will work like two-way-binding ('=') 
  	 */
   	 /**
   	 *  @desc:scope:true also will work like one-way-binding ('@') 
   	 */	
   	 /**
   	 *  @desc:best way of writing directives code
   	 */
    
	   	var directive = {
	        restrict: 'EA',
	        templateUrl: '../views/my-isolated-scope.html',
	        scope: {
	            movieName: '=film',
				role: '=',
	            rating: '@rate',
	            //students:'@',
	            display: '&',
				ctrlfunction: '&callback'
			},
			transclude: true, // for Showing both templates(Html + Directive templates)
	        //controller: ExampleController,
	        //controllerAs: 'vm',
	        link: linkFunc
	        //bindToController: true
	    };

	return directive;
    }
    
    function linkFunc (scope, element, attrs, ctrl) {
		//scope.role = "Panda"; 
		scope.directiveElm ="i am from directiveElm";
		scope.display = function(movieName) {
            alert("Movie : " + movieName);
        };
		attrs.$observe('film', function(value) {
        	element.find('p').text(value)
        })
 		element.append("<strong>"+attrs.film+"</strong>");
        //click on Hii i am ng-message here.
		angular.element('p').eq(0).bind('click', function () {
        	alert('You clicked me!');
    	});
        
        sayHello();
        function sayHello(){
          return 'Hi'
        }

        /*element.bind('click', function () {
        	element.html('You clicked me!');
    	});
        element.bind('mouseenter', function () {
            element.css('background-color', 'yellow');
        });
        element.bind('mouseleave', function () {
            element.css('background-color', 'white');
        }); */
    }
	
	angular
		.module('myApp')
		.directive('elementDirective', elementDirective);
	function elementDirective() {	
		return {
	      restrict: "A",
	      scope: {
	        elementDir: '='
	      },
	      template:'<span>{{elementDir}}</span>',
		  link: function(scope, element){
	        }
    	}
    }	
	
	/*function elementDirective() {
		var directive = {
		        restrict: 'A',
		        template:'<span>{{elementDir}}</span>',
		        scope: {
		            elementDir: '='
		        },
				 link: linkFunc
		    };
		return directive;
	    }
    
    function linkFunc (scope, element, attrs, ctrl) {
		//scope.elementDir = "Panda"; 
    }*/
})();	