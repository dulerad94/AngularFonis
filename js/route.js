angular.module('app.route',[])

.config(['$routeProvider',function ($routeProvider) {
	$routeProvider

	.when('/login',{
		templateurl: 'views/login.html',
		controller: 'LoginController'
	})

	.when('/profile',{
		templateurl: 'views/profile.html',
		controller: 'ProfileController'
	})

	.otherwise({
		redirectTo:'/login'
	});
}]);