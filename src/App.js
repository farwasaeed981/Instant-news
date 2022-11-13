import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'

export class App extends Component {
  render() {
    return (
      <>
       <Navbar />
      <News/>
      </>
    )
  }
}

export default App