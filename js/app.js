(function() {
  var app;

  app = angular.module('store', ['product']);

  app.controller('StoreController', [
    '$http', function($http) {
      var priceFilter, priceFilterButton, showCart, store, total;
      store = this;
      priceFilter = '-price';
      priceFilterButton = true;
      showCart = false;
      total = 0;
      store.products = [];
      store.cart = [];
      $http.get('./json/store-products.json').success(function(data) {
        store.products = data;
      }).error(function() {
        console.log("ERROR");
      });
      this.addToCart = function(product) {
        this.showCart = true;
        store.cart.push(product);
        $('html, body').animate({
          scrollTop: $("#ini").offset().top
        }, 500);
        total = total + product.price;
        return this.totalCart = total;
      };
      this.deleteToCart = function(product) {
        store.cart.splice(store.cart.indexOf(product), 1);
        if (store.cart.length === 0) {
          this.showCart = false;
        }
        total = total - product.price;
        return this.totalCart = total;
      };
      this.priceFilter = function() {
        return priceFilter;
      };
      this.setPriceFilter = function(filter) {
        priceFilter = filter;
      };
      this.show = function() {
        return priceFilterButton;
      };
      this.showChange = function() {
        priceFilterButton = !priceFilterButton;
      };
    }
  ]);

}).call(this);
