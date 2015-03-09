angular.module('cc')
	.factory('countryCapitalService', [
        '$http', '$route', function($http, $route) {

        return function getCountryCapital() {
                    var url = "http://api.geonames.org/searchJSON?formatted=true&username=sanfosr&q=capital&&style=full&country=" + $route.current.params.countryCode;
                    var request = $http.get(url);
                    return (request.then(handleSuccess));
                }

        	// var url = "http://api.geonames.org/countryInfoJSON";
        	// var params = {
         //        formatted: true,
         //        q: 'capital',
         //        style: 'full',
        	// 	username: 'sanfosr', 
         //        country: $route.current.params.countryCode
        	// }

        	// return function getCountryCapital() {
         //        var request = $http.get(url, { 
         //        	cache: true, 
         //        	params: params
         //        });
         //        return request.then(handleSuccess);
         //    };

            function handleSuccess(result) {
            	return result.data;
            }

    }]);