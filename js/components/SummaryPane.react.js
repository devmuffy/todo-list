var React = require('react');
var SummaryPaneStore = require('../stores/SummaryPaneStore');

function getExpensesLength() {
  return {
    expensesLength: SummaryPaneStore.getExpensesLength()
  };
}

module.exports = React.createClass({

  getInitialState: function () {
    return getExpensesLength();
  },

  componentDidMount: function () {
    SummaryPaneStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    SummaryPaneStore.removeChangeListener(this._onChange);
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

  _onChange: function () {
    this.setState(getExpensesLength());
  }

});
