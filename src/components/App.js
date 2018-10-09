import React, { Component } from 'react'
import { Header, Content } from './'
import '../App.css'
class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div>
          <Content />
        </div>
      </div>
    )
  }
}

export default App
