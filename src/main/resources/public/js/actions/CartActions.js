var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CartActions = {

  addToCart: function(id, item) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ADD_PRODUCT,
      id: id,
      item: item
    });
  },

  removeFromCart: function(id) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_REMOVE_ITEM,
      id: id
    });
  },

  increment: function(id) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_INCREMENT_ITEM,
      id: id
    });
  },

  decrement: function(id) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_DECREMENT_ITEM,
      id: id
    });
  },

  clear: function() {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_CLEAR
    });
  },

  checkout: function() {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_CHECKOUT
    });
  }

};

module.exports = CartActions;
