import styles from "./itemSlick.module.sass";
import { GiCrosshair, GiSilverBullet } from "react-icons/gi";

function itemSlick(props) {
	return (
		<div className={`${styles.slick_item} ${styles[props.classItem]}`}>
			<div className="row">
				<div className="col-lg-8 col-sm-8 col-xs-12 align_center">
					<div className={styles.player_info_slick}>
						<img
							src={props.OrgImg}
							alt={props.OrgImgAlt}
							className={styles.logoOrg}
						/>

						<div className={styles.player_data}>
							<h2>{props.playerNick}</h2>
							<h3>{props.playerName}</h3>
							<p>{props.playerInfos}</p>
						</div>

						<div className={styles.item_grid_info}>
							<div className={styles.item_grid_item}>
								<div className={styles.item_grid_icon}>
									<GiCrosshair />
								</div>

								<div className={styles.item_grid_data}>
									<h4>Posição</h4>
									<p>{props.playerPosition}</p>
								</div>
							</div>

							<div className={styles.item_grid_item}>
								<div className={styles.item_grid_icon}>
									<GiSilverBullet />
								</div>

								<div className={styles.item_grid_data}>
									<h4>ADR</h4>
									<p>{props.playerADR}</p>
								</div>
							</div>
						</div>
					</div>

					<img
						src={props.playerImgUrl}
						alt="Pro Player"
						className={styles.player_foto}
					/>
				</div>

				<div className="col-lg-4 col-sm-4 col-xs-12">
					<div className={styles.symbol_area}>
						<img src={props.symbolOrgImg} alt="Simbolo Time" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default itemSlick;
