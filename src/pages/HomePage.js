import React, { Component } from 'react'

import { Body } from '../elements'

export class HomePage extends Component {
  constructor() {
    super()

    this.state = {
      appointments: [
        { name: 'Ryan', location: 'Room A', date: new Date },
        { name: 'Dylan', location: 'Room A', date: new Date },
        { name: 'Cooper', location: 'Room A', date: new Date },
        { name: 'Matt', location: 'Room A', date: new Date },
      ]
    }
  }



  render() {
    const { appointments } = this.state

    return (
      <div className="home">
        <Nav />
        <Body data={appointments}/>
        <Scheduler />
      </div>
    )
  }
}


const Nav = () => {
  return (
    <div className="nav-container">

    </div>
  )
}

const Scheduler = () => {
  return (
    <div className="scheduler-container">

    </div>
  )
}

