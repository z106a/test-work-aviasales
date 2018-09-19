import React, {Component} from 'react';
import {connect} from 'react-redux';
import Div from 'components/Div';


class Bar extends Component {
  sum = 0;
  bg_color = Object.freeze(['bg-yellow', 'bg-darkblue', 'bg-blue', 'bg-grey']);

  widthCalc = (total, num) => {
    return Math.ceil((num / total) * 100);
  };
  sumCalc = (errors) => {
    this.sum = errors.reduce((acc, cur) => acc + cur.count, 0);
  }

  render() {
    const {errors} = this.props;
    if (errors.length) {
     this.sumCalc(errors);
    }

    return (
      <Div classTo="flex flex-column progress-bar-container">
        <Div classTo="flex progress">
          {
            errors.map((el, idx) => {
              return <div key={idx} className={`progress-bar ${this.bg_color[idx]}`} style={{width:this.widthCalc(this.sum, el.count)+'%'}} />
            })
          }
        </Div>
      </Div>
    );
  }
}
function mapStateToProps({backend}) {
  const { errors } = backend;
  return {
    errors
  };
}

export default connect(mapStateToProps)(Bar);
