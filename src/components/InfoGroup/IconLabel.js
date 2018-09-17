import React from 'react';
import Div from '../Div';
import Dot from './Dot';
import Svg, {IconArrow} from "../Svg";

export default ({labelArrow, dotColor, svg}) => {
  return (
    <Div classTo="flex flex-column flex-align-item-center">
      <Div>
        <Div classTo="dot48">
          <Svg>{svg}</Svg>
          <Dot dotColor={dotColor} />
        </Div>
      </Div>
      <IconArrow render={labelArrow}/>
    </Div>
  );
}