import React, { Component } from 'react';
import './App.css';
import Legends from './components/legends';
import Loader from 'react-loader-spinner'
import styled from "styled-components";


class App extends Component {


  render() {

    const Container = styled.div `

    .app {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      padding: 1em;
      color: white;
    }
    .Header {
      color: #443e3e;
      text-shadow: 1px 1px 5px #fff;
    }
    .legendBG {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }    
    .legendBG {
      background: url(./images/sWarsBG.gif);
      background-size: fill;
    }    
    .header {
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      word-spacing: .3em;
      margin-bottom: 1rem;
      position: relative;
      text-shadow: 2px 2px #000000;
      cursor: pointer;
      top: 0;
      text-shadow: 0 0 4px rgb(9, 218, 255);  color: transparent;
    }    
    
    `

    return (
      <Container>
        <React.Fragment>

          <div className="legendBG">

            <div className="app">
              
              <div className="header">
                
                <h1>CGTV</h1>                
              
              </div>

              <Legends />
            
            </div>

          </div>

        </React.Fragment>
      </Container>
    );

  }
  
}

export default App;