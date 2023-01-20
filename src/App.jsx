import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
