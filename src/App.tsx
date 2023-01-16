import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/global';
import FirstAndSecond from './components/FirstAndSecond';

import { Main, Section, Sticky } from './styles';
import NewsBitcoin from './components/NewsBitcoin';
import NewsEverything from './components/NewsEverything';
import TopHeadlinesDolar from './components/NewsDolar';
import BackToTheTop from './components/BackToTheTop/idex';

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
          <Sticky className="fourth" >
            <NewsEverything />
          </Sticky>
        </Section>
        <TopHeadlinesDolar />
        <div className='news-main'></div>
        <div className="hiddenX">
          <div className="news-content">
            <span>Breaking news</span>
          </div>
        </div>
      </Main>
      <Footer />
      <BackToTheTop />
    </>
  )
}

export default App;
