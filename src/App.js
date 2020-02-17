import React, { useState } from 'react';
import './style/style.css'
import { AppContainer } from './style/style'
import { TextAreaComponent, SelectEncode } from './components'

const App = () => {
  const [Result, setResult] = useState()
  const handleChange = text => {
    setResult(text)
  }

  const encodeNextLetter = (text) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  return (
    <div className="App">
    <AppContainer>
      <TextAreaComponent handleChange={handleChange} placeholder={"Ecrivez votre message à encoder"}/>
      <SelectEncode />
      <p>{Result}</p>
    </AppContainer>
    </div>
  );
 }


export default App;
