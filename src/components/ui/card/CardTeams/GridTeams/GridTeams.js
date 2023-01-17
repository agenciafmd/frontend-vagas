//IMPORTS ASSETS GRID TEAMS
import imperial from "../../../../../assets/images/teams/imperial.webp";
import heroic from "../../../../../assets/images/teams/heroic.webp";
import astralis from "../../../../../assets/images/teams/astralis.webp";
import navi from "../../../../../assets/images/teams/navi.webp";
import vitality from "../../../../../assets/images/teams/vitality.webp";
import faze from "../../../../../assets/images/teams/faze.webp";
import cloud9 from "../../../../../assets/images/teams/cloud9.webp";
import outsiders from "../../../../../assets/images/teams/outsiders.webp";

import ItemCardTeams from "../ItemCardTeams/itemCardTeams";

function GridTeams() {
	return (
		<>
			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={imperial} majorQTD={2} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={heroic} majorQTD={2} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={astralis} majorQTD={4} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={navi} majorQTD={1} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={vitality} majorQTD={3} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={faze} majorQTD={2} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={cloud9} majorQTD={1} />
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
					<ItemCardTeams teamImg={outsiders} majorQTD={1} />
				</div>
			</div>
		</>
	);
}

export default GridTeams;
