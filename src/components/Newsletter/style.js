import styled from 'styled-components'

export const NewsletterContainer = styled.div`
  padding: 100px 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    max-width: 330px;

    font-size: 3em;
    font-weight: 800;

    span {
      font-size: 1.25em;
    }
  }

  .error {
    border: 1px solid ${props => props.theme.pallete.error.main};
    transition: 0.4s;
  }
`

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const NewsletterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 21px 20px;

  width: 72px;
  height: 42px;

  background: ${props => props.theme.pallete.secondary.main};
  opacity: 0.5;
  border-radius: 20px;

  cursor: pointer;
`
