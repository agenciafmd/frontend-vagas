import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}

export default Home;
