import React, { Component } from 'react'
import Stars from './Stars'

export class Rate extends Component {
  state = {
    stars:[
      {rate: 1,
      goodness: 'awful'},
      {rate: 2,
        goodness: 'bad'},
      {rate: 3,
        goodness: 'middle'},
      {rate: 4,
        goodness: 'good'},
      {rate: 5,
        goodness: 'nice'}
    ]
  }
  rating = (rate) => {
    this.setState({ stars: this.state.stars.filter(star => star.rate <= rate) });
    }

    
  render() {
    return (
      <div>
        <p>
          Rate US
          <Stars stars={this.state.stars}
          rating={this.rating}
          />

        </p>
        
      </div>
    )
  }
}

export default Rate
