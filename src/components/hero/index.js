import React, { useRef, useState } from "react"
import HeroImage from "../../assets/images/hero/hero.jpg"
import Logo from "../../assets/images/hero/logo.png"
import NoLava from "../../assets/images/hero/NonLava.png"
import VolcanoLava from "../../assets/images/hero/VolcanoLava.svg"
import Moon from "./Moon"
import styles from "./index.module.css"
import trash1 from "../../assets/images/hero/trash1.png"
import trash2 from "../../assets/images/hero/trash2.png"
import trash3 from "../../assets/images/hero/trash3.png"
import trash4 from "../../assets/images/hero/trash4.png"
import gold1 from "../../assets/images/hero/gold/gold1.png"
import gold2 from "../../assets/images/hero/gold/gold2.png"
import gold3 from "../../assets/images/hero/gold/gold3.png"
import gold4 from "../../assets/images/hero/gold/gold4.png"
import gold5 from "../../assets/images/hero/gold/gold5.png"
import gold6 from "../../assets/images/hero/gold/gold6.png"
import Gold from "./Gold"
import Lava from "./Lava/Lava"
import Clouds from "./Clouds"

//
const Hero = () => {
	const reference = useRef()
	const [title, setTitle] = useState(100)
	return (
		<section className='hero-section position-relative' id='hero'>
			<img src={NoLava} alt='' className='volcano-noLava' ref={reference} />
			<img src={VolcanoLava} className={styles.volcanoLava}></img>
			<img className='hero-image' src={HeroImage} style={{ width: "100vw" }} />
			<div className='hero-content'>
				<div className='hero-content-wrapper'>
					<img className='hero-logo' src={Logo} />
					<h1 className='hero-title'>
						<span style={{ transform: `scaleY(${title}%)` }}>The</span>
						<span style={{ transform: `scaleY(${title}%)` }}>Great White </span>
						<span style={{ transform: `scaleY(${title}%)` }}>Tail</span>
					</h1>
					<div className='about-description'>
						<p id='prueba'>
							Hey off-worlder. Welcome back to Earth. Most of Earth’sland mass is still
							under water but there are strange changes afoot. Join our mission and
							solve puzzles with the Earth’s last remaining scientist, Professor
							Hammerhead, to figure out what’s going on and maybe he’ll reward you in
							return…
						</p>
					</div>
				</div>
			</div>
			<img
				src={trash1}
				alt='trash1'
				className={`${styles.trash1} ${styles.trash}`}
			/>
			<img
				src={trash2}
				alt='trash2'
				className={`${styles.trash2} ${styles.trash}`}
			/>
			<img
				src={trash3}
				alt='thras3'
				className={`${styles.trash3} ${styles.trash}`}
			/>
			<img
				src={trash4}
				alt='thras4'
				className={`${styles.trash4} ${styles.trash}`}
			/>

			<Gold img={gold1} itemClass='gold1'></Gold>
			<Gold img={gold2} itemClass='gold2'></Gold>
			<Gold img={gold3} itemClass='gold3'></Gold>
			<Gold img={gold4} itemClass='gold4'></Gold>
			<Gold img={gold5} itemClass='gold5'></Gold>
			<Gold img={gold6} itemClass='gold6'></Gold>
			<Moon reference={reference} setTitle={setTitle}></Moon>
			<Lava></Lava>
			<Clouds reference={reference}></Clouds>
		</section>
	)
}

export default Hero
