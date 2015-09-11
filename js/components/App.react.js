import PlaygroundPane from '../components/PlaygroundPane.react';
import React from 'react';
import SummaryPane from '../components/SummaryPane.react';
import { completeItem, createItem, deleteItem, setVisibilityFilter, VisiblityFilters } from '../actions/items';
import { connect } from 'react-redux';

const App = React.createClass({

  render() {
    const { dispatch, filter, items } = this.props;

    const shownItems = items.filter((item) => {
      switch (filter) {
      case VisiblityFilters.SHOW_ACTIVE:
        return item.completed !== true;
      case VisiblityFilters.SHOW_COMPLETED:
        return item.completed === true;
      default:
        return true;
      }
    });

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
              <PlaygroundPane
                filter={filter}
                items={shownItems}
                onComplete={index => dispatch(completeItem(index))}
                onDelete={index => dispatch(deleteItem(index))}
                onSave={(id, text) => dispatch(createItem({id, text}))}
                onFilterChange={filter => dispatch(setVisibilityFilter(filter))} />
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
    filter: state.visiblityFilter,
    items: state.items
  };
}

export default connect(select)(App);
