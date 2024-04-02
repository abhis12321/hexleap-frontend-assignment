import React from 'react'
import SportCard from './SportCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CollectionSpotLigh() {
  return (
    <div className='collection-spotlight-container'>
      <h1 className="spotlight-title">Collection Spotlight</h1>
      <p className="spotlight-tagline">Discover extraordinary moments with our spotlight collection metatickets - exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <div className="spotlight-strickers">
          <SportCard imageURL={'/sport1.jpg'}  />
          <SportCard imageURL={'/sport1.jpg'}  />
          <SportCard imageURL={'/sport1.jpg'}  />
      </div>

      <FontAwesomeIcon icon={faChevronLeft} size='x' className='position-absolute left'/>
      <FontAwesomeIcon icon={faChevronRight} size='x' className='position-absolute right'/>
    </div>
  )
}
