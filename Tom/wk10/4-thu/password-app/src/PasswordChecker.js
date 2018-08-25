import React from 'react'
import estimateStrength from './estimateStrength'

export default class PasswordChecker extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      pwScore: 0
    }
  }

  handleChange(event) {
    const password = event.target.value

    // event.persist()
    this.setState(() => {
      return {pwScore: estimateStrength(password).score}
    })
  }

  render() {
    const {pwScore} = this.state
    return <div>
      <input onChange={this.handleChange} type="text"/>
      <span>{pwScore}</span>
    </div>
  }
}


// if (content.length >= 8) {
//   console.log('yes')