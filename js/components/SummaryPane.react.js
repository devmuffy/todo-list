var React = require('react');
var SummaryPaneStore = require('../stores/SummaryPaneStore');

function getStateFromStores() {
  return {
    expensesLength: SummaryPaneStore.get()
  };
}

module.exports = React.createClass({

  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function () {
    SummaryPaneStore.addChangeListener(this._update);
  },

  componentWillUnmount: function () {
    SummaryPaneStore.removeChangeListener(this._update);
  },

  render: function () {
    return (
      <div className="summarypane">
        <ul className="list-group">
          <li className="list-group-item active">Summary</li>
          <li className="list-group-item">Tasks<span className="badge">{this.state.expensesLength}</span></li>
        </ul>
      </div>
    );
  },

  _update: function () {
    this.setState(getStateFromStores());
  }

});
