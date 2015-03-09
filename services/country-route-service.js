angular.module('cc')
	.factory('countryRouteService', [
        '$http', '$route', function($http, $route) {

            return function getCountry() {
                var url = "http://api.geonames.org/countryInfoJSON?username=sanfosr&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess));
            }

            function handleSuccess(result) {
            	return result.data;
            }

    }]);