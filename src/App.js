import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="name">Jean-Christophe Robertson's personal website!</p>
      </header>
    </div>
  )
}

export default App
