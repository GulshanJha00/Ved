"use client";
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  textToDisplay?: string;
};

const StyleButton1: React.FC<ButtonProps> = ({ textToDisplay = "Default Text" }) => {
  return (
    <StyledWrapper className="learn-more flex justify-center rowdies-regular">
      <button className='Btn '>{textToDisplay}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 15rem;
    height: 3rem;
    margin-top: 1rem;
    border: none;
    
    border-radius: 10px;
    background: linear-gradient(to right,#650a77,#ff77d6,#770a53,#650a77,#ff77d6,#650a77);
    background-size: 250%;
    background-position: left;
    color: #ffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
  }

  .Btn::before {
    position: absolute;
    /* content: "SUBSCRIBE"; */
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    /* background-color: #007272; */
    background-size: 200%;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }`;

export default StyleButton1;
