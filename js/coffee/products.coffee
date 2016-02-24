#cfcoptions: {"out":"../"}

app = angular.module 'product',[] 

app.directive 'storeCart', ->
  return{
    restrict: 'E',
    templateUrl: 'store-cart.html'
  }

app.directive 'storeFilters', ->
  return{
    restrict: 'E',
    templateUrl: 'store-filters.html'
  }

app.directive 'productTitle', ->
  return{
    restrict: 'E',
    templateUrl: 'product-title.html'
  }

app.directive 'imgGallery', ->
  return{
    restrict: 'E',
    templateUrl: 'img-gallery.html',
    controller: ->
      @current = 0
      @setCurrentImg = (setImg) ->
        @current = setImg
        return
      return
    controllerAs: 'gallery'
  }

app.directive 'productPanel', ->
  return{
    restrict: 'E',
    templateUrl: 'product-panel.html',
    controller: ->
      @tab = 1
      @selectTab = (setTab) ->
        @tab = setTab
      @isSelected = (checkTab) ->
        @tab is checkTab  
      return
    controllerAs: 'panel'
  }

app.directive 'reviewForm', ->
  return{
    restrict: 'E',
    templateUrl: 'review-form.html',
    controller: ->
      @review = {}
      this.review.createdOn = Date.now()
      @addReview = (product) ->
        product.reviews.push(@review)
        @review = {}
      return
    controllerAs: 'reviewCtrl'
  }