import React, { useState, useEffect } from 'react';
import lodash from 'lodash'

const Select = (props) => {
    const [Value, setValue] = useState("1")

    useEffect(() => props.trigger(encodeNextLetter), [])
    useEffect(() => {switch (Value) {
        case "1":
            props.trigger(encodeNextLetter)
            break;
        case "2":
            props.trigger(encodePreviousLetter)
            break;
        default:
            props.trigger(encodeNextLetter)
            break;
    }
}, [Value])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const encodeNextLetter = (text) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let capitalText = text.toUpperCase()
        let result = ''
        for (let i = 0; i < capitalText.length; i++) {
            const letter = capitalText[i];
            if (alphabet.indexOf(letter) !== -1){
                if(alphabet.indexOf(letter) == 25){
                    result += 'a'
                } else {
                    let letterIndex = alphabet.indexOf(letter)
                    result = result + alphabet[letterIndex+1]
                }
            } else {
                result = result + letter
            }
        }
        return lodash.capitalize(result.toLowerCase())
    }
    const encodePreviousLetter = (text) => {
        // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return text + 'bobobobo'
    }

    return (
        <select value={Value} onChange={handleChange}>
            <option value="1">Prochaine lettre dans l'alphabet</option>
            <option value="2">Coming Soon</option>
        </select>
    );
};

export default Select;