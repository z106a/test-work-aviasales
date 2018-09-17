import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, FlexWrapper} from './Div';
import Header from './Header';
import ResolutionTabs from './ResolutionTabs';
import ProgressBar from './ProgressBar';
import InfoGroup from './InfoGroup';
import * as actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
    this.resolutionTabHandler = this.resolutionTabHandler.bind(this);
  }
  resolutionTabHandler(interval) {
    this.props.fetchError && this.props.fetchData();
    switch (interval) {
      case 'Yesterday':

        return this.props.fetchYesterday();
      case 'Today':
        return this.props.fetchToday();
      case 'Last hour':
        return this.props.fetchToday();
      case 'Last 3 days':
        return this.props.fetchLast3d();
      default:
        return ''
    }

  }

  render() {
    this.props.fetchError && console.log(this.props.fetchError);
    return (
      <Container>
        <FlexWrapper>
          <Header/>
          <ResolutionTabs clickHandler = {this.resolutionTabHandler} />
          <ProgressBar />
          <InfoGroup />
        </FlexWrapper>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    backend: state.backend
  };
}
export default connect(mapStateToProps, actions)(App);

App.propTypes = {
  backend: PropTypes.shape({
    errors: PropTypes.array,
    graphic: PropTypes.object,
    searches: PropTypes.object,
    clicks: PropTypes.object,
    bookings: PropTypes.object,
    fetchError: PropTypes.object,
    loading: PropTypes.bool
  })
}