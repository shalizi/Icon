angular.module('app')
	.controller('loanCtrl', ["$scope", function($scope){

		$scope.loanApplication = function(user){
			$scope.message = "We will get back to you " + $scope.user.firstname + ", we safeguard your confidentiality to the highest standards";

			var loanApplication = new Firebase('https://dealership.firebaseio.com/loanApplication');

			loanApplication.push(user);

		};

	}]);