import React from "react"
import styles from "./teamPopup.module.css"
import teamBubbles from "../../assets/images/team/teamBubbles.gif"
const TeamPopup = ({ description, name }) => {
	return (
		<>
			<span className={styles.container}>
				<img src={teamBubbles} alt='bubbles' className={styles.bubbles} />
				{/* <img src={teamBubbles} alt='bubbles' left='0' /> */}
				<h1>{name}</h1>
				<p>{description}</p>
			</span>
		</>
	)
}

export default TeamPopup
