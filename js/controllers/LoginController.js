angular.module('app.login',[])

.controller('LoginController',['$scope','$log','$location',function($scope,$log,$location){
    
    $scope.test = 'Hello world';
    $log.log($scope.test);
    
}]);