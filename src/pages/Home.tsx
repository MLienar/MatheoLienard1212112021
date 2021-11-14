import React from 'react';
import '../App.css';

import UserGreeting from '../components/home/UserGreeting';
import TextEval from '../components/home/TextEval';
import KeyDataContainer from '../components/home/KeyDataContainer';
import DailyActivity from '../components/home/DailyActivity';

import styled from 'styled-components';

const MainScreen = styled.main`
  padding: 5vh 7vw;
  width: 100%;
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  flex: 3 1 70%;
  width: 100%;
`

function Home() {
  return (
    <MainScreen>
      <Header>
        <UserGreeting />
        <TextEval />
      </Header>
      <Dashboards>
        <Grid>
          <DailyActivity />
        </Grid>
        <KeyDataContainer/>
      </Dashboards>
    </MainScreen>
  );
}

export default Home;
