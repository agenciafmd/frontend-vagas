import styles from "./Input.module.sass";

function Input(props) {
	return (
		<input
			className={styles.input_default}
			type={props.typeInput}
			placeholder={props.placeholderInput}
			id={props.id}
			required={props.requiredInput}
			name={props.inputName}
			onChange={props.handleChange}
			value={props.valueName}
		/>
	);
}

export default Input;
