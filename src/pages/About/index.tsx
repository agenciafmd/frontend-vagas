import { Container } from "./styles";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti cumque minima quasi odit consequuntur, dignissimos enim culpa amet animi id sed iste facilis tempora libero dolores facere? Nihil, labore!
      </p>
      <div className="options">
        <button className='free'>FREE</button>
        <button className='premium'>PREMIUM <span>U$ 5,00</span></button>
      </div>
    </Container>
  );
};

export default About;