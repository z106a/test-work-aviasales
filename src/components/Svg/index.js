import React from 'react';

export default ({children}) => <svg
  className="svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">{children}</svg>


const iconArrow =  ({render}) =>
  render ? <svg
    width="10"
    height="69"
    viewBox="0 0 10 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.220392" fillRule="evenodd" clipRule="evenodd" d="M9.24585 0.170425C8.0191 0.325882 6.76892 0.405998 5.5 0.405998C3.82874 0.405998 2.18994 0.267021 0.594543 0L3.84613 63.406H0L4.5 68.406L9 63.406H5.19232L9.24585 0.170425Z" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="9.24585" y1="68.406" x2="9.24585" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2196F3"/>
        <stop offset="1" stopColor="#A9D9FF"/>
      </linearGradient>
    </defs>
  </svg> : '';

export {iconArrow as IconArrow};