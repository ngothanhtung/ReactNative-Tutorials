import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';

class LikeButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 16, width: 32, height: 32, cursor: 'pointer', margin: 2, backgroundColor: '#1197F5' }}>
          <AiFillLike
            onClick={() => {
              let c = this.state.count + 1;
              this.setState({ count: c });

              // callback
              if (typeof this.props.onClick === 'function') {
                this.props.onClick();
              }
            }}
            color={this.props.color}
          />
        </div>
        <span style={{ fontSize: 14, marginLeft: 4 }}>{this.state.count}</span>
      </div>
    );
  }
}

// type checking
LikeButtonClass.propTypes = {
  count: PropTypes.number,
  color: PropTypes.oneOf(['red', 'green', 'blue']),
  onClick: PropTypes.func.isRequired,
};

// default props
LikeButtonClass.defaultProps = {
  count: 1,
  color: 'red',
};

export default LikeButtonClass;
