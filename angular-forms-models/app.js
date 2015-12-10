/**
 * Created by hoangnn on 29/10/2015.
 */
(function () {

    var app = angular.module('Store', []);

    app.controller('StoreController', function () {
        this.products = products;
    });

    app.controller('PanelController', function () {
        this.tab = 'description';

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSelected = function (tab) {
            return this.tab === tab;
        }
    });

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
        };
    });

    var products = [
        {
            name: 'Apple iPad Air 2 Wifi/4G 16G',
            price: 499,
            description: 'Một bước ngoặt trong thiết kế của Apple  vừa tinh tế, vừa sang trọng và thời thượng và những cải tiến đáng giá. Apple iPad Air 2 ra mắt là chiếc máy tính bảng 9.7 inch mỏng và nhẹ nhất hiện nay',
            inStock: true,
            images: [
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                },
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "hoangn@codeaholicguy.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "bob@hater.com"
                }
            ]
        },
        {
            name: 'Apple iPad Air 2 Wifi/4G 64G',
            price: 599,
            description: 'Một bước ngoặt trong thiết kế của Apple  vừa tinh tế, vừa sang trọng và thời thượng và những cải tiến đáng giá. Apple iPad Air 2 ra mắt là chiếc máy tính bảng 9.7 inch mỏng và nhẹ nhất hiện nay',
            inStock: true,
            images: [
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                },
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                }
            ]
        },
        {
            name: 'Apple iPad Air 2 Wifi/4G 128G',
            price: 699,
            description: 'Một bước ngoặt trong thiết kế của Apple  vừa tinh tế, vừa sang trọng và thời thượng và những cải tiến đáng giá. Apple iPad Air 2 ra mắt là chiếc máy tính bảng 9.7 inch mỏng và nhẹ nhất hiện nay',
            inStock: true,
            images: [
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                },
                {
                    full: "images/ipad.png",
                    thumb: "images/ipad.png"
                }
            ]
        }
    ]

})();