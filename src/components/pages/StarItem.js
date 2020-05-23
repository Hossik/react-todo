import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class StarItem extends Component {
  render() {
    
const {rate} = this.props.star;
    return (
    <input type="radio" onClick={this.props.rating.bind(this, rate)} />
    )
  }
}
StarItem.propTypes = {
  star: PropTypes.object.isRequired
}
export default StarItem
