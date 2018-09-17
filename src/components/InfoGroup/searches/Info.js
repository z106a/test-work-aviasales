import React from 'react';
import Div from '../../Div';

export  default (props) => {
  return (
    <Div classTo="flex flex-column">
      <div className="text-default-font text-bold text-size16 text-lineH-28 text-color4">Searches<span
        className="badge bg-green text-default-font text-size12 text-lineH-14 text-colorWhite">{props.percent}</span>
      </div>
      <div>
        <span className="text-default-font text-lineH-28 text-size20 text-color4">{props.current}</span>
        <span className="text-default-font text-lineH-16 text-size12 text-color4 margin-left10">Yesterday</span>
      </div>
      <div>
        <span className="text-default-font text-lineH-28 text-size20 text-muted">{props.prev}</span>
        <span className="text-default-font text-lineH-16 text-size12 text-muted margin-left10">Last friday</span>
      </div>
    </Div>
  );
}