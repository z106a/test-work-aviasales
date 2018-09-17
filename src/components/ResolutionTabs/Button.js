import React from 'react';
import A from '../A';

export default (props) => {
  return (
    <button className="m-btn text-color4" onClick={() => props.clickHandler(props.children)}>
      {props.children}
    </button>
  );
} 