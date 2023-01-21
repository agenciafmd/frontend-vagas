import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  position: absolute;
  padding: 20px 80px;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.pallete.background.second};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
    background: ${props => props.theme.pallete.background.second};
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 834px) {
    padding: 20px 40px;
  }

  @media (max-width: 576px) {
    padding: 30px 16px;
  }
`

export const MainContainer = styled.main`
  max-width: 1280px;
  padding: 0;
`

export const FooterContainer = styled.footer`
  padding: 40px 80px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.pallete.background.footer};
  color: ${props => props.theme.pallete.primary.main};

  span {
    font-size: 1.4em;
    line-height: 1.7em;
    letter-spacing: 0.04em;
  }

  @media (max-width: 576px) {
    padding: 40px 16px;
  }
`

export const FooterBoxInfos = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 834px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3em;
  }
`

export const FooterBoxLogo = styled.div`
  width: 258px;

  text-align: center;

  position: absolute;
  bottom: 0;

  background: ${props => props.theme.pallete.secondary.main};

  h1 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.8em;
    letter-spacing: 0.04em;
  }
`
