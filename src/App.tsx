import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/global';
import FirstAndSecond from './components/FirstAndSecond';

import { Main, Section, Sticky } from './styles';
import NewsBitcoin from './components/NewsBitcoin';
import NewsEverything from './components/NewsEverything';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>
        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" id='headlines' >
            <NewsBitcoin />
          </Sticky>
        </Section>
        <Section style={{ height: '10.1%%' }}>
          <Sticky className="fourth" id='news' >
            <NewsEverything />
          </Sticky>
        </Section>
      </Main>
      <Footer />
    </>
  )
}

export default App;
