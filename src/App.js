import "./App.css";
import "./App.sass";
import "./assets/libs/bootstrap/bootstrap.grids.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Container from "./components/layout/container/Container";
import Footer from "./components/layout/footer/Footer";

import Home from "./pages/home/index";

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
