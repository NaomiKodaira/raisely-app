import styled from 'styled-components';

const CardStyled = styled.div`
  position: absolute;
  background-color: #eee;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding: 2em;
  box-sizing: border-box;

  &::after {
    content: \"${props => props.footnote || ''}\";
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
    left: 0;
    bottom: 0;
    transform: translateY(
      ${props => (props.footnote ? 'calc(100% - 10px)' : 0)}
    );
    transition: transform 200ms;
    z-index: -1;
  }

  & h1 {
    margin-bottom: 1rem;
  }
`;

export default CardStyled;
