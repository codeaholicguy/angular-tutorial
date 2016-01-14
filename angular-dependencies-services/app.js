/**
 * Created by hoangnn on 29/10/2015.
 */
(function () {

    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;

        store.products = [];

        $http.get('/products.json').success(function(data){
           console.log(data)
        });
    }]);

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
        };
    });

})();