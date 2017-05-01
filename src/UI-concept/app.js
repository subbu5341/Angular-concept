angular
    .module('routerApp', ['ui.router'])
    .config(config)
function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/about');

    $stateProvider
        
    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: 'UI-concept/partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'UI-concept/partial-home-list.html',
        controller: 'listCtrl'
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'UI-concept/partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'UI-concept/table-data.html',
                controller: 'scotchController'
            }
        }
        
    });
}
angular
    .module('routerApp')
    .controller('scotchController', scotchController);
function scotchController($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
}

angular
    .module('routerApp')
    .controller('listCtrl', listCtrl);
function listCtrl($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
}
