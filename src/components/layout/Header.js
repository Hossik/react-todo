// rfc tab
import React from 'react'
import { Link } from 'react-router-dom'
// whith functional component it works like render()!
function Header() {
  return (
    <header style={headerStyles}>
      <h1>TodoList</h1>
      <Link style={linkStyles} to="/">Home</Link> 
      | 
      <Link style={linkStyles} to="/about">About</Link>
    </header>
  )
}

const headerStyles ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyles = {
  color: '#fff',
  textDecoration: 'none'
}
export default Header;