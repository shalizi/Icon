var app = angular.module('app')
	.factory('dataFactory', ['$http', '$q', function($http, $q){

		
		return{

			get: function(){
				var q = $q.defer();

				$http.get('edris/edris.json')
					.success(function(data){
						q.resolve(data);

					}).error(function(error){
						console.log('failed to resolve edris.info in dataFactory');
						q.reject();

					});

					return q.promise;
						
				}


		};

	}]);
	

