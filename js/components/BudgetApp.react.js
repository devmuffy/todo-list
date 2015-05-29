var React = require('react');
var PlaygroundPane = require('../components/PlaygroundPane.react');
var SummaryPane = require('../components/SummaryPane.react');

var BudgetApp = React.createClass({

  render: function () {
    return (
      <div className="budgetapp">
        <PlaygroundPane />
        <SummaryPane />
      </div>
    );
  }

});

module.exports = BudgetApp;
