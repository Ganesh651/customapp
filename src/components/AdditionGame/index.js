import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {PiEqualsLight} from 'react-icons/pi'
import './index.css'

const AdditionGame = () => {
  const [firstNumber, setFirstNumber] = useState(Math.ceil(Math.random() * 50))
  const [secondNumber, setSecondNumber] = useState(
    Math.ceil(Math.random() * 50),
  )
  const [showResult, setShowResult] = useState('')
  const [bool, setBool] = useState(false)
  const [userInput, setUserInput] = useState('')

  const onChangeUserInput = e => {
    setUserInput(e.target.value)
  }

  const onCheck = e => {
    e.preventDefault()
    const result = firstNumber + secondNumber
    const userValue = parseInt(userInput)
    if (result === userValue) {
      setBool(true)
      setShowResult('Congratulations! you got it right...')
      setUserInput('')
    } else {
      setBool(true)
      setShowResult('Please try again...')
      setUserInput('')
    }
  }

  const onRestart = () => {
    setUserInput('')
    setShowResult('')
    setBool(false)
    setFirstNumber(Math.ceil(Math.random() * 50))
    setSecondNumber(Math.ceil(Math.random() * 50))
  }

  return (
    <div className="app-container">
      <img
        className="image"
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png"
        alt="numbers"
      />
      <div className="addition-section-container">
        <form onSubmit={onCheck} className="form">
          <span className="number">{firstNumber}</span>
          <AiOutlinePlus className="operator" />
          <span className="number">{secondNumber}</span>
          <PiEqualsLight className="operator" />
          <input
            type="text"
            className="user-input"
            onChange={onChangeUserInput}
            value={userInput}
          />
          <div className="button-container">
            <button type="submit" className="button">
              Check
            </button>
            <button onClick={onRestart} type="button" className="button">
              Restart
            </button>
          </div>
        </form>
        {bool && <p className="game-result">{showResult}</p>}
      </div>
    </div>
  )
}

export default AdditionGame
