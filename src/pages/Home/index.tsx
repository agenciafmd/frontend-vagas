import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <h1>Lorem Ipsum</h1>
      <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      </p>
      <label>Receive news by email</label>
      <div className="content">
        <button>register</button>
        <input type='email' placeholder='E-mail' />
        <input type='text' placeholder='Name' />
      </div>
    </Container>
  );
}

export default Home;