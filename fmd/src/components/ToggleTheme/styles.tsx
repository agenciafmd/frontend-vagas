import styled, { css } from 'styled-components';

export const Label = styled.label`
    ${() => css`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 0;
    font-size:0;
    overflow: hidden;
    color:rgba(0,0,0,0);
    `}
`;
export const Input = styled.input`
    ${({ theme }) => css`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider}{
        background: ${theme.colors.primaryColor};
    }

    &:checked + ${Slider}:before{
        content: '';
        transform: translateX(23.2px);
        background-color: ${theme.colors.secondaryColor};
    }
    `}
`;
export const Slider = styled.span`
    ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.primaryColor};
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    border-radius: 25px;
    &:before{
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 1px;
        bottom: 2.51px;
        background-color: ${theme.colors.secondaryColor};
        transition: all 300ms ease-in-out;
        border-radius: 50%;
    }
    `}
`;
