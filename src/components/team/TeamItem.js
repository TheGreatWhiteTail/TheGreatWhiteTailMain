import React, { useState, useEffect, useRef } from "react"
import Shape from "../../assets/images/team/shape.png"
import styles from "./teamItem.module.css"
import TeamPopup from "./TeamPopup"
const TeamItem = ({ data }) => {
	const [init, setInit] = useState(false)
	const [popup, setPopup] = useState(false)
	const memberRef = useRef(null)
	useEffect(() => {
		if (init) {
			memberRef.current.classList.toggle(styles.memberActive)
		}
	}, [popup])
	useEffect(() => {
		setInit(true)
	}, [])

	return (
		<div
			className={`team-content text-center ${styles.member}`}
			ref={memberRef}
			onClick={() => {
				setPopup((e) => !e)
			}}
			onMouseLeave={() => {
				setPopup(false)
			}}
		>
			<div
				className='team-content-shape'
				style={{
					backgroundImage: `url("${Shape}")`,
				}}
			>
				<img
					className={styles.img}
					width='75%'
					src={require("../../assets/images/team/" + data.image).default}
					alt='team image'
				/>
				{popup && <TeamPopup description={data.description} name={data.name} />}
			</div>
			<h4 className='team-cntent-title'>{data.designation}</h4>
		</div>
	)
}

export default TeamItem
