var Item = require('../components/Item.react');
var ItemActions = require('../actions/ItemActions');
var ItemInputForm = require('../components/ItemInputForm.react');
var ItemStore = require('../stores/ItemStore');
var React = require('react');

var forEach = require('lodash/collection/forEach');

function getStateFromStores() {
  return {
    items: ItemStore.getAll()
  };
}

module.exports = React.createClass({

  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var that = this;
    var items = [];

    forEach(that.state.items, function (n, key) {
      items.push(
        <li className="list-group-item" key={key}>
          <Item key={key} id={that.state.items[key].id} name={that.state.items[key].text} onClick={that._delete} />
        </li>
      );
    });

    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div>
          <ItemInputForm onSave={this._save} />
        </div>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState(getStateFromStores());
  },

  _save: function (text) {
    ItemActions.create(text);
  },

  _delete: function (id) {
    ItemActions.delete(id);
  }

});
