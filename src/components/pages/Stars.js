import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarItem from './StarItem';


export class Stars extends Component {
  render() {
    return this.props.stars.map((star) =>( 
      <StarItem key={star.rate} 
      star={star}
      rating={this.props.rating}
      />
    ))
    
    }
  }
  Stars.propTypes = {
    stars: PropTypes.array.isRequired
  }


export default Stars
