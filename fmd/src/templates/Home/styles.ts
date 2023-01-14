import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
overflow-x: hidden;
background-color: ${theme.colors.secondaryColor};
`}
`;
