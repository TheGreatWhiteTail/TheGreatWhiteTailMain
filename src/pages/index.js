import { React, Fragment } from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Scientist from "../components/scientist"
import Feature from "../components/featureCarousel"
import MintBOx from "../components/mintbox"
import MapTree from "../components/maptree"
import RoadMap from "../components/roadMap"
import TeamSection from "../components/team"
import Accourdion from "../components/accourdion"
import FooterTop from "../components/footer/footer-top"
import FooterBottom from "../components/footer/footer-bottom"
import "../styles/style.css"

const HomePage = () => {
	return (
		<Fragment>
			<Header />
			<Hero />
			<Scientist />
			<Feature />
			<MintBOx />
			<MapTree />
			<RoadMap />
			<TeamSection />
			<Accourdion />
			<FooterTop />
			<FooterBottom />
		</Fragment>
	)
}

export default HomePage
