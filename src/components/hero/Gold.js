import React from "react"
import styles from "./gold.module.css"
const Gold = ({ img, itemClass }) => {
	return <img src={img} alt="" className={`${styles.gold} ${styles[itemClass]}`} key={img}></img>
}

export default React.memo(Gold)
