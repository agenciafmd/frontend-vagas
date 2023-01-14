import styled, { css } from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
   width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Indicator = styled.div<{ active: boolean; onClick: () => void }>`

${({ theme, active }) => css`width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  border: ${theme.colors.primaryColor} 1px solid;
  background-color: ${
    active ? `${theme.colors.secondaryColor}` : `${theme.colors.primaryColor}`
  };
  cursor: pointer;
`}`;

export const IndicatorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
position: absolute;
bottom: 1.95rem;
left: 1rem;
`;

export const NextAndPrevContainer = styled.div`
  ${({ theme }) => css`
  position: absolute;
  bottom: 0;
  right: 1rem;
  color:${theme.colors.primaryColor};
  `}
`;

export const ArrowBTN = styled.button`
${({ theme }) => css`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 32px;
  color:${theme.colors.primaryColor};
  &:hover{
    cursor: pointer;
  }
  `}
`;
