import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';

function LikeButton({ count }) {
  const [state, setState] = React.useState({ count: count });

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 16, width: 32, height: 32, cursor: 'pointer', margin: 2, backgroundColor: '#1197F5' }}>
        <AiFillLike
          onClick={() => {
            let c = state.count + 1;
            setState({ count: c });
          }}
          color='white'
        />
      </div>
      <span style={{ fontSize: 14, marginLeft: 4 }}>{state.count}</span>
    </div>
  );
}

// type checking
LikeButton.propTypes = {
  count: PropTypes.number,
};

// default props
LikeButton.defaultProps = {
  count: 1,
};

export default LikeButton;
