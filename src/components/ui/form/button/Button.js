import styles from "./Button.module.sass";

function Button(props) {
	return (
		<button
			className={styles.button_default}
			type={props.typeButton}
			aria-disabled={props.disabledAriaAtt}
			disabled={props.disabledAtt}
		>
			{props.textButton}
		</button>
	);
}

export default Button;
