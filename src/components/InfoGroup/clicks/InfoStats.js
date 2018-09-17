import React from 'react';
import Div from '../../Div/index';

export default (props) => {
  return (
    <Div classTo="flex flex-column">
      <div className="text-default-font text-bold text-lineH-28 text-size16 text-color-red">CTR: {props.ctr}</div>

      <div className="text-default-font text-lineH-16 text-size12 text-muted">Conversation from searches to clicks on
        all devices.
      </div>
      <div className="text-default-font text-lineH-17 text-size12">Help: <a href="#" className="text-blue">CTR</a>, <a
        href="#" className="text-blue">Clicks</a>
      </div>

    </Div>
  );
}