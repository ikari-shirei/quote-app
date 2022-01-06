import React from 'react'
import backIcon from '../icons/back.svg'
import forwardIcon from '../icons/forward.svg'
import './QuoteController.scss'

function QuoteController({ newQuote }) {
  return (
    <div className="quote-controller">
      <div className="quote-controller-inner">
        <div className="control-elements"></div>

        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  )
}

export default QuoteController
