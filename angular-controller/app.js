/**
 * Created by hoangnn on 29/10/2015.
 */
(function() {

    var app = angular.module('Store', []);

    app.controller('StoreController', function() {
        this.product = tablet;
    });

    var tablet = {
        name: 'iPad Air 2 64G',
        price: 499,
        description: 'The newest Apple iPad.'
    }

})();