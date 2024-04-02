import Image from 'next/image'
import React from 'react'

export default function AddCard(props) {
  return (
    <div className='sport-card ad-card'>
      <Image src={`${props.imageURL ? props.imageURL : "/ad1.jpg"}`} height={500} width={500} alt='sport-image' className='sport-image' />
      <h2 className="sport-title">{props.title ? props.title : "New Jersey Devils"}</h2>
      <div className="ad-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem ullam eos, alias ex architecto reprehenderit nostrum voluptatem repellendus eum! Lorem ipsum dolor sit amet consecluptates adipisci architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut iste. Itaque dignissimos fugit nostrum ducimus eum eaque numquam beatae, reprehenderit quisquam, pariatur repellat nisi eligendi doloremque rem rerum vel.</div>
    </div>
  )
}
