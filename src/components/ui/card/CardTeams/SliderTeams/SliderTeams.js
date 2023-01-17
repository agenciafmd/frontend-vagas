import styles from "./SliderTeams.module.sass";

//IMPORTS ASSETS SLIDER ITEMS
import imperial from "../../../../../assets/images/teams/imperial.webp";
import heroic from "../../../../../assets/images/teams/heroic.webp";
import astralis from "../../../../../assets/images/teams/astralis.webp";
import navi from "../../../../../assets/images/teams/navi.webp";
import vitality from "../../../../../assets/images/teams/vitality.webp";
import faze from "../../../../../assets/images/teams/faze.webp";
import cloud9 from "../../../../../assets/images/teams/cloud9.webp";
import outsiders from "../../../../../assets/images/teams/outsiders.webp";

import React, { Component } from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ItemCardTeams from "../ItemCardTeams/itemCardTeams";

//CUSTOM SLIDER BUTTON NAVIGATION
function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="customNextArrowMajors" onClick={onClick}>
			<BsArrowRight />
		</div>
	);
}

//CUSTOM SLIDER BUTTON NAVIGATION
function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="customPrevArrowMajors" onClick={onClick}>
			<BsArrowLeft />
		</div>
	);
}

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: false,
			arrows: true,
			fade: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			infinite: true,
			dotsClass: "slick_dots_teams",
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<div className={styles.slider_teams}>
				<Slider {...settings}>
					<ItemCardTeams teamImg={imperial} majorQTD={2} />
					<ItemCardTeams teamImg={heroic} majorQTD={2} />
					<ItemCardTeams teamImg={astralis} majorQTD={4} />
					<ItemCardTeams teamImg={navi} majorQTD={1} />
					<ItemCardTeams teamImg={vitality} majorQTD={3} />
					<ItemCardTeams teamImg={faze} majorQTD={2} />
					<ItemCardTeams teamImg={cloud9} majorQTD={1} />
					<ItemCardTeams teamImg={outsiders} majorQTD={1} />
				</Slider>
			</div>
		);
	}
}
