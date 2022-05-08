import React, { useState } from 'react'
import Button from './components/Button'
import Screen from './components/Screen'
import ResetButton from './components/ResetButton'
import DeleteButton from './components/DeleteButton'
import './App.css'
import { evaluate } from 'mathjs'

function App () {
  const [input, setInput] = useState('')

  const inputHandler = (val) => {
    setInput(input + val)
  }

  const result = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Please enter values for evaluate')
    }
  }

  return (
    <div className='container'>
    <div className='calculator-container'>
      <Screen input={input}/>
      <div className='row'>
      <Button clickHandler={inputHandler}>7</Button>
      <Button clickHandler={inputHandler}>8</Button>
      <Button clickHandler={inputHandler}>9</Button>
      <Button clickHandler={inputHandler}>+</Button>
      </div>
      <div className='row'>
      <Button clickHandler={inputHandler}>4</Button>
      <Button clickHandler={inputHandler}>5</Button>
      <Button clickHandler={inputHandler}>6</Button>
      <Button clickHandler={inputHandler}>-</Button>
      </div>
      <div className='row'>
      <Button clickHandler={inputHandler}>1</Button>
      <Button clickHandler={inputHandler}>2</Button>
      <Button clickHandler={inputHandler}>3</Button>
      <Button clickHandler={inputHandler}>*</Button>
      </div>
      <div className='row'>
      <Button clickHandler={inputHandler}>0</Button>
      <Button clickHandler={inputHandler}>.</Button>
      <Button clickHandler={inputHandler}>%</Button>
      <Button clickHandler={inputHandler}>/</Button>
      </div>
      <div className='row'>
      <ResetButton resetHandler={() => setInput('')}>AC</ResetButton>
      <DeleteButton deleteHandler={() => setInput(input.slice(0, -1))}>C</DeleteButton>
      <Button clickHandler={result}>=</Button>
      </div>
    </div>
    </div>
  )
};

export default App
