angular.module('app')
	.controller('mainCtrl', ['$scope', 'dataFactory', function($scope, dataFactory){


		

		





		$scope.shalizi = "46,000";



		$scope.dataFactory = dataFactory.get();
		$scope.dataFactory
		.then(function(data){
			console.log(data);
			$scope.car1 = data.car1[0];
			$scope.car2 = data.car2[0];
			$scope.car3 = data.car3[0];
		

		
			console.log($scope.car1.make);
			console.log($scope.car1.price);

			$scope.modal = function(id, notes){

				$scope.modalId = id;
				$scope.notes = notes;
				console.log(id.notes + "this is id.notes");
				$scope.main = "edris/" + id + "/images/main.jpg";
				$scope.pic1 = "edris/" + id + "/images/pic1.jpg";
				$scope.pic2 = "edris/" + id + "/images/pic2.jpg";
				$scope.pic3 = "edris/" + id + "/images/pic3.jpg";
				$scope.pic4 = "edris/" + id + "/images/pic4.jpg";
			
			};

		}, function(error){
			console.log('an error occurred in mainCtrl' + error);
		});
		

		



	}]);