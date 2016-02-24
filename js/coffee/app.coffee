#cfcoptions: {"out":"../"}

app = angular.module 'store',['product']

app.controller 'StoreController', [
  '$http',
  ($http) ->
  
    store = @
    
    priceFilter = '-price'
    priceFilterButton = true
    showCart = false
    total = 0
    
    store.products = []
    store.cart = []
    
    # Read products info from JSON
    $http.get('./json/store-products.json')
      .success (data) ->
        store.products = data
        return
      .error ->
        console.log "ERROR"
        return
      
    # Cart manage
    @addToCart = (product) ->
      @showCart = true
      store.cart.push(product)
      $('html, body').animate({
          scrollTop: $("#ini").offset().top
      }, 500);
      total = total + product.price
      @totalCart = total
    @deleteToCart = (product) ->
      store.cart.splice(store.cart.indexOf(product),1)
      if store.cart.length is 0
        @showCart = false
      total = total - product.price
      @totalCart = total
      
    # To sort products by price
    @priceFilter = ->
      priceFilter
    @setPriceFilter = (filter) ->
      priceFilter = filter
      return
    
    # To show the correct price filter button
    @show = ->
      priceFilterButton
    @showChange = ->
      priceFilterButton =! priceFilterButton
      return
    
    return
]