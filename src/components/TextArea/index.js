import React from 'react';
import { TextArea, TextAreaContainer } from './style'

const TextAreaComponent = props => {
    return (
        <TextAreaContainer>
            <TextArea onChange={e => {props.handleChange(e.target.value)}} placeholder={props.placeholder}></TextArea>
        </TextAreaContainer>
    );
};

export default TextAreaComponent;