import { useScroll, useTransform } from "framer-motion";

import { Container } from "./styles";

const Header = () => {
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  );

  const btnMobile = document.getElementById('btn-mobile');
  btnMobile?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav?.classList.toggle('active');
  }

  return (
    <Container style={{ y: headerY }}>
      <h1 id='logo'>Logo</h1>
      <nav id='nav' >
        <button
          id='btn-mobile'
          onClick={() => toggleMenu()}
        >
          <span id='hamburger'></span>
        </button>
        <ul id='menu'>
          <li><a href='/'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#headlines'>Top headlines</a></li>
          <li><a href='#news'>News</a></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;