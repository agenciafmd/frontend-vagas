import styles from "./CardTeams.module.sass";
import karambit from "../../../../assets/images/skins/karambit.webp";

import { useState, useEffect } from "react";

import GridTeams from "./GridTeams/GridTeams";
import SliderTeams from "./SliderTeams/SliderTeams";

function CardTeams() {
	const [windowSize, setWindowSize] = useState([window.innerWidth]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});

	return (
		<>
			<img
				src={karambit}
				alt="Skin Karambit"
				className={styles.karambit_animated}
			/>
			<div className="text_center">
				<h1 className="sec_title">
					<span>Vencedores</span> de Major
				</h1>
				<p className="sec_text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium
					arcu quis erat placerat <br />
					pellentesque. Vestibulum sed pretium diam, sed mollis leo. Curabitur
					vestibulum molestie dapibus.
				</p>
			</div>

			{windowSize >= 768 ? <GridTeams /> : <SliderTeams />}
		</>
	);
}

export default CardTeams;
