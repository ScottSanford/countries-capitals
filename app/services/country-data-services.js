angular.module('cc', [])
	.factory('countryRepo', [
        '$http', '$route', function($http, $route) {

        	var url = "http://api.geonames.org/countryInfo?username=sanfosr";
       		var request = {	
       		 		username: 'sanfosr' 
					}

			$http({
				method: 'JSONP', 
				url: url, 
				params: request
			})


        // 	.factory('gateway', function($http){
        //     return function(url, params){
        //         params = angular.extend({
        //                 formatted: true,
        //                 username: 'sanfosr'
        //             }, params || {});
        //         return $http({
        //             method: 'GET',
        //             cache: true,
        //             params: params,
        //             url: url
        //         }).error(function(){
        //             console.log('error', arguments);
        //         });
        //     }
        // });

    }]);