angular.module('cc')
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './js/intro/intro.html',
            controller: 'IntroCtrl'
        })
    })
    .controller('IntroCtrl', function($scope){

    })
;