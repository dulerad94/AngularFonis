angular.module('app.route', [])

.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    
    .when('/login',{
        templateUrl: 'views/login.html',
        controller:'LoginController'
    })
    
    .when('/profile',{
        templateUrl: 'views/profile.html',
        controller:'ProfileController'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);