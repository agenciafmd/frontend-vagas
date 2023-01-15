import React from 'react'
import './Card.css'

const Card = ({name,description,img,url}) => {
  return (
    <li className='Card'>
      <a href={url}>
        <img  alt="" src={img}/>
      </a>
      <div className='Letter'>
        <h1>
          {name}
        </h1>
        <p>
          {description}
        </p>
      </div>      
    </li>
  )
}

export default Card