angular.module('app')
	.controller('dashboardCtrl', ["$scope", function($scope){


		$scope.car1="";

	var inventory = new Firebase("dealership.firebaseIO.com/inventory");
	console.log(inventory);

	var updateAllCars = function(){
	


		};


//downloading data from Firebase
	
	inventory.on('value', function(snapshot){
		//console.log("hello world", snapshot.val().car3.make);
			$scope.inventory = snapshot.val();
		$scope.car1 = snapshot.val().car1;
		$scope.car2 = snapshot.val().car2;
		$scope.car3 = snapshot.val().car3;
		$scope.car4 = snapshot.val().car4;
		$scope.car5 = snapshot.val().car5;
		$scope.car6 = snapshot.val().car6;
		$scope.car7 = snapshot.val().car7;
		$scope.car8 = snapshot.val().car8;
		$scope.car9 = snapshot.val().car9;
		$scope.car10 = snapshot.val().car10;
		$scope.model = $scope.car1.model;

		updateAllCars();

	});


//this modal function is being called from main template

	$scope.modal = function(id, notes){


			$scope.modalId = id;
			$scope.notes = notes;
	
			$scope.main = "edris/" + id + "/images/main.jpg";
			$scope.pic1 = "edris/" + id + "/images/pic1.jpg";
			$scope.pic2 = "edris/" + id + "/images/pic2.jpg";
			$scope.pic3 = "edris/" + id + "/images/pic3.jpg";
			$scope.pic4 = "edris/" + id + "/images/pic4.jpg";
		
		};





//uploading data to Firebase

$scope.test = function(id, data){

	
	if(id === 'car1'){
		console.log(id);
		$scope.car1= new Firebase("dealership.firebaseIO.com/inventory/car1");
		data.id = "car1";
		$scope.car1.set(data);

	}else if(id === 'car2'){
		console.log(id);
		data.id="car2";
		$scope.car2= new Firebase("dealership.firebaseIO.com/inventory/car2");
		$scope.car2.set(data);
	}else if(id === 'car3'){
		console.log(id);
		data.id="car3";
		$scope.car3= new Firebase("dealership.firebaseIO.com/inventory/car3");
		$scope.car3.set(data);
	}else if(id === 'car4'){
		$scope.car4= new Firebase("dealership.firebaseIO.com/inventory/car4");
		console.log(id);
		data.id="car4";
		$scope.car4.set(data);
	
	}else if(id === 'car5'){
		$scope.car5= new Firebase("dealership.firebaseIO.com/inventory/car5");
		console.log(id);
		data.id="car5";
		$scope.car5.set(data);
	
	}else if(id === 'car6'){
		$scope.car6= new Firebase("dealership.firebaseIO.com/inventory/car6");
		console.log(id);
		data.id="car6";
		$scope.car6.set(data);
	
	}else if(id === 'car7'){
		$scope.car7= new Firebase("dealership.firebaseIO.com/inventory/car7");
		console.log(id);
		data.id="car7";
		$scope.car7.set(data);
		
	}else if(id === 'car8'){
		$scope.car8= new Firebase("dealership.firebaseIO.com/inventory/car8");
		console.log(id);
		data.id="car8";
		$scope.car8.set(data);
		
	}else if(id === 'car9'){
		$scope.car9= new Firebase("dealership.firebaseIO.com/inventory/car9");
		console.log(id);
		data.id="car9";
		$scope.car9.set(data);
		
	}else if(id === 'car10'){
		$scope.car10= new Firebase("dealership.firebaseIO.com/inventory/car10");
		console.log(id);
		data.id="car10";
		$scope.car10.set(data);

	}else{
		console.log('did not match');
	}

			
			

		
		
				//$scope.car1.set({"mileage":"100", "make":"toyota"});
				
				//$scope.car3.set({"mileage":"100" , "make":"toyota"});

				
		
			
			
			
			
			
		};

	}]);



