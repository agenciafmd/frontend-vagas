import styles from "./home.module.sass";

import SimpleSlider from "../../components/ui/slider/Slider";
import CardPlayer from "../../components/ui/card/CardPlayer/CardPlayer";
import CardTeams from "../../components/ui/card/CardTeams/CardTeams";
import Form from "../../components/ui/form/Form";

function Home() {
	return (
		<div className={styles.home_default}>
			<section id="destaques" className={styles.sec_banner}>
				<SimpleSlider />
			</section>

			<section id="proplayers" className={styles.sec_proplayer}>
				<div className="inner_content">
					<CardPlayer />
				</div>
			</section>

			<section id="majors" className={styles.sec_major}>
				<div className="inner_content">
					<CardTeams />
				</div>
			</section>

			<section id="noticias" className={styles.sec_newsletter}>
				<div className="inner_content">
					<Form />
				</div>
			</section>
		</div>
	);
}

export default Home;
