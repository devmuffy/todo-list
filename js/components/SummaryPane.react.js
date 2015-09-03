import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="summarypane">
        <ul className="list-group">
          <li className="list-group-item active">Summary</li>
          <li className="list-group-item">Tasks<span className="badge">{this.props.itemsCount}</span></li>
        </ul>
      </div>
    );
  }

});
