import React from 'react';
import PropTypes from 'prop-types';
import { TextArea, TextAreaContainer } from './style'

const TextAreaComponent = props => {
    return (
        <TextAreaContainer>
            <TextArea onChange={e => {props.handleChange(e.target.value)}} placeholder={props.placeholder}></TextArea>
        </TextAreaContainer>
    );
};

TextArea.propTypes = {
    
};

export default TextAreaComponent;