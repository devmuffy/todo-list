import React from 'react';

export default React.createClass({

  render() {
    let progressStyle = {
      width: this.props.itemsCompletedCount / this.props.itemsCount * 100 + '%'
    };

    return (
      <div className="summarypane">
        <ul className="list-group">
          <li className="list-group-item active">
            <h3>Summary</h3>
          </li>
          <li className="list-group-item">Tasks<span className="badge">{this.props.itemsCount}</span></li>
          <li className="list-group-item">
            <p>Completed</p>
            <div className="progress">
              <div className="progress-bar progress-bar-info progress-bar-striped" style={progressStyle}>
                <span className="sr-only">{progressStyle.width} Complete</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }

});
