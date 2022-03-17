import React, { useState, useEffect, useRef, Suspense } from "react"
import styles from "./comicBook.module.css"
import HTMLFlipBook from "react-pageflip"
import Page from "./Page"
import LastPage from "./LastPage"
import Data from "../../data/comic"
const ComicBook = () => {
	const [page, setPage] = useState(0)
	const [trans, setTrans] = useState(undefined)
	const [portrait, setPortrait] = useState(true)
	const [currentPage, setCurrentPage] = useState(0)
	const bookRef = useRef(null)
	//
	const onFlipHandler = (e) => {
		setPage(e.data)
	}

	// Controler of book translate
	useEffect(() => {
		const trans = page === 0 || (page === Data.length && Data.length % 2 !== 0)
		if (page === 0) {
			setTrans("first")
		} else if (page === Data.length) {
			setTrans("last")
		} else {
			setTrans(false)
		}
		return () => {}
	}, [page])
	//
	useEffect(() => {
		if (window.innerWidth < 600) {
			setPortrait(true)
		}
		const resize = window.addEventListener("resize", () => {
			if (window.innerWidth > 600) {
				setPortrait(false)
			} else {
				setPortrait(true)
			}
		})

		return () => window.removeEventListener("resize", resize)
	}, [])
	// FUNCTIONS

	return (
		<>
			<div className={`${styles.container} ${styles[trans]}`}>
				<HTMLFlipBook
					ref={bookRef}
					width={280}
					height={408}
					flippingTime={500}
					drawShadow={false}
					showCover={true}
					minWidth={200}
					size={"stretch"}
					onFlip={onFlipHandler}
					swipeDistance={0}
					style={{ position: "relative", top: "-2rem" }}
					showPageCorners={false}
				>
					{Data.map((data, i) => {
						return (
							<Page
								src={require(`../../assets/images/comic/comic${i + 1}.jpg`).default}
								key={i}
								pageIndex={i}
								currentPage={page}
							></Page>
						)
					})}
					<LastPage></LastPage>
				</HTMLFlipBook>
			</div>
		</>
	)
}

export default ComicBook
