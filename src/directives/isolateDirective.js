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
	            movie: '=film',
	            rating: '@rate',
	            students:'@',
	            display: '&',
				ctrlfunction: '&callback',
				ctrl: '='
	        },
			transclude: true, // for Showing both templates(Html+Directive templates)
	        //controller: ExampleController,
	        //controllerAs: 'vm',
	        link: linkFunc
	        //bindToController: true
	    };

	return directive;
    }
    
    function linkFunc (scope, element, attrs, ctrl) {
		console.log(ctrl);
            scope.movie = "Panda"; 
		scope.directiveElm ="i am from directiveElm"
		scope.display = function(movieName) {
            alert("Movie : " + movieName);
        };
		attrs.$observe('film', function(value) {
        	element.find('p').text(value)
        })
 		element.append("<strong>"+attrs.film+"</strong>");

		angular.element('p').eq(12).bind('click', function () {
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
})();	