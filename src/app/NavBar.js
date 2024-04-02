"use client"
import React from 'react'

export default function NavBar() {
    const handleMode = e => {
      document.body.classList.toggle('dark');
    }
  
  return (
    <div className='navbar-container'>      
      <button onClick={handleMode}>toggle mode</button>
    </div>
  )
}
