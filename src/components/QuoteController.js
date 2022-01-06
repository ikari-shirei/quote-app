import React from 'react'
import backIcon from '../icons/back.svg'
import forwardIcon from '../icons/forward.svg'
import './QuoteController.scss'

function QuoteController({ back, forward, backClass, forwardClass, newQuote }) {
  return (
    <div className="quote-controller">
      <div className="quote-controller-inner">
        <div className="control-elements">
          {/*     <img
            src={backIcon}
            alt="Back button"
            className={backClass}
            onClick={back}
          />
          <img
            src={forwardIcon}
            alt="Back button"
            className={forwardClass}
            onClick={forward}
          /> */}
        </div>

        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  )
}

export default QuoteController
