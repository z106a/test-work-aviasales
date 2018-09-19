import React from 'react';
import Div from 'components/Div';

export default (props) => {
  return (
    <Div classTo="flex flex-column">
      <div className="text-default-font text-bold text-lineH-28 text-size16 text-color4">STR: {props.str}</div>
      <div className="text-default-font text-bold text-lineH-28 text-size16 text-color4">Avg. {props.price}</div>

      <div className="text-default-font text-lineH-16 text-size12 text-muted">Conversation from clicks to bookings on
        all devices.
      </div>
      <div className="text-default-font text-lineH-17 text-size12">
        Help:
        <a href="#" className="text-blue">STR</a>,
        <a href="#" className="text-blue">Bookings</a>,
        <a href="#" className="text-blue">Avg.Check</a>
      </div>
    </Div>
  );
}