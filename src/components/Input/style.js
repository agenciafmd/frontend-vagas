import styled from 'styled-components'

export const InputContainer = styled.input`
  all: unset;

  padding: 11px 16px;
  margin-bottom: 6px;
  gap: 10px;

  width: 244px;

  border: 1px solid ${props => props.theme.pallete.secondary.main};
  border-radius: 20px;
  transition: 0.4s;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 30px;

  p {
    color: ${props => props.theme.pallete.error.main};
    font-size: 0.9em;

    position: absolute;
    bottom: -40px;
  }
`
