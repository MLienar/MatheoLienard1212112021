import React from 'react';
import '../App.css';

import UserGreeting from '../components/home/UserGreeting';
import TextEval from '../components/home/TextEval';
import KeyDataContainer from '../components/home/KeyDataContainer';
import DailyActivity from '../components/home/DailyActivity';
import AverageSession from '../components/home/AverageSessions';
import PhysicalStats from '../components/home/PhysicalStats';

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
  align-items: stretch;
  gap: 30px;
`

const SmallGraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  align-self: center;
`

const SmallGraph1 = styled(SmallGraph)`
  grid-area: 2 / 1 / 3 / 2;
`

const SmallGraph2 = styled(SmallGraph)`
  grid-area: 2 / 2 / 3 / 3;
`

const SmallGraph3 = styled(SmallGraph)`
  grid-area: 2 / 3 / 3 / 4;
`


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 30px;
  flex: 3 1 66%;
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
          <SmallGraph1>
            <AverageSession/>
          </SmallGraph1>
          <SmallGraph2>
            <PhysicalStats/>
          </SmallGraph2>
          <SmallGraph3>
            <PhysicalStats/>
          </SmallGraph3>
          <SmallGraph></SmallGraph>
        </Grid>
        <KeyDataContainer/>
      </Dashboards>
    </MainScreen>
  );
}

export default Home;
