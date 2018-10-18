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
            image: "./images/headSki.jpg",
            quantity: 1,
            details: "Get off piste with the Kore 105 and show your"
            +"true colours. The ski is very responsive, with excellent"
            +"damping and precise control. So you stay on top of every"
            +"situation, even on steep or narrow sections. And the Koruba"
            +"wood core makes it extremely light weight. Even with a "
            +"105 mm waist, it's the lightest ski of its type on the "
            +"market. And if there is no powder around, the Kore 105 will "
            +"never let you down on the piste either.",
            //logo:
        },
        {
            id: 1,
            brand: "K2",
            image: "./images/k2skis.png",
            quantity: 1,
            details: "Shane McConkey arguably single-handedly changed the "
            +"direction of the sport of skiing and ski design with his "
            +"devil-may-care attitude and out-of-the-box thinking about "
            +"what a ski can do. His legend lives on in the K2 Pon2oon, a "
            +"full on power powder ski that is designed to do one thing—rip "
            +"deep snow on THE pow day of the year.",
            //logo: 
        },
        {
            id: 2,
            brand: "Salomon",
            image: "./images/salomonSkis.jpg",
            quantity: 1,
            details: "QST 118 is the widest ski in the range, with full twin rocker"
            +"to help you float in the deepest powder. You can also charge with"
            +"confidence with the C/FX 3 layer, a unique reinforcement that"
            +"delivers all the power of metal at a fraction of the weight.",
            //logo: 
        },
        {
            id: 3,
            brand: "Atomic",
            image: "./images/atomicSkis.jpg",
            quantity: 1,
            details: "Pure powder. Pure power. Pure fun. The Atomic Bent Chetler 120"
            +"isn’t a ski for everybody – but for those skiers we do build it for,"
            +"we’re sure there’s no better ski on the market."
            +"The big boss of the new Bent Chetler ski family," 
            +"the 120 is a freshie-friendly wide ride that will have you" 
            +"hunting the steepest line and the deepest pow. HRZN Tech in the" 
            +"tip and tail give you the most in float with 10% more surface area," 
            +"less deflection, and better control in chop. A Light Woodcore build"
            +"from tip to tail shaves 10% off of the ski’s weight while a Full Sidewall"
            +"and Carbon Backbone add strength and stiffness. There’s no skier too skilled" 
            +"for the Bent Chetler 120 – for off-piste, heli-skiing or backcountry adventures," 
            +"it’s going to deliver whatever you demand of it. You’ve never known stoke "
            +"until you’ve sent it on the Bent Chetler 120.",
            //logo: 
        }
    ];
    
    $scope.details = function() {
        console.log("Ski details");
        return $scope.variants[$scope.selectedVariant].details;
    }
    
    $scope.addToCart = function() {
        console.log("Adding to cart")
        if ($scope.inStock()){
            $scope.cart += 1;
            $scope.variants[$scope.selectedVariant].quantity -= 1;
        }
        else {
            window.alert("Cannot Add More");
        }
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