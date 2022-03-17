import React, { useEffect, useRef } from "react"
import cloud1 from "../../assets/images/hero/clouds/clouds1.png"
import cloud2 from "../../assets/images/hero/clouds/clouds2.png"
import cloud3 from "../../assets/images/hero/clouds/clouds3.png"
import styles from "./clouds.module.css"
//
const Clouds = ({ reference }) => {
	const cloudOne = useRef()
	const cloudTwo = useRef()
	useEffect(() => {
		const scrollHandler = () => {
			const ref = reference.current.getBoundingClientRect()
			const boudry = ref.top / ref.height
			if (boudry < 100 && boudry > 0) console.log(boudry * 1000)
			cloudOne.current.style.transform = `translateX(${-boudry * 30}%)`
			cloudTwo.current.style.transform = `translateX(${boudry * 20}%)`
		}
		if (reference.current.getBoundingClientRect()) {
			addEventListener("scroll", scrollHandler)
		}
		return () => removeEventListener("scroll", scrollHandler)
	}, [])
	return (
		<>
			<img src={cloud3} alt="cloud3" className={`${styles.clouds} ${styles.cloud3}`} />
			<img ref={cloudOne} src={cloud2} alt="cloud2" className={`${styles.clouds} ${styles.cloud2}`} />
			<img ref={cloudTwo} src={cloud1} alt="cloud1" className={`${styles.clouds} ${styles.cloud1}`} />
		</>
	)
}

export default React.memo(Clouds)
