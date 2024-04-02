import Image from 'next/image'
import React from 'react'

export default function SportCard(props) {
  return (
    <div className='sport-card'>
      <Image src={`${props.imageURL ? props.imageURL : "/sport2.jpg"}`} height={500} width={300} alt='sport-image' className='sport-image' />
      <h2 className="sport-title">{props.title ? props.title : "New Jersey Devils"}</h2>
      <div className="sport-data opacity-80">
        <div className="events-data">
          <div className="event-count-tag opacity-70">Total Events</div>
          <div className="event-count">{props.eventCount ? props.eventCount : "45"} Events</div>
        </div>
        <div className="about-data">
          <div className="sport-name-tag opacity-70">Sport</div>
          <div className="sport-name">{props.name ? props.name : "Cricket"}</div>
        </div>
      </div>
    </div>
  )
}
