angular.module('cc')
	
	.config(function($routeProvider){
		$routeProvider.when('/countries/:countryCode', {
			templateUrl: './js/countries/country.html', 
			controller: 'CountryCtrl', 
			resolve:{
					    countryRouteService: function(countryRouteService){
					   		return countryRouteService();
                        },
                        countryNeighbors: function(countryNeighborsService){
                        	return countryNeighborsService();
                        }, 
                        countryCapital: function(countryCapitalService){
                        	return countryCapitalService();
                        }
                    }
		})
	})

	.controller("CountryCtrl", ['$scope', 'countryNeighbors', 'countryCapital', 'countryRouteService',
		function($scope, countryNeighbors, countryCapital, countryRouteService){

		
			$scope.country = countryRouteService.geonames[0];
			$scope.capitalPopulation = countryCapital.geonames[0].population;
			$scope.neighbours = countryNeighbors.geonames;

	}])