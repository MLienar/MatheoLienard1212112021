import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

import Header from './components/common/Header'
import Sidebar from './components/common/Sidebar'

import styled from "styled-components"

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1 1 auto;
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Main>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

