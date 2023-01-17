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

@media screen and (max-width: 1024px) {
    height :15rem;
    width: 10rem;
    padding:1rem;
    margin:  1rem;


    h1{
        font-size:1.15rem;
        font-weight:bold
    }

    h2,h3{
        font-size:1rem;
        margin-top:.3rem
    }

}

@media screen and (max-width: 600px) {
    height :12rem;
    width: 15rem;
    padding:.8rem;
    margin:  1rem;


    h1{
        font-size:.85rem;
        font-weight:bold
    }

    h2,h3{
        font-size:.75rem;
        margin-top:.2rem
    }

    div{
        margin-top:1rem;
    }

}

`;
