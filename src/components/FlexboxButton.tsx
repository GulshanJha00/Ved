"use client";
import React from 'react';
import styled from 'styled-components';

type ButtonProps ={
  textToDisplay:string
}

const FlexBoxButton: React.FC<ButtonProps> = ({ textToDisplay = "Default Text" }) => {
  return (
    <StyledWrapper>
      <button className='px-8 py-2 rounded-2xl'>{textToDisplay}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    --color: #560bad;
    font-family: inherit;
    display: inline-block;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid white;
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    font-weight: 500;
    color: white;
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: white;
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #000000;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #fffdfd;
    transition: background 0s;
  }`;

export default FlexBoxButton;
