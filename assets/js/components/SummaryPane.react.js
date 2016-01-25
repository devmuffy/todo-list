import React, { PropTypes } from 'react';

export default React.createClass({

  propTypes: {
    itemsCompletedCount: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired
  },

  render() {
    const progressStyle = {
      width: calculateThePercentage(this.props.itemsCompletedCount, this.props.itemsCount)
    };

    return (
      <div className="summarypane">
        <ul className="list-group">
          <li className="list-group-item active">
            <h3>Summary</h3>
          </li>

          <li className="list-group-item">
            Tasks<span className="badge">{this.props.itemsCount}</span>
          </li>

          <li className="list-group-item">
            <p>Completed</p>
            <div className="progress">
              <div className="progress-bar progress-bar-info progress-bar-striped" style={progressStyle}>
                <span className="sr-only">{progressStyle.width} Complete</span>
                {progressStyle.width} Complete
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }

});

function calculateThePercentage(dividend, divisior) {
  if (divisior === 0) {
    return '0%';
  }

  return Math.floor((dividend / divisior) * 100) + '%';
}
