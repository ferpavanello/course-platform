import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Menu() {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/student" className="stocks">
          Student
        </Link>
        <Link to="/course" className="course">
          Course
        </Link>
      </nav>
    </aside>
  )
}

export default Menu