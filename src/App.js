import React, { useState } from 'react';
import './style/style.css'
import { AppContainer, ResultContainer } from './style/style'
import { TextAreaComponent, SelectEncode } from './components'

const App = () => {
  const [Text, setText] = useState('')
  const [Result, setResult] = useState('')
  const [currentFunc, setCurrentFunc] = useState((text) => text)
  
  const triggerFunction = (func) => {
    setResult(func(Text))
    setCurrentFunc(() => func)
  }

  const handleChange = text => {
    setText(text)
    setResult(currentFunc(text))
  }

  return (
    <div className="App">
    <AppContainer>
      <TextAreaComponent handleChange={handleChange} placeholder={"Ecrivez votre message à encoder"}/>
      <SelectEncode trigger={triggerFunction} />
      <ResultContainer>{Result}</ResultContainer>
    </AppContainer>
    </div>
  );
 }


export default App;
