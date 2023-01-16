import styled from "styled-components";

export const Container = styled.div`
height :25rem;
width: 20rem;
border-radius:.5rem;
padding:2rem;
margin:  2rem;
background-color: ${props => (props.alive ==="Alive" ? `var(--alive)` : `red`)};


h1{
    color:var(--color-black);
    font-size:1.35rem;
    text-align: center;
}

h2,h3{
    color:var(--color-black);
    font-size:1.15rem;
    margin-top:.5rem;
}

div{
    margin-top:1rem;
    width: 90%;
    

    img{
    width:100%
}
}

`;
