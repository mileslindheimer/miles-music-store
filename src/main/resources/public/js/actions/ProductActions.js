var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/ProductConstants');

var ProductActions = {

  getAll: function() {
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCTS_GET_ALL,
    });
  },

  getById: function(id) {
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCTS_GET_BY_ID,
      id: id
    });
  }

};

module.exports = ProductActions;
