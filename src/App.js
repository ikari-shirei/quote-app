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

  let currentQuote = quotesData.quotes[countOfQuotes]

  const getNewQuote = () => {
    setCountOfQuotes(countOfQuotes + 1)

    if (countOfQuotes === quotesData.quotes.length - 1) {
      setCountOfQuotes(0)
    }
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

      <QuoteController newQuote={getNewQuote} />
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
