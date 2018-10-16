angular.module('product', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.product = "skis";
    $scope.brand = null; //"HEAD"
    $scope.selectedVariant = 0;
    $scope.onSale = false;
    $scope.details = null; //This is probably the value that you would be changing
    $scope.cart = 0;

    $scope.variants = [
        {
            id: 0,
            brand: "HEAD",
            image: "./images/headSkis.jpg",
            quantity: 1
        }
    ];

    $scope.addToCart = function() {
        console.log("Adding to cart")
        $scope.cart += 1;
        $scope.variants[$scope.selectedVariant].quantity -= 1;
    }

    $scope.image = function() {
        console.log("Looking for image")
        return $scope.variants[$scope.selectedVariant].image;
    }
    $scope.inStock = function() {
        console.log("Got here in stock")
        return $scope.variants[$scope.selectedVariant].quantity > 0;
    }
}