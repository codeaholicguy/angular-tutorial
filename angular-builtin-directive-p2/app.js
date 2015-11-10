/**
 * Created by hoangnn on 29/10/2015.
 */
(function () {

    var app = angular.module('Store', []);

    app.controller('StoreController', function () {
        this.products = products;
    });

    var products = [
        {
            name: 'Apple iPad Air 2 64G',
            price: 499,
            description: 'Apple iPad Air 2 ra mắt là chiếc máy tính bảng 9.7 inch mỏng và nhẹ nhất hiện nay',
            inStock: true
        },
        {
            name: 'Apple iPhone 6s',
            price: 599,
            description: 'Một bước ngoặt trong thiết kế của Apple  vừa tinh tế, vừa sang trọng và thời thượng và những cải tiến đáng giá',
            inStock: false
        },
        {
            name: 'Apple iPhone 6s Plus',
            price: 699,
            description: 'Một bước ngoặt trong thiết kế của Apple  vừa tinh tế, vừa sang trọng và thời thượng và những cải tiến đáng giá',
            inStock: true
        }
    ]

})();