import React from 'react';
import '../App.css';

import UserGreeting from '../components/home/UserGreeting';
import TextEval from '../components/home/TextEval';
import KeyDataContainer from '../components/home/KeyDataContainer';

import styled from 'styled-components';

const MainScreen = styled.main`
  padding: 5vh 7vw;
`

const Header = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 7vh;
`

const Dashboards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

function Home() {
  return (
    <MainScreen>
      <Header>
        <UserGreeting />
        <TextEval />
      </Header>
      <Dashboards>
        <KeyDataContainer/>
      </Dashboards>
    </MainScreen>
  );
}

export default Home;
