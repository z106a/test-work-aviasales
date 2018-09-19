import React from 'react';
import Div from 'components/Div';
import Svg, {IconArrow} from "components/Svg";
import Dot from './Dot';

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