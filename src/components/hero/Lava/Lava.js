import React from "react"
import styles from "./lava.module.css"
import volcanoBueno from "../../../assets/images/hero/volcanoBueno.gif"
const Lava = () => {
	return (
		<>
			<div className={styles.lavaLight}></div>
			<img src={volcanoBueno} alt='particles 1' className={styles.particles} />
			<img src={volcanoBueno} alt='' className={styles.particles} />
		</>
	)
}

export default Lava
