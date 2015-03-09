angular.module('cc')
	
	.constant('COUNTRYURL', '/countries/{{ code }}')
	
	.config(function($routeProvider){
		$routeProvider.when('/countries', {
			templateUrl: './js/countries/countries.html', 
			controller: 'CountriesCtrl', 
			resolve:{
					    countryData: function(countryDataService){
					    				return countryDataService();
					    			}
					}
		})
	})

	.controller("CountriesCtrl", ['$scope', '$location', '$interpolate', 'countryData', 'COUNTRYURL',
		function($scope, $location, $interpolate, countryData, COUNTRYURL){

        $scope.countryList = countryData;

		$scope.goToCountry = function(countryCode){
            $location.path(
                $interpolate(COUNTRYURL)({ code: countryCode })
            );
        };
	
	}])