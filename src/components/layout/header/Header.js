import styles from "./Header.module.sass";
import logo from "../../../assets/images/logo_valve.webp";

import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BsStar, BsPerson, BsTrophy, BsNewspaper } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

function Header() {
	const [isActiveMenu, setActiveMenu] = useState("false");

	const handleToggle = () => {
		setActiveMenu(!isActiveMenu);
	};

	return (
		<div className={styles.header_default}>
			<div className="inner_content">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-5">
						<img src={logo} alt="Valve Logotipo" className={styles.logo} />
					</div>

					<div className="col-lg-10 col-md-10 col-sm-10 col-xs-7 flex_end">
						<button
							className={styles.button_menu_mobile}
							onClick={handleToggle}
						>
							<HiBars3 />
						</button>
						<nav
							className={`${styles.nav_default} ${
								isActiveMenu ? "nav_mobile_close" : styles.nav_mobile_open
							}`}
						>
							<button
								className={styles.button_menu_close}
								onClick={handleToggle}
							>
								<GrClose />
							</button>
							<ul>
								<li>
									<Link to="/#destaques">
										<BsStar /> Destaques
									</Link>
								</li>
								<li>
									<Link to="/#proplayers">
										<BsPerson /> Pro Players
									</Link>
								</li>
								<li>
									<Link to="/#majors">
										<BsTrophy /> Vencedores de Major
									</Link>
								</li>
								<li>
									<Link to="/#noticias">
										<BsNewspaper /> Notícias
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
