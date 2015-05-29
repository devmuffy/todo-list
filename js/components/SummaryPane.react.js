var React = require('react');
var SummaryPaneStore = require('../stores/SummaryPaneStore');

function getExpensesLength() {
  return {
    expensesLength: SummaryPaneStore.getExpensesLength()
  };
}

var SummaryPane = React.createClass({

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
        <h1>Summary</h1>
        {this.state.expensesLength}
      </div>
    );
  },

  _onChange: function () {
    this.setState(getExpensesLength());
  }

});

module.exports = SummaryPane;
