/* useEffect(() => fetchQuotes(), [])

let [countOfQuotes, setCountOfQuotes] = useState(0)
let [readQuotesIndex, setReadQuotesIndex] = useState(0)

const [backButtonState, setBackButtonState] = useState('back-button-disabled')
const [forwardButtonState, setForwardButtonState] = useState(
  'forward-button-disabled'
)

let currentQuote = quotesData.quotes[countOfQuotes]
const latestQuote = quotesData.quotes[countOfQuotes]

// Set first quote of read quotes initially
let [readQuotes, setReadQuotes] = useState([])

// Get new quote from main array and save it read quotes
const getNewQuote = () => {
  setCountOfQuotes((countOfQuotes += 1))
  setReadQuotes([...readQuotes, latestQuote])
  backButtonAction()
  forwardButtonAction()
  setReadQuotesIndex(countOfQuotes)
}

const backButtonAction = () => {
  setReadQuotesIndex((readQuotesIndex += 1))
  console.log(readQuotesIndex)
  if (readQuotesIndex > 0) {
    setBackButtonState('back-button')
  }
}

const backButtonClick = () => {
  if (readQuotesIndex > 0) {
    console.log(readQuotes[readQuotesIndex - 1])
    currentQuote = readQuotes[readQuotesIndex - 1]
    setReadQuotesIndex((readQuotesIndex -= 1))
    console.log(readQuotesIndex)
  }

  if (readQuotesIndex <= 0) {
    setBackButtonState('back-button-disabled')
  }
}

const forwardButtonAction = () => {
  setReadQuotesIndex((readQuotesIndex -= 1))
  console.log(readQuotesIndex)
  if (readQuotesIndex > 0) {
    setForwardButtonState('forward-button')
  }
}

const forwardButtonClick = () => {
  if (readQuotesIndex < readQuotes.length) {
    console.log(readQuotes[readQuotesIndex + 1])
    currentQuote = readQuotes[readQuotesIndex - 1]
    setReadQuotesIndex((readQuotesIndex += 1))
    console.log(readQuotesIndex)
  }

  if (readQuotesIndex >= readQuotes.length) {
    setForwardButtonState('forward-button-disabled')
  }
}
 */
