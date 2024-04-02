'use client';
import React from 'react';
import './style.css'
import SportCard from './SportCard';
import AdCard from './AdCard';
import Link from 'next/link';

export default function page() {
  return (
    <div className='home-page-container'>
      <h2 className="sports">Sports</h2>
      <div className="sports-cards-container">
        <SportCard imageURL={'/sport1.jpg'}  />
        <SportCard imageURL={'/sport2.jpg'}  />
        <SportCard imageURL={'/sport3.jpg'}  />
        <SportCard imageURL={'/sport4.jpg'} />
        <AdCard />
      </div>
      <div className="see-more-cant">        
        <Link href={'/news'} className='see-more' >See More</Link>
      </div>
    </div>
  )
}
