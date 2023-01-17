import styled from "styled-components";

export const Item = styled.div`
margin-top:6rem;
display:flex;
justify-content: center;
align-items: center;
height: 80%;
width:90%;
color:var(--color-black);
font-size:2rem;

img{
 width:100%;
}

@media screen and (max-width: 1024px) {
  margin-top:2rem
}

@media screen and (max-width: 600px) {
  margin-top: 1rem

}
`;

export const Container = styled.div`
padding: 0 2rem;
button.rec-dot{
  background-color: var(--color-green);
  box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5);
}

button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
  box-shadow: 0 0 1px 3px rgba(235,16,16,0.5);
}

button.rec-arrow:hover, button.rec-arrow:active, button.rec-arrow:focus {
    background-color: var(--color-green);
 
}

@media screen and (max-width: 1024px) {

  button.rec-dot:hover{
    width: .9rem;
    height:.9rem;
  }

  button.rec-arrow{
    font-size: 1rem;
    min-width: 3rem;
    width: 3rem;
    height:3rem;
    line-height:0;
  }

}

@media screen and (max-width: 600px) {
  button.rec-dot{
    width: .5rem;
    height:.5rem;
  }

  button.rec-dot:hover{
    width: .8rem;
    height:.8rem;
  }

  button.rec-arrow{
    font-size: .8rem;
    min-width: 2rem;
    width: 2rem;
    height:2rem;
    line-height:0;

  }
}
`;