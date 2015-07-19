module.exports = {

  load: function () {
    var items;

    try {
      items = JSON.parse(localStorage.getItem('items')) || {};
    } catch (e) {
      items = {};
    }

    return items;
  },

  save: function (items) {
    localStorage.setItem('items', JSON.stringify(items));
  }

};