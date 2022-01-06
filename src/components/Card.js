import React from 'react'
import './Card.scss'
import quoteIcon from '../icons/quote.svg'

function Card({ text, author }) {
  return (
    <div className="card">
      <h1 id="text">{text}</h1>
      <p id="author">{author}</p>
      <img src={quoteIcon} alt="Quote icon" className="quoteIcon" />
    </div>
  )
}

export default Card
