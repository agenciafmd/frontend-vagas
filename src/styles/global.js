import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    max-width: 100vw;

    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};

    background-color: ${props => props.theme.pallete.background.main};
    color: ${props => props.theme.pallete.primary.text};
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .customModal {
    background-color: ${props => props.theme.pallete.background.main};

    .modal-body {
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
