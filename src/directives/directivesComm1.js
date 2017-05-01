(function() {
    'use strict';
  angular
    .module('myApp')
    .directive('tabs', tabs);
  function tabs() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      controller: function () {
        this.tabs = [];
        this.addTab = function addTab(tab) {
          this.tabs.push(tab);
        };
        this.selectTab = function selectTab(index) {
          for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].selected = false;
          }
          this.tabs[index].selected = true;
        };
      },
      controllerAs: 'tabs',
     /* template: "
        <div class="tabs">
          <ul class="tabs__list">
            <li ng-repeat="tab in tabs.tabs">
              <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
            </li>
          </ul>
          <div class="tabs__content" ng-transclude></div>
        </div>"
      */
    };
  }

  angular
    .module('myApp')
    .directive('tab', tab)
  function tab() {
    return {
      restrict: 'E',
      scope: {
        label: '@'
      },
      require: '^tabs',
      transclude: true,
     /* template: "
        <div class="tabs__content" ng-if="tab.selected">
          <div ng-transclude></div>
        </div>
      ",*/
      link: function ($scope, $element, $attrs, $ctrl) {
        $scope.tab = {
          label: $scope.label,
          selected: false
        };
        $ctrl.addTab($scope.tab);
      }
    };
  }
})(); 