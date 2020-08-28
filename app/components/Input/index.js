import React, { useState, useRef } from 'react';
import styled from 'styled-components'

const InputStyled = styled.div`
  position: relative;
  margin-bottom: 10px;
  height: 45px;
  height: ${props => props.error ? props.totalHeight : '45'}px;
  width: 100%;
  transition: height 200ms;
  box-sizing: border-box;

  & > div.input {
    position: absolute;
    background-color: #fff;
    height: 45px;
    border-radius: 10px;
    border: none;
    border-bottom: ${props => props.focused ? '2px #84c3be solid' : '0px #84c3be solid'};
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.5em 0.75em;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    z-index: 1;
    transition: border 200ms;

    &:focus {
      background-color: #222;
    }

    & > label{
      color: #707070;
      margin-right: 5px;
      white-space: nowrap;
    }

    & > input {
      width: 100%;
      font-size: 18px;
      border: none;
    }

    & > input:focus {
      outline: none;
    }
  }

  & > div.error {
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: #ccc;
    vertical-align: middle;
    font-size: 14px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;
    padding: calc(10px + 0.5em) 0.75em 0.5em;
    bottom: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #333;
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;
  }
`

function Input(props) {
  const { type, name, onChange, onBlur, value, label, error } = props

  const [focused, setFocused] = useState(false)
  const err = useRef(null)
  const input = useRef(null)

  return (
    <InputStyled
      focused={focused}
      error={error}
      totalHeight={45 + err.current?.clientHeight - 10}
    >
      <div className='error' ref={err}>
        <p>* {error}</p>
      </div>
      <div className='input' ref={input}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          onBlur={() => {setFocused(false); onBlur();}}
          onFocus={() => {setFocused(true)}}
          value={value}
        />
      </div>
    </InputStyled>
  );
}

export default Input;
