import styled from "styled-components";

export const Container = styled.footer`
background-color: var(--color-white);
width: 100%;
display: block;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;

div{
    width: 20rem;
    height: 5rem;
        img{
            height:100%
        }
    }
    
    .link{
    width:80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
        a,h1{
            font-size: 1.15rem;
            color :var(--color-black); 
            margin-left:1rem;
            }

        a:hover,h1:hover{
            color:var(--color-green);
        }
    }

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 600px) {
    padding: 0.5rem 0;

    div{
        width:2rem;
        height: 3rem;
    }
        
    .link{
        a,h1{
            font-size: .8rem;
            margin-left:1rem;
            }
    }
}
`;
