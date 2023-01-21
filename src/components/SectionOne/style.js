import styled from 'styled-components'

export const SectionOneContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 80px;

  position: relative;

  background-color: ${props => props.theme.pallete.background.main};

  @media (max-width: 576px) {
    padding: 40px 16px;
  }

  h2 {
    font-size: 3em;
    font-weight: 700;

    @media (max-width: 576px) {
      font-size: 1.7em;
    }
  }

  .bg--section_one {
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 576px) {
      top: 28%;
      left: -30%;
    }
  }
`

export const SectionOneCards = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(4, minmax(257px, 1fr));
  gap: 30px;

  a {
    text-decoration: none;
  }

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(257px, 1fr));
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(auto-fill, minmax(257px, 1fr));
  }
`
