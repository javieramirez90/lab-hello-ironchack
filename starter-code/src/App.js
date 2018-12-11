import React, { Component } from 'react'
import './index.css'



class App extends Component {
  render() {
    return (
      <div>
      <section className="mainPage">
        <nav className="leNavbar">
          <img src="./images/ironhack-logo.svg" alt="Ironhack logo"/>
          <img src="./images/menu-top.svg" alt="hamburger"/>
        </nav>
        <div className="theCarnita">
          <div className="left">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
            
            
            <button type="button" className="button">Awesome!</button>
          </div>
          <div className="middle">
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
          </div>
          <div className="right">
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
            <img src="./images/react-logo.svg" alt="real logo of Reactjs"/>
          </div>
        </div>
      </section>
      <section className="aboutFramework">
      <div>
        <img src="./images/icon1.png" alt=""/>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src="./images/icon2.png" alt=""/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src="./images/icon3.png" alt=""/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div>
        <img src="./images/icon4.png" alt=""/>
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
      </section>
      </div>
    )
  }
}

export default App