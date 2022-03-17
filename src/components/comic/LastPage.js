import React from "react"
import styles from "./lastPage.module.css"
import questionMark from "../../assets/images/comic/questionMark.png"
const LastPage = React.forwardRef((props, ref) => {
	return (
		<div className={styles.lastPage} ref={ref}>
			<img src={questionMark} alt="img not found" />
			<div className={styles.point}></div>
		</div>
	)
})
export default LastPage
