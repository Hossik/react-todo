import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <Link style={first} to="/">connects</Link> 
      <Link style={linkStyles} to="/rate">Rate Us</Link>
    </footer>
  )
}
const footerStyle ={
  background: '#333',
  color: '#fff',
  padding: '10px'
}

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '5%'
}
const first ={
  color: '#fff',
  textDecoration: 'none'
}