import styles from "./CardPlayer.module.sass";
import ak47 from "../../../../assets/images/skins/ak47.webp";

import ItemCardPlayer from "./ItemCardPlayer/itemCardPlayer";

//FALLEN DATA IMPORT
import imperialBG from "../../../../assets/images/teams/imperial-bg.webp";
import fallen from "../../../../assets/images/players/fallen.webp";
import flagBR from "../../../../assets/images/flags/brasil.webp";

//CADIAN DATA IMPORT
import heroicBG from "../../../../assets/images/teams/heroic-bg.webp";
import cadian from "../../../../assets/images/players/cadian.webp";
import flagDN from "../../../../assets/images/flags/denmark.webp";

//DEV1CE DATA IMPORT
import astralisBG from "../../../../assets/images/teams/astralis-bg.webp";
import device from "../../../../assets/images/players/dev1ce.webp";

//S1MPLE DATA IMPORT
import naviBG from "../../../../assets/images/teams/navi-bg.webp";
import simple from "../../../../assets/images/players/s1mple.webp";
import flagUK from "../../../../assets/images/flags/ukraine.webp";

function CardPlayer() {
	return (
		<>
			<img src={ak47} alt="Skin AK-47" className={styles.ak_animated} />
			<div className="text_center">
				<h1 className="sec_title">
					<span>Maiores</span> Pro Players
				</h1>
				<p className="sec_text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium
					arcu quis erat placerat <br />
					pellentesque. Vestibulum sed pretium diam, sed mollis leo. Curabitur
					vestibulum molestie dapibus.
				</p>
			</div>

			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<ItemCardPlayer
						bg_photo_player={imperialBG}
						playerImg={fallen}
						playerName="Gabriel"
						playerNick="Fallen"
						playerLastName="Toledo"
						playerFlag={flagBR}
						playerNation="Brasileiro"
						playerAge={32}
					/>
				</div>

				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<ItemCardPlayer
						bg_photo_player={heroicBG}
						playerImg={cadian}
						playerName="Casper"
						playerNick="cadiaN"
						playerLastName="Møller"
						playerFlag={flagDN}
						playerNation="Dinamarquês"
						playerAge={27}
					/>
				</div>

				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<ItemCardPlayer
						bg_photo_player={astralisBG}
						playerImg={device}
						playerName="Nicolai"
						playerNick="dev1ce"
						playerLastName="Reedtz"
						playerFlag={flagDN}
						playerNation="Dinamarquês"
						playerAge={27}
					/>
				</div>

				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<ItemCardPlayer
						bg_photo_player={naviBG}
						playerImg={simple}
						playerName="Oleksandr"
						playerNick="s1mple"
						playerLastName="K."
						playerFlag={flagUK}
						playerNation="Ucraniano"
						playerAge={25}
					/>
				</div>
			</div>
		</>
	);
}

export default CardPlayer;
