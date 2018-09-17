import React from 'react';
import Div from '../Div';

export default ({value, name}) => {
  return (
    <Div classTo="m-stats-grid">
    <Div classTo="stats-sign"><span className="dot bg-green"></span></Div>
    <span className="stats-label text-default-font text-bold text-size16 text-color4">{name}: {value}</span>
    <Div classTo="text-muted text-default-font text-bold text-size12 stats-avg">
      Average: {value}
    </Div>
    </Div>
  );
}