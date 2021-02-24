import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import ExperienceBar from '../components/ExperienceBar';

import GlobalStyle from '../assets/GlobalStyles';
import theme from '../assets/Theme';

import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import { Container, LeftContainer } from './styled';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <GlobalStyle />

      <Container>

        <ExperienceBar />

        <LeftContainer>

          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>

          </div>

        </LeftContainer>

      </Container>

    </ThemeProvider>
  )
}
