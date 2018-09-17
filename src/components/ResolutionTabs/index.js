import React from 'react';
import Div from '../Div';
import Button from './Button';

export default (props) => {
  return (
    <Div classTo="resolution-tabs">
      <Div className="flex m-btn-group">
        <Button {...props}>Last hour</Button>
        <Button {...props}>Today</Button>
        <Button {...props}>Yesterday</Button>
        <Button {...props}>Last 3 days</Button>
      </Div>
    </Div>
  );
}