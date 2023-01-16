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
`;