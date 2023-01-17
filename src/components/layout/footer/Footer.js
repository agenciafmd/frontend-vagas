import styles from "./Footer.module.sass";

import logo from "../../../assets/images/logo_valve.webp";

function Footer() {
	return (
		<div className={styles.footer_default}>
			<div className="inner_content">
				<div className="row">
					<div className={`col-lg-4 col-sm-2 col-xs-5 ${styles.order_m1}`}>
						<img src={logo} alt="Valve Logotipo" className={styles.logo} />
					</div>

					<div
						className={`col-lg-4 col-sm-8 col-xs-12 ${styles.order_m3} align_center`}
					>
						<h6 className={styles.copyright}>
							® 2022 | Valve - Todos os direitos reservados
						</h6>
					</div>

					<div
						className={`col-lg-4 col-sm-2 col-xs-7 ${styles.order_m2} flex_end`}
					>
						<h6 className={styles.development}>@Studio.VITTO</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
