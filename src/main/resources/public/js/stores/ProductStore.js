var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ProductConstants = require('../constants/ProductConstants');
var $ = require('jquery');

var CHANGE_EVENT = 'change';

var _products = [];
var _filteredProducts = [];
var _product = null;

function fetchProducts() {
  $.get( 'api/products', function(products) {
    _products = products;
    _filteredProducts = products;
    ProductStore.emitChange();
  });
}

function fetchProductById(id) {
  $.get( 'api/products/'+id, function(product) {
    _product = product;
    ProductStore.emitChange();
  });
}

function filterProducts(filterText) {
  if (filterText == '') {
    _filteredProducts = _products;
  } else {
    _filteredProducts = [];
    for (var i = 0; i < _products.length; i++) {
      var name = _products[i].name.toLowerCase();
      if (name.indexOf(filterText) !== -1) {
        _filteredProducts.push(_products[i]);
      }
    }
  }
}

var ProductStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _filteredProducts;
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

    case ProductConstants.PRODUCTS_FILTER:
      filterProducts(action.filterText);
      ProductStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = ProductStore;