angular.module('cc')
	.factory('countryRepo', [
        '$http', function($http) {

        	var url = "http://api.geonames.org/countryInfoJSON";
        	var params = {
        		username: 'sanfosr'
        	}

        	return function getCountryList() {
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