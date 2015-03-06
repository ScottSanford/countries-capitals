angular.module('cc')
	
	.config(function($routeProvider){
		$routeProvider.when('/countries', {
			templateUrl: './js/countries/country.html', 
			controller: 'CountryCtrl'
		})
	})

	.controller("CountryCtrl", [$scope, countryRepo, function($scope, countryRepo){
		
		countryRepository.getCountryList()
                .then(function(result) {
                    $scope.countries = result.geonames;
                });
		
	}])