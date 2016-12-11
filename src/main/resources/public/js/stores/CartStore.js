var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = {};
var _itemCounts = {};
var total = 0;

function add(id, item) {
	if (_items[id] == null) {
		_items[id] = item;
		_itemCounts[id] = 1;
	} else {
		_itemCounts[id] = _itemCounts[id] + 1;
	}
	total += item.price;
}

function remove(id) {
  total -= _items[id].price * _itemCounts[id];
  delete _items[id];
  delete _itemCounts[id];
}

function decrement(id) {
	total -= _items[id].price
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
}

function checkout() {
  console.log('Checking out');
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
  	var totalItemCount = 0;
  	for (var i = 0; i < _itemCounts.length; i++) {
  		totalItemCount += _itemCounts[i]
  	}
  	return totalItemCount;
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