angular.module('cc')
	.factory('countryDataService', [
        '$http', function($http) {

        	var url = "http://api.geonames.org/countryInfoJSON";
        	var params = {
                country: null,
                lang: null,
        		username: 'sanfosr'
        	}

        	return function getCountryData() {
                var request = $http.get(url, { 
                	cache: true, 
                	params: params
                });
                return request.then(handleSuccess);
            };

            function handleSuccess(result) {
            	return result.data.geonames;
            }

    }]);