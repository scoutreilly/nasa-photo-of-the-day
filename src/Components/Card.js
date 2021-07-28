import React from 'react'

const Card = props => {
  // debugger

  return (
    <div className='spaceCard'>
      <h1 className='title'>{props.title}</h1>
      <img src={props.image} alt='wispImage'></img>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <h3>{props.copyright}</h3>
    </div>
  );
}

export default Card;