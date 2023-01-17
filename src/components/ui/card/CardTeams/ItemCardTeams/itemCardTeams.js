import { BsStar } from "react-icons/bs";

import styles from "./itemCardTeams.module.sass";

function ItemCardTeams(props) {
	const n = props.majorQTD;

	return (
		<div className={styles.card_team}>
			<div className={styles.card_photo}>
				<img src={props.teamImg} alt="" />
			</div>
			<div className={styles.card_data}>
				{Array.from({ length: n }, (_, i) => (
					<span className={styles.major_stars} key={i}>
						<BsStar />
					</span>
				))}
			</div>
		</div>
	);
}

export default ItemCardTeams;
