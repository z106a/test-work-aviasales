import React from 'react';
import {connect} from 'react-redux';
import IconLabel from "./IconLabel";
import Div from "../Div";
import Info from "./searches/Info";
import InfoStats from "./searches/InfoStats";

const filterSvg = <path d="M15.8719 0.597C15.6836 0.22875 15.3178 0 14.9156 0H1.08284C0.68139 0 0.314845 0.22875 0.126481 0.597C-0.0633372 0.969 -0.0378827 1.4145 0.191936 1.76025L5.75266 10.1453C5.79484 10.209 5.81739 10.2825 5.81739 10.359V16.8757C5.81739 17.496 6.30684 18 6.9083 18C7.10394 18 7.29666 17.9445 7.46757 17.8388L9.65303 16.4865C9.97884 16.284 10.181 15.915 10.181 15.5235V10.359C10.181 10.2825 10.2036 10.209 10.2465 10.1445L15.8065 1.761C16.0363 1.41525 16.0618 0.969 15.8719 0.597Z" fill="white"/>

const searches = (props) => {
  return (
    <Div classTo="flex stats-container margin-container">
      <IconLabel labelArrow={true} dotColor='bg-green' svg={filterSvg} />

      <Div classTo="flex flex-column need-more-space">
        <Div classTo="flex m-flex-justify-spacearound">
          <Info {...props.searches} />
          <InfoStats {...props.searches}/>
        </Div>
        <hr />
      </Div>
    </Div>
  )
};

function mapStateToProps({backend}) {
  const {searches} = backend;
  return {
    searches,
  };
}

export default connect(mapStateToProps)(searches);