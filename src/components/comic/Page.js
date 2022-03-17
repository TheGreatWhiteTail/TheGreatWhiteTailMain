import React from "react"
import styles from "./page.module.css"
import ComicButton from "./ComicButton"
const Page = React.forwardRef((props, ref) => {
	return (
		<div className={styles.page} ref={ref}>
			<ComicButton
				className={styles.comicButton}
				pageIndex={props.pageIndex}
				currentPage={props.currentPage}
			></ComicButton>
			<img src={props.src} alt="comic-page" />
		</div>
	)
})

export default Page
