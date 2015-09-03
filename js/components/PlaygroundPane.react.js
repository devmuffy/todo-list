import Item from '../components/Item.react';
import ItemInputForm from '../components/ItemInputForm.react';
import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div>
          <ItemInputForm onSave={this.props.onSave} />
        </div>
        <ul className="list-group">
          {this.props.items.map((item, index) =>
            <Item key={index} id={index} completed={item.completed} name={item.text} onClick={this.props.onDelete} />
          )}
        </ul>
      </div>
    );
  }

});
