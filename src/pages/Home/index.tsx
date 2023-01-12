import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <h1>Lorem Ipsum</h1>
      <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      </p>
      <label>Receba novidades por e-mail</label>
      <div className="content">
        <button>Cadastrar-se</button>
        <input type='email' placeholder='E-mail' />
        <input type='text' placeholder="Nome" />
      </div>
    </Container>
  );
}

export default Home;