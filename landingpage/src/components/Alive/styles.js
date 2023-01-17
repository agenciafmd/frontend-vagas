import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
margin-top:4rem;

.title{
 font-size:3rem;
 color: var(--color-black);
}

.cards{
  margin-top: 2rem;
  display:flex;
  width:100%;
  height:100%;
  justify-content:center;

}

@media screen and (max-width: 1024px) {
  margin-top:3rem;

  .title{
  font-size:2rem;
  }

}

@media screen and (max-width: 600px) {
  margin-top:2rem;

  .title{
  font-size:1.5rem;

  }

  .cards{
    margin-top: 1rem;
    flex-direction:column;
    align-items: center;

  }

}

`;