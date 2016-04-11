angular.module("app")
    .controller("productsCtrl", function($scope, $stateParams, productService) {


        if ($stateParams.id === "shoes") {
            var x = productService.shoeData;
            for(var i = 0; i < x.length; i++) {
                if (x[i].type === "Nike") {
                    x[i].img = "http://www.wrestlinggear.com/images/small_2015-11-11_1447264814nike-speedsweep-wrestling-shoes-midnight-navy-white-university-red-brand.jpg";
                }
                if (x[i].type === "Reebok") {
                    x[i].img = "http://www.roguefitness.com/media/catalog/product/cache/1/thumbnail/125x/9df78eab33525d08d6e5fb8d27136e95/m/4/m43437-nano-4.0-blue-chartreuse-th_1.jpg";
                }
                if (x[i].type === "Adidas") {
                    x[i].img = "https://content.adidas.co.in/static/Product-M25317/Mens_Superstar_shoes_MMens_Superstar_shoes_M25317_4.jpg.thumb";
                }
                if (x[i].type === "Puma") {
                    x[i].img = "http://dealsofthedayindia.com/image/cache/data/122015/Puma-Men-Black---Green-Atom-Fashion-DP-Casual-Shoes-125x125.jpg";
                }
            }
            $scope.productData = productService.shoeData;
        }

        if ($stateParams.id === "socks") {
            var x = productService.sockData;
            for (var i = 0; i < x.length; i++) {
                if (x[i].type === "Stance") {
                    x[i].img = "http://images.nitrosell.com/product_images/18/4475/thumb-sta_phase_red.jpg";
                }
                if (x[i].type === "Nike") {
                    x[i].img = "http://www.wigglestatic.com/product-media/5360105271/Nike-Elite-Run-Lightweight-Quarter-FA15-Running-Socks-White-Wolf-Grey-Q3-15-SX4953-131-9.jpg?w=125&h=125&a=7";
                }
                if (x[i].type === "Reebok") {
                    x[i].img = "http://www.geekalerts.com/u/Green-Beer-Socks-125x125.jpg";
                }
            }
            $scope.productData = productService.sockData;
        }

});
