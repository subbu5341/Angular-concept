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
		return {
	        restrict: "E",
	  		scope: {
	            movie: '=film',
	            rating: '@',
	            display: '&'
	        },
	        
			//templateUrl: '../views/my-isolated-scope.html',
			template: "<div>Movie title : {{movie}}</div>"+
	        "Type a new movie title : <input type='text' ng-model='movie' />"+
	        "<div>Movie rating : {{rating}}</div>"+
	        "Rate the movie : <input type='text' ng-model='rating' />"+
	        "<div><button ng-click='display({movieName:movie})'>View Movie</button></div>",
			/*link: function(scope, element, attrs) {
	            scope.movie = "Panda"; 
				scope.display = function(movieName) {
		            alert("Movie : " + movieName);
		        };
				element.bind('click', function () {
                	element.html('You clicked me!');
            	});
	            element.bind('mouseenter', function () {
	                element.css('background-color', 'yellow');
	            });
	            element.bind('mouseleave', function () {
	                element.css('background-color', 'white');
	            }); 
		    }*/
		};
	}.