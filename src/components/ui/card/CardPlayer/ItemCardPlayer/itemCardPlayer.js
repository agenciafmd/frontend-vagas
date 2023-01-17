import styles from "./itemCardPlayer.module.sass";

import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from "react-icons/ai";

function ItemCardPlayer(props) {
	return (
		<div className={styles.card_player}>
			<div
				className={styles.card_photo}
				style={{ backgroundImage: `url(${props.bg_photo_player})` }}
			>
				<img src={props.playerImg} alt="" />
			</div>
			<div className={styles.card_data}>
				<h3>
					{props.playerName} <span>"{props.playerNick}"</span>{" "}
					{props.playerLastName}
				</h3>
				<div className="row">
					<div className="col-lg-7 col-md-8 col-sm-8 col-xs-8">
						<span className={styles.card_nation}>
							<img src={props.playerFlag} alt="" />
							{props.playerNation}
						</span>
					</div>

					<div className="col-lg-5 col-md-4 col-sm-4 col-xs-4 flex_end">
						<span className={styles.player_age}>Idade: {props.playerAge}</span>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className={styles.card_social}>
							<li>
								<AiOutlineFacebook />
							</li>
							<li>
								<AiOutlineInstagram />
							</li>
							<li>
								<AiOutlineTwitter />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCardPlayer;
