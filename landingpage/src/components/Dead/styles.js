import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
margin:4rem 0 2rem 0;

.title{
 font-size:3rem;
 color: var(--color-black);
}

.carrossel{
  margin-top: 2rem;
  width:90%;
}

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
  margin:3rem 0 2rem 0;

  .title{
  font-size:2rem;
  }

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
  margin:2rem 0 1rem 0;

  .title{
  font-size:1.5rem;

  }

  .cards{
    margin-top: 1rem;
  }

  .carrossel{
  width:65%;
  }

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