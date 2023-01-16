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

`;