import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  padding: 0 2em;
  box-sizing: border-box;
  border: none;
  text-transform: uppercase;
  height: 45px;
  font-size: 16px;

  &:hover {
    background-color: #222;
  }

  &:active {
    /* border: 3px solid #777; */
    background-color: #84c3be;
  }

  &:focus {
    outline: none;
    border-bottom: 3px #84c3be solid;
  }
`

export default ButtonStyled;
