import PlaygroundPane from '../components/PlaygroundPane.react';
import React from 'react';
import SummaryPane from '../components/SummaryPane.react';
import { completeItem, createItem, deleteItem } from '../actions/items';
import { connect } from 'react-redux';

const App = React.createClass({

  render() {
    const { dispatch, items } = this.props;

    return (
      <div className="budgetapp">
        <navbar className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">BudgetApp</a>
            </div>
          </div>
        </navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <PlaygroundPane items={items}
                onComplete={index => dispatch(completeItem(index))}
                onDelete={index => dispatch(deleteItem(index))}
                onSave={text => dispatch(createItem(text))} />
            </div>
            <div className="col-md-4">
              <SummaryPane
                itemsCount={items.length}
                itemsCompletedCount={items.filter((item, index) => item.completed === true).length} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

function select(state) {
  return {
    items: state.items
  };
}

export default connect(select)(App);
