angular.module('cc')
	.factory('countryNeighborsService', [
        '$http','$route', function($http, $route) {

        return function getCountryNeighbors() {
                var url = "http://api.geonames.org/neighboursJSON?username=sanfosr&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess));
               }

        	// var url = "http://api.geonames.org/countryInfoJSON";
        	// var params = {
         //        geonameId: null,
         //        country: null,
        	// 	username: 'sanfosr'
        	// }

        	// return function getCountryNeighbors() {
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