import axios from 'axios'
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from './quoteTypes'

export const fetchQuotes = () => {
  return (dispatch) => {
    dispatch(fetchQuotesRequest)
    axios
      .get(
        `https://github.com/ikari-shirei/quote-app/blob/main/public/quotes.json`
      )
      .then((response) => dispatch(fetchQuotesSuccess(response.data.quotes)))
      .catch((error) => dispatch(fetchQuotesFailure(error.message)))
  }
}

export const fetchQuotesRequest = () => {
  return {
    type: FETCH_QUOTES_REQUEST,
  }
}

export const fetchQuotesSuccess = (quotes) => {
  return {
    type: FETCH_QUOTES_SUCCESS,
    payload: quotes,
  }
}

export const fetchQuotesFailure = (error) => {
  return {
    type: FETCH_QUOTES_FAILURE,
    payload: error,
  }
}
