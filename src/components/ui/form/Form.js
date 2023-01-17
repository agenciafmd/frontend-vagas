import styles from "./Form.module.sass";
import arte from "../../../assets/images/skins/art-newsletter.webp";

import React, { useState } from "react";
import Axios from "axios";
import Input from "./input/Input";
import Button from "./button/Button";
import Alert from "./alert/Alert";

function Form() {
	const [disable, setDisable] = useState(false);
	const [statusMSG, setStatusMSG] = useState("");

	//SET API URL
	const url = "https://sejafranqueado.afcredito.com.br/APIv2/sendermail_v3.php";

	//SET VALUES
	const [data, setData] = useState({
		name: "",
		email: "",
	});

	//GET INPUT VALUES
	function handle(e) {
		const newData = { ...data };
		newData[e.target.name] = e.target.value;
		setData(newData);
		//console.log(newData);
	}

	//SUBMIT FORM FUNCIONT
	function submit(e) {
		e.preventDefault();
		Axios.post(url, {
			name: data.name,
			email: data.email,
		})
			.then((res) => {
				setDisable(true);

				setStatusMSG({ type: "success" });

				const timer = setTimeout(() => {
					setStatusMSG("");
				}, 3000);
				return () => clearTimeout(timer);

				//console.log(res.data);
			})
			.catch((err) => {
				setStatusMSG({ type: "error" });
				console.log(`error`, err.data);

				const timer = setTimeout(() => {
					setStatusMSG("");
				}, 3000);

				return () => clearTimeout(timer);
			});
	}

	return (
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<img src={arte} alt="" className={styles.art_animated} />
			</div>

			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align_center">
				<div className={styles.content_form}>
					<h1 className="sec_title">
						<span>Assine nossa</span> <br />
						newsletter
					</h1>
					<form onSubmit={(e) => submit(e)} className={styles.form_default}>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className={styles.form_box}>
									<Input
										typeInput="text"
										placeholderInput="Nome e sobrenome"
										requiredInput={true}
										inputName="name"
										handleChange={(e) => handle(e)}
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className={styles.form_box}>
									<Input
										typeInput="email"
										placeholderInput="Seu melhor e-mail"
										requiredInput={true}
										inputName="email"
										handleChange={(e) => handle(e)}
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<Button
									typeButton="submit"
									textButton="Assinar Newsletter"
									disabledAriaAtt={disable}
									disabledAtt={disable}
								/>

								{statusMSG?.type === "success" && (
									<Alert
										typeAlert={1}
										classAlert="alert_success"
										msgAlert="Inscrição realizada com sucesso!"
									/>
								)}
								{statusMSG?.type === "error" && (
									<Alert
										typeAlert={2}
										classAlert="alert_error"
										msgAlert="Falha ao tentar se inscrever!"
									/>
								)}
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
