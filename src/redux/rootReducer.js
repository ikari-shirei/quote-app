import { combineReducers } from 'redux'
import quotesReducer from './quotes/quoteReducer'

const rootReducer = combineReducers({
  quotes: quotesReducer,
})

export default rootReducer
