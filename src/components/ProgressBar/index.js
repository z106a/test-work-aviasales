import React, {Component} from 'react';
import {connect} from 'react-redux';
import Div from '../Div';
import Head from './Head';
import Bar from './Bar';
import Error from './Error';

class Progress extends Component {
  render() {
    return (
      <Div classTo="stats-container margin-container">
        <Div classTo="flex m-stats">
          <Head value={this.props.graphic.err} name="Errors" />
          <Head value={this.props.graphic.zero} name="Zeroes"/>
          <Head value={this.props.graphic.timeouts} name="Timeouts" />
        </Div>

        <Bar />

        <Div classTo="flex">
          {
            this.props.errors.map((el, idx) => {
              const bg_color = Object.freeze(['bg-yellow', 'bg-darkblue', 'bg-blue', 'bg-grey']);
              const props = {key: idx,
                count:el.count,
                code: el.code,
                bgColor: bg_color[idx],
                margin: (idx !==0) ? "error-counter-block": null }
              return <Error {...props}/>
            })
          }
        </Div>
      </Div>
    );
  }
}

function mapStateToProps({backend}) {
  const { graphic, errors } = backend;
  return {
    graphic,
    errors
  };
}

export default connect(mapStateToProps)(Progress);
