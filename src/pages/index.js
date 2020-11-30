import React from "react"
import styled from "styled-components"

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;

  .head {
    background: #f5d6e0;
    border: 1px solid palevioletred;
    border-radius: 50% 50% 50% 50% / 65% 65% 40% 40%;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 0;
  }

  .face {
    width: 150px;
    height: 50px;
    position: absolute;
    top: 45%;
    left: -23%;
    display: flex;
    animation-name: face;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transform: translateZ(100px) rotateZ(90deg) rotateX(-45deg);
  }

  .eye1 {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    background: palevioletred;
  }

  .eye2 {
    background: palevioletred;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .mouth {
    width: 50px;
    height: 50px;
    border-radius: 50% 50% 50% 50% / 0% 0% 100% 100%;
    position: relative;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
    background-color: palevioletred;
    bottom: 0;
  }

  @keyframes face {
    0% {
      opacity: 1;
    }
    50% {
      transform: translateZ(100px) translateY(-20px) translateX(210px)
        rotateZ(90deg) rotateX(90deg) rotateY(-10deg);
      opacity: 1;
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .body {
    background: #f5d6e0;
    border: 1px solid palevioletred;
    width: 100px;
    height: 125px;
    border-radius: 50% 50% 50% 50% / 76% 80% 20% 24%;
    clip-path: polygon(0 10%, 100% 10%, 100% 100%, 0% 100%);
    position: absolute;
    animation-name: body;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    z-index: -1;
    bottom: 20px;
    left: 20px;
    transform: rotate(60deg) rotateX(-90deg);
  }

  @keyframes body {
    19% {
      z-index: -1;
    }
    20% {
      z-index: 1;
      transform: rotate(60deg) rotateX(0deg);
      left: -80px;
      bottom: -30px;
    }
    60% {
      transform: rotateZ(-60deg);
      left: 230px;
      bottom: -30px;
      z-index: 1;
    }
    61% {
      z-index: -1;
    }
    80% {
      transform: rotateZ(-60deg) rotateX(90deg);
      z-index: -1;
    }
    100% {
    }
  }

  .eye-container {
    width: 50px;
  }
`

export default function Home() {
  return (
    <Loading>
      <p>Loading Icon:</p>
      <br />
      <div className="head">
        <div className="face">
          <div className="eye-container">
            <div className="eye1"></div>
          </div>
          <div className="mouth"></div>
          <div className="eye-container">
            <div className="eye2"></div>
          </div>
        </div>
      </div>
      <div className="body" />
    </Loading>
  )
}
