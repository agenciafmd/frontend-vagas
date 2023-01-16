import styled from "styled-components";

export const Container = styled.header`
background-color: var(--color-black);
width: 100%;
display: block;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: space-between;
position:fixed;
z-index:3;

    div{
    width: 0rem;
    height: 5rem;
        img{
            height:100%
        }
    }

    .link{
    width:80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
        a{
        font-size: 1.1rem;
        color :var(--color-green);
        }
    }
`;
