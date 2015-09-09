import Item from '../components/Item.react';
import ItemInputForm from '../components/ItemInputForm.react';
import React, { PropTypes } from 'react';

export default React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  },

  render() {
    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div>
          <ItemInputForm onSave={this.props.onSave} />
        </div>
        <ul className="list-group">
          {this.props.items.map((item, index) =>
            <Item
              key={index}
              id={index}
              completed={item.completed}
              name={item.text}
              onCompleteClick={this.props.onComplete}
              onDeleteClick={this.props.onDelete} />
          )}
        </ul>
      </div>
    );
  }

});
