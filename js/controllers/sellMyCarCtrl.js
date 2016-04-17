angular.module('app')
	.controller('sellMyCarCtrl', ["$scope", function($scope){

		$scope.feedback = function(user){
			$scope.message = "We look forward seeing you " + $scope.user.firstname;

			var appointment = new Firebase('https://dealership.firebaseio.com/appointment');

			appointment.push(user);

		};

	}]);