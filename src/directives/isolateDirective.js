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
		scope.role = "Panda"; 
		scope.directiveElm ="i am from directiveElm";
		scope.display = function(movie) {
            alert("Movie : " + movie);
        };
		attrs.$observe('film', function(value) {
        	element.find('p').text(value)
        })
 		element.append("<strong>"+attrs.film+"</strong>");
        //click on Hii i am ng-message here.
		element.bind('click', function () {
        	//alert('You clicked me!');
        	scope.role = "kungfu Panda";
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
		var directive = {
		        restrict: 'A',
		        //template:'<span>{{element}}</span>',
		        scope: {
		            element: '='
		        },
				 link: linkFun
		    };
		return directive;
	    }
    
    function linkFun (scope, element) {
		scope.element = "Hii i am from Dire-elementdir"; 
		// it will trigger on anyof the elemet click in document
		document.addEventListener("click", function(e){
		    alert(e.target.textContent);
		});
		// it will trigger on anyof the elemet click in directive elements
		element.bind('click', function () {
        	//alert('You clicked me!');
        	scope.element = " Hi click element from directive";
    	});
    }
})();	