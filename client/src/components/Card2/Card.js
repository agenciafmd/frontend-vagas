import React from 'react'
import './Card.css'

const Card = ({img,name,description}) => {
  return (
    <div className='Member'>
      <img  alt="" src={img}/>
      <div className='MemberLetter'>
        <h1>
          {name}
        </h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card