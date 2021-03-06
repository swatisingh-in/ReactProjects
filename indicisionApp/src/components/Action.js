import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button className="big-button"
        onClick={ props.handlePickOptions }
        disabled={ !props.hasOptions }
      >What should I do?</button>
    </div>
  );
};

export default Action;
