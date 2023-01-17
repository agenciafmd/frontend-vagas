import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
margin:4rem 0 2rem 0;
background-color: var(--color-black);
padding: 2rem;

h1{
    font-size:2.5rem;
    color:var(--color-green);
    margin: 0 2rem;
}

form {
  display: flex;
  width:25%;

input::placeholder {
  color: var(--color-black);
}
input {
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background: var(--color-white);
  border: .2rem solid var(--color-green);
  color: var(--color-black);
  margin: 0 1rem;
  font-size:1rem;

}

button {
  width: max-content;
  display: inline-block;
  color: var(--color-black);
  padding: 0.5rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  background: var(--color-green);
  transition: var(--transition);
  border: 1px solid var(--color-black);
  font-size:1rem

}

button:hover{
  border: 1px solid var(--color-white);
  color: var(--color-white);
}
}


@media screen and (max-width: 1024px) {
  margin:2rem 0 0 0;
  padding: 1.5rem;

  h1{
      font-size:2rem;
      margin: 0 ;
  }

  form {
    display: flex;
    width:50%;
  input {
    padding: .75rem;
    font-size:.8rem;

  }

  button {
    padding: 0.5rem 1rem;
  }
  }

}

@media screen and (max-width: 600px) {
  
  margin:2rem 0 0.5rem 0;
  padding: 1rem;

  h1{
      font-size:1rem;
      margin: 0 .75rem;
  }

  form {
    width:100%;
  input {
    width: 100%;
    padding: .25rem;
    border: .15rem solid var(--color-green);
    margin: 0 .5rem;
    font-size:.75rem;

  }

  button {
    padding: 0.5rem .5rem;
    font-size:.75rem

  }
  }
}
`;