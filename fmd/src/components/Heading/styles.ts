import styled, { css } from 'styled-components';

export const Title = styled.h1`
${({ theme }) => css`
color: ${theme.colors.primaryColor};
padding: 5px;
margin: 5px;
`}
`;
