import React from 'react';
import styled from 'styled-components';

export default ({classTo, children}) => {
  return <div className={classTo}>{children}</div>
}

export const Container = styled.div `
  width: 775px;
  background-color: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
`;

export const FlexWrapper = styled.div `
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;
