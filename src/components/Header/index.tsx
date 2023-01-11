import { useScroll, useTransform } from "framer-motion";
import { Container } from "./styles";

const Header = () => {
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  );

  return (
    <Container
      style={{
        y: headerY
      }}
    />
  );
};

export default Header;