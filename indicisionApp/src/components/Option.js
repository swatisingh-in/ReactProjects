import React from 'react'

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.text}</p>
      <button
        className="button button--link"
        onClick = {(e) => {
          props.handleDeleteOptionSingular(props.text)
        }}
      >Remove</button>
    </div>
  );
};

export default Option
