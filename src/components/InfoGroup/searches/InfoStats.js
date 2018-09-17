import React from 'react';
import Div from '../../Div/index';

export default ({current}) => {
  function renderMe() {
   return current;
  }

  return (
    <Div classTo="flex flex-column">
      <div className="text-default-font text-bold text-lineH-28 text-size16 text-color4">Mobile traffic:
        {renderMe() ? '100%': ''}</div>
      <div className="text-default-font text-bold text-lineH-28 text-size16 text-color4">Web traffic:
        {renderMe() ? '100%': ''}</div>
      <div className="text-default-font text-lineH-16 text-size12 text-muted">You get 100% traffic on mobile and desktop
        devices.
      </div>
      <div className="text-default-font text-lineH-17 text-size12">Help:
        <a href="#" className="text-blue">Searches</a>,
        <a href="#" className="text-blue">Pessimisation</a>
      </div>
    </Div>
  );
}