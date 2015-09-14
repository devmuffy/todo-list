jest.dontMock('../ItemClient');

/**
 * mock localStorage
 */
window.localStorage = (function () {
  var store = {};

  return {
    clear: function () {
      store = {};
    },

    getItem: function (key) {
      return store[key];
    },

    setItem: function (key, value) {
      store[key] = value;
    }
  };
}());

beforeEach(function () {
  var store = {};

  spyOn(localStorage, 'getItem').andCallFake(function (key) {
    return store[key];
  });

  spyOn(localStorage, 'setItem').andCallFake(function (key, value) {
    return store[key] = value + '';
  });

  spyOn(localStorage, 'clear').andCallFake(function () {
      store = {};
  });
});

describe('ItemClient', function () {

  var ItemClient = require('../ItemClient');

  it('saves the data and loads it', function () {
    var data = {
      someData: 'example data'
    };

    ItemClient.save(data);
    expect(ItemClient.load()).toEqual(data);
  });

  it('loads the data', function () {
    expect(ItemClient.load()).toEqual({});
  });

});
