// var request = require('superagent');

module.exports = {

  load: function () {
    var items;

    // request.get('http://api.randomuser.me/')
    //   .set('Accept', 'application/json')
    //   .end(function(err, response) {
    //     if (err) return console.error(err);
    //     console.info(response.body, 'response');
    //   });

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
