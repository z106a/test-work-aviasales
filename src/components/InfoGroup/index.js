import React, {Fragment} from 'react';
import Searches from './Searches';
import Clicks from './Clicks';
import Bookings from './Bookings';

export default () => {
  return (
    <Fragment>
      <Searches />
      <Clicks />
      <Bookings />
    </Fragment>
  );
}

