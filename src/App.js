import React from 'react';
import Routes from './Routes'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo';
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Header />
        <Menu />
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
