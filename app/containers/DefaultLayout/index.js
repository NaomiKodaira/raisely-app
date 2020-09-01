/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const DefaultLayoutStyled = styled.div`
  & > div.background {
    position: absolute;
    background-color: #000;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    overflow: hidden;
  }
`;

const up = size => keyframes`
0% {
  transform: translateY(0);
}

100% {
  transform: translateY(calc(-100vh + ${size}px));
}
`;

const FlyingSquaresStyled = styled.div`
  border-radius: 10px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #fff;
  opacity: ${props => props.opacity};
  position: absolute;
  bottom: 0;
  right: ${props => props.right}vw;
  animation: ${props => props.velocity * 1000}ms ${props => up(props.size)}
    infinite alternate linear;
`;

function DefaultLayout(props) {
  const { children } = props;

  const [squares, setSquares] = useState([]);

  const random = (max, min) => Math.random() * (max - min) + min;

  useEffect(() => {
    const times = random(10, 30);
    let s = [];
    for (let i = 0; i < times; i += 1) {
      s = [
        ...s,
        {
          size: random(20, 150),
          velocity: random(3, 25),
          opacity: random(0.05, 0.75),
          right: random(5, 95),
          rotation: random(1, 5),
        },
      ];
    }
    setSquares(s);
  }, []);

  // Verify token

  return (
    <DefaultLayoutStyled>
      <div className="background">
        {squares.map(s => (
          <FlyingSquaresStyled {...s} />
        ))}
      </div>
      {children && children}
    </DefaultLayoutStyled>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
