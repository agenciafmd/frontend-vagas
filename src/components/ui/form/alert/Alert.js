import styles from "./Alert.module.sass";

import { BsCheckLg, BsFillExclamationTriangleFill } from "react-icons/bs";

function Alert(props) {
	const typeAlert = props.typeAlert;

	return (
		<>
			{typeAlert === 1 && (
				<div className={`${styles.alert_default} ${styles.alert_success}`}>
					<span className={styles.alert_icon}>
						<BsCheckLg />
					</span>
					{props.msgAlert}
				</div>
			)}

			{typeAlert === 2 && (
				<div className={`${styles.alert_default} ${styles.alert_error}`}>
					<span className={styles.alert_icon}>
						<BsFillExclamationTriangleFill />
					</span>
					{props.msgAlert}
				</div>
			)}
		</>
	);
}

export default Alert;
