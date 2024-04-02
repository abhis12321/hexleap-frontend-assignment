'use client';
import React from 'react';
import './style.css'
import SportCard from './SportCard';

export default function page() {
  return (
    <div className='home-page-container'>
      <h2 className="sports">Sports</h2>
      <div className="sports-cards-container">
        <SportCard />
      </div>
    </div>
  )
}
