import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  state = {
      eyeColor: "blue",
    }

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }



  render() {
    let babyArr = offspring.map(baby => <BabyHog key={ baby.id }
      name={ baby.name }
      hobby={ baby.hobby }
      eyeColor={ this.state.eyeColor }
      weight={ this.props.weight } />)

    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: {this.props.weight} Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>

        <ul className="hoglist">
          {babyArr}
        </ul>

      </div>
    )
  }

}
