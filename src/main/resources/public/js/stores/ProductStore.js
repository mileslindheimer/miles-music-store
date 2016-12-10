var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ProductConstants = require('../constants/ProductConstants');
var $ = require('jquery');

var CHANGE_EVENT = 'change';

var _products = [];
var _product = {};

function fetchProducts() {
  $.get( 'api/products', function(products) {
    _products = products;
    ProductStore.emitChange();
  });
}

function fetchProductById(id) {
  $.get( 'api/products/'+id, function(product) {
    _product = product;
    ProductStore.emitChange();
  });
}

var ProductStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _products;
  },

  getProductDetail: function() {
    return _product;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case ProductConstants.PRODUCTS_GET_ALL:
      fetchProducts();
      break;

    case ProductConstants.PRODUCTS_GET_BY_ID:
      fetchProductById(action.id);
      break;

    default:
      // do nothing
  }
});

module.exports = ProductStore;