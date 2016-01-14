/**
 * Created by hoangnn on 14/01/2016.
 */
(function() {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productGalery', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-galery.html'
        };
    });

    app.directive('productBuyButton', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-buy-button.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 'description';

                this.setTab = function (tab) {
                    this.tab = tab;
                };

                this.isSelected = function (tab) {
                    return this.tab === tab;
                }
            },
            controllerAs: 'panel'
        };
    });

})();