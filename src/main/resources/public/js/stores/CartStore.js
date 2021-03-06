var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var assign = require('object-assign');
var $ = require('jquery');

var CHANGE_EVENT = 'change';

var _items = {};
var _itemCounts = {};
var total = 0;
var totalItemCount = 0;
var _orderInfo = null;

function add(id, item) {
	if (_items[id] == null) {
		_items[id] = item;
		_itemCounts[id] = 1;
	} else {
		_itemCounts[id] = _itemCounts[id] + 1;
	}
	total += item.price;
	totalItemCount++;
}

function remove(id) {
  total -= _items[id].price * _itemCounts[id];
  totalItemCount -= _itemCounts[id];
  delete _items[id];
  delete _itemCounts[id];
}

function decrement(id) {
	total -= _items[id].price
	totalItemCount--;
	_itemCounts[id]--;
	if (_itemCounts[id] == 0) {
		delete _items[id];
		delete _itemCounts[id];
	}
}

function clear() {
  _items = {};
  _itemCounts = {};
  total = 0;
  totalItemCount = 0;
}

function checkout() {
  var cart = {cartItems: []}
  for (var id in _items) {
    cart.cartItems.push({product: _items[id], count: _itemCounts[id]});
  }
  $.ajax({
    type: 'POST',
    url: '/api/cart',
    data: JSON.stringify(cart), 
    contentType: 'application/json',
    success: function(orderInfo) {
      clear();
      _orderInfo = orderInfo;
      CartStore.emitChange();
    }
  });
}

var CartStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
    return _items;
  },

  getItemCounts: function() {
  	return _itemCounts;
  },

  getTotal: function() {
  	return total;
  },

  getTotalItemCount: function() {
  	return totalItemCount;
  },

  getOrderInfo: function() {
    return _orderInfo;
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
    case CartConstants.CART_ADD_PRODUCT:
      add(action.id, action.item);
      CartStore.emitChange();
      break;

    case CartConstants.CART_REMOVE_ITEM:
      remove(action.id);
      CartStore.emitChange();
      break;

    case CartConstants.CART_DECREMENT_ITEM:
      decrement(action.id);
      CartStore.emitChange();
      break;

    case CartConstants.CART_CLEAR:
      clear();
      CartStore.emitChange();
      break;

    case CartConstants.CART_CHECKOUT:
      checkout();
      break;

    default:
      // do nothing
	}
});

module.exports = CartStore;