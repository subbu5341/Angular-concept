(function() {
    'use strict';
  angular
    .module('myApp')
    .directive("welcome", welcome);
  function welcome ($rootScope) {
    return {
      restrict: "E",
      scope: {
        rating: '@',
      },
      transclude: true,
      controller: function($scope) {
        var vm = this;
        $scope.words = [];
        console.log(this);
        $scope.valueToPass = 'i have data';

        vm.sayHello = function() {
          $scope.words.push("hello");
          return $scope.rating;
        };

        vm.sayHowdy = function() {
          $scope.words.push("howdy");
        };

        vm.sayHi = function() {
          $scope.words.push("hi");
        };
      },
      //string interpolation from ES-6
      template:`<span ng-transclude></span>
      <p>From Ctrl:<b>{{rating}}</b></p>
      <br>
      <div><button ng-click='eventsCheck(valueToPass)'>eventsCheck</button></div>`,

      link: function(scope, element){
        element.bind("click", function() {
          alert(scope.words);
        });
        scope.dataToPass = 'empty';
        scope.eventsCheck = function (valueToPass) {
          scope.dataToPass = valueToPass;
          $rootScope.$broadcast('someEvent', {
              data: valueToPass
          });
        }
      }
    }
  }
  angular
    .module('myApp')
    .directive("hello", hello); 
  function hello () {
    return {
      require: "welcome",
      link: function (scope, element, attrs, welcomeCtrl) {
        console.log(welcomeCtrl);
        welcomeCtrl.sayHello();
        scope.receivedData = 'none';
        scope.$on('someEvent', function (event, result) {
            scope.receivedData = result.data;
        });
      }
    };
  }
  angular
    .module('myApp')
    .directive("howdy", howdy);
  function howdy () {
    return {
      require: "welcome",
      link: function (scope, element, attrs, welcomeCtrl) {
        welcomeCtrl.sayHowdy();
      }
    };  
  }
  angular
    .module('myApp')
    .directive("hi", hi); 
  function hi() {
    return {
      require: "welcome",
      link: function (scope, element, attrs, welcomeCtrl) {
        welcomeCtrl.sayHi();
      }
    };
 }
})();