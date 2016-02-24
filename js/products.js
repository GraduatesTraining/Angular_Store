(function() {
  var app;

  app = angular.module('product', []);

  app.directive('storeCart', function() {
    return {
      restrict: 'E',
      templateUrl: 'store-cart.html'
    };
  });

  app.directive('storeFilters', function() {
    return {
      restrict: 'E',
      templateUrl: 'store-filters.html'
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('imgGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'img-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrentImg = function(setImg) {
          this.current = setImg;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panel.html',
      controller: function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
          return this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'review-form.html',
      controller: function() {
        this.review = {};
        this.review.createdOn = Date.now();
        this.addReview = function(product) {
          product.reviews.push(this.review);
          return this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

}).call(this);
