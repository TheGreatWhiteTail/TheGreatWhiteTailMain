import React, { Suspense } from "react"
import ComicBook from "../components/comic/ComicBook"
import ComicHeader from "../components/comic/ComicHeader"
import "../styles/comicstyles.css"
const Comic = () => {
	return (
		<>
			<ComicHeader></ComicHeader>
			<ComicBook></ComicBook>
		</>
	)
}

export default Comic
