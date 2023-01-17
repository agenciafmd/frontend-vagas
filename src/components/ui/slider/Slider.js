import styles from "./Slider.module.sass";

//IMPORT BANNER ASSETS
import imperial from "../../../assets/images/logo_imperial.webp";
import imperialSymbol from "../../../assets/images/symbol_imperial.webp";
import chelo from "../../../assets/images/players/chelo.webp";

//IMPORT BANNER ASSETS
import heroic from "../../../assets/images/logo_heroic.webp";
import heroicSymbol from "../../../assets/images/symbol_heroic.webp";
import cadian from "../../../assets/images/players/cadiaN_slick.webp";

//IMPORT BANNER ASSETS
import spirit from "../../../assets/images/logo_spirit.webp";
import spiritSymbol from "../../../assets/images/symbol_spirit.webp";
import magixx from "../../../assets/images/players/magixx.webp";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import React, { Component } from "react";
import Slider from "react-slick";
import ItemSlick from "./ItemSlick/itemSlick";

//CUSTOM SLIDER BUTTON NAVIGATION
function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="customNextArrow" onClick={onClick}>
			<BsArrowRight />
		</div>
	);
}

//CUSTOM SLIDER BUTTONS NAVIGATION
function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="customPrevArrow" onClick={onClick}>
			<BsArrowLeft />
		</div>
	);
}

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			arrows: true,
			fade: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			infinite: true,
			dotsClass: "slick_dots_banner",
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
					},
				},
			],
		};

		return (
			<div className={styles.slider_default}>
				<Slider {...settings}>
					<ItemSlick
						OrgImg={imperial}
						playerNick="chelo1"
						playerName="Marcelo Cespedes"
						playerInfos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium arcu quis erat placerat pellentesque. Vestibulum sed pretium diam, sed mollis leo. Curabitur vestibulum molestie dapibus."
						playerPosition="Rifler"
						playerADR="178.0"
						playerImgUrl={chelo}
						symbolOrgImg={imperialSymbol}
						classItem="slick_imperial"
					/>

					<ItemSlick
						OrgImg={heroic}
						playerNick="cadiaN"
						playerName="Casper Møller"
						playerInfos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium arcu quis erat placerat pellentesque. Vestibulum sed pretium diam, sed mollis leo. Curabitur vestibulum molestie dapibus."
						playerPosition="Rifler"
						playerADR="128.0"
						playerImgUrl={cadian}
						symbolOrgImg={heroicSymbol}
						classItem="slick_heroic"
					/>

					<ItemSlick
						OrgImg={spirit}
						playerNick="magixx"
						playerName="Boris Vorobyev"
						playerInfos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium arcu quis erat placerat pellentesque. Vestibulum sed pretium diam, sed mollis leo. Curabitur vestibulum molestie dapibus."
						playerPosition="Rifler"
						playerADR="158.0"
						playerImgUrl={magixx}
						symbolOrgImg={spiritSymbol}
						classItem="slick_imperial"
					/>
				</Slider>
			</div>
		);
	}
}
