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

  .customModalNews {
    background-color: ${props => props.theme.pallete.background.main};
    color: ${props => props.theme.pallete.background.text};

    box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.2);
    border-left: 14px solid #E9FF00;

    .modal-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      text-align: center;

      h3 {
        font-weight: 800;
      }

      p {
        font-size: 1.3em;
      }

    }
  }
`
