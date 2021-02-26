import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'styled-components';
import { ChallangesProvider } from '../contexts/ChallengesContext';

import { CountdownProvider } from '../contexts/CountDownContext';

import ExperienceBar from '../components/ExperienceBar';

import GlobalStyle from '../assets/GlobalStyles';
import theme from '../assets/Theme';

import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import LevelUpModal from '../components/LevelUpModal';

import { Container, LeftContainer } from './styled';

export default function Home(props) {
  return (
    <ChallangesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <GlobalStyle />

        <Container>
          <ExperienceBar />

          <CountdownProvider>
            <LeftContainer>

              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>

              <div>
                <ChallengeBox />
              </div>

            </LeftContainer>
          </CountdownProvider>

        </Container>

        <LevelUpModal />

      </ThemeProvider>
    </ChallangesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}