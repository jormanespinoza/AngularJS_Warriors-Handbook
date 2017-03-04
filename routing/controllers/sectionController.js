routingApp.controller('storeController', function ($scope, $routeParams) {		
	$scope.message = 'This is a variable stored inside the controller'
	$scope.title = 'Laptops Catalogue'
	$scope.currentBrand = $routeParams.brand
})