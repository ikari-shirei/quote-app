import React, { useEffect, useState } from 'react'
import './App.scss'
import Card from './components/Card'
import QuoteController from './components/QuoteController'
import retweet from './icons/retweet-green.svg'

import { connect } from 'react-redux'
import { fetchQuotes } from './redux/reduxIndex'

function App({ quotesData, fetchQuotes }) {
  useEffect(() => fetchQuotes(), [])

  let [countOfQuotes, setCountOfQuotes] = useState(0)
  let [countOfReadQuotes, setCountOfReadQuotes] = useState(1)

  let [readQuotes, setReadQuotes] = useState([])

  const [backButtonState, setBackButtonState] = useState('back-button-disabled')
  const [forwardButtonState, setForwardButtonState] = useState(
    'forward-button-disabled'
  )

  let currentQuote = quotesData.quotes[countOfQuotes]
  const latestQuote = quotesData.quotes[countOfQuotes]

  // Get new quote from main array and save it read quotes
  const getNewQuote = () => {
    setCountOfQuotes(countOfQuotes + 1)
    console.log(countOfQuotes)

    if (countOfQuotes === quotesData.quotes.length) {
      setCountOfQuotes(0)
    }

    console.log(countOfQuotes)

    /*
    setReadQuotes([...readQuotes, latestQuote])
  
    setCountOfReadQuotes(countOfReadQuotes + 1)
     console.log(countOfReadQuotes)

    backButtonIsActive()
    console.log(readQuotes) */
  }

  const backButtonIsActive = () => {
    /*  if (countOfReadQuotes > 0) {
      setBackButtonState('back-button')
    } else {
      setBackButtonState('back-button-disabled')
    } */
  }

  const backButtonOnClick = () => {
    /*  currentQuote = readQuotes[countOfReadQuotes]
    console.log(currentQuote)
    setCountOfReadQuotes(countOfReadQuotes - 1)

    backButtonIsActive() */
  }

  return (
    <div className="app" id="quote-box">
      <div className="header-container">
        <h1 className="header">Quotes</h1>
      </div>

      {currentQuote ? (
        <Card text={currentQuote.quote} author={currentQuote.author} />
      ) : (
        <Card text="" author="" />
      )}

      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${
          currentQuote ? currentQuote.quote : 'Error'
        }" -${currentQuote ? currentQuote.author : 'Error'}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={retweet} alt="Retweet button" />
      </a>

      <QuoteController
        /*     back={backButtonOnClick}
        forward={getNewQuote} */
        backClass={backButtonState}
        forwardClass={forwardButtonState}
        newQuote={getNewQuote}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quotesData: state.quotes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
