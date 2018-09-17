import React from 'react';
import Div from '../Div';


export default ({code, count, margin, bgColor}) => {
  return (
    <Div classTo={margin}>
      <span className={`square ${bgColor}`}></span>
      <span className="text-default-font text-bold text-size12">{code ? 'Error' : 'Other'} {code}: {count}</span>
    </Div>
  );
}
