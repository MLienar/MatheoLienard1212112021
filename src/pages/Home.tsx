/** 
 * @module HomePage
 */

import React from 'react';
import '../App.css';

import UserGreeting from '../components/home/UserGreeting';
import TextEval from '../components/home/TextEval';
import KeyDataContainer from '../components/home/KeyDataContainer';
import DailyActivity from '../components/home/DailyActivity';
import AverageSession from '../components/home/AverageSessions';
import PhysicalStats from '../components/home/PhysicalStats';
import TodayScore from '../components/home/TodayScore';
import styled from 'styled-components';

import { useState  } from 'react';
import ErrorComponent from '../components/common/Error';

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, 50%);
  grid-gap: 30px;
  flex: 3 1 66%;
  width: 100%;
`

function Home() {

  const [error, setError] = useState(false)

  const handleError = (errorData:boolean) => {
    setError(errorData)
  }

  return (
    <MainScreen>

      <Header>
        <UserGreeting handleError={ handleError }/>
        <TextEval />
      </Header>
      <Dashboards>
        { error && (
          <ErrorComponent errorMessage="Impossible de joindre le serveur"/>
        )}
        <Grid>
          <DailyActivity handleError={ handleError }/>
          <SmallGraph1>
            <AverageSession handleError={ handleError }/>
          </SmallGraph1>
          <SmallGraph2>
            <PhysicalStats handleError={ handleError }/>
          </SmallGraph2>
          <SmallGraph3>
            <TodayScore  handleError={ handleError }/>
          </SmallGraph3>
        </Grid>
        <KeyDataContainer handleError={ handleError }/>
      </Dashboards>
    </MainScreen>
  );
}

export default Home;
