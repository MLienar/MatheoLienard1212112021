import React from 'react';
import '../App.css';
import UserGreeting from '../components/home/UserGreeting';

import styled from 'styled-components';

const MainScreen = styled.main`
  padding: 5vh 5vw;
`

function Home() {
  return (
    <MainScreen>
         <UserGreeting />
    </MainScreen>

  );
}

export default Home;
