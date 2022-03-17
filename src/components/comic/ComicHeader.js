import React from "react"
import { Link } from "react-router-dom"
import { ImArrowLeft } from "react-icons/im"
import styles from "./comicHeader.module.css"
const ComicHeader = () => {
	return (
		<header>
			<Link to="/">
				<ImArrowLeft className={styles.arrow}></ImArrowLeft>
			</Link>
		</header>
	)
}

export default ComicHeader
