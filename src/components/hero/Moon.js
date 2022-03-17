import React, { useEffect, useRef, useState } from "react"
import styles from "./moon.module.css"
const initState = { distance: 6, size: 100 }
const Moon = ({ reference, setTitle }) => {
	// State controls the moon size
	const [moon, setMoon] = useState(initState)
	const scrollHandler = () => {
		const moonRef = reference.current.getBoundingClientRect()
		if (moonRef.bottom / moonRef.height > 0) {
			let titleHeight = Math.max(100 * Math.pow(moonRef.bottom / moonRef.height, 8), 0)
			if (titleHeight <= 100) {
				setTitle(titleHeight)
			}
		}
		//
		if (moonRef.bottom / moonRef.height > 0.7) {
			setMoon({
				size: 100 + (1 - moonRef.bottom / moonRef.height) * 500,
				distance: initState.distance - (moonRef.top / moonRef.height) * 30,
			})
		} else if (moonRef.bottom / moonRef.height > 0.5) {
			setMoon((prevState) => {
				return {
					...prevState,
					size: 100 + (1 - moonRef.bottom / moonRef.height) * 500,
				}
			})
		}
	}
	useEffect(() => {
		if (reference.current.getBoundingClientRect()) {
			addEventListener("scroll", scrollHandler)
		}
		return () => {
			removeEventListener("scroll", scrollHandler)
		}
	}, [])
	return (
		<div
			className={styles.moon}
			style={{
				top: `${moon.distance}%`,
				transform: `scale(${moon.size}%) translate(0, 0)`,
			}}
		></div>
	)
}

export default React.memo(Moon)
