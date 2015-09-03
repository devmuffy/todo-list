import PlaygroundPane from '../components/PlaygroundPane.react';
import React from 'react';
import SummaryPane from '../components/SummaryPane.react';
import { createItem, deleteItem } from '../actions/items';
import { connect } from 'react-redux';

const App = React.createClass({

  render() {
    const { dispatch, items, subscribe } = this.props;

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
              <PlaygroundPane items={items} onSave={text => dispatch(createItem(text))} onDelete={index => dispatch(deleteItem(index))} />
            </div>
            <div className="col-md-4">
              <SummaryPane itemsCount={items.length} />
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
