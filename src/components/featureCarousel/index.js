import { React } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import Data from "../../data/feature-carousel"
import RoadMapBG from "../../assets/images/gallery/image.png"
const Feature = () => {
	const params = {
		spaceBetween: 90,
		slidesPerView: 3,
		centeredSlides: true,
		loop: true,
		navigation: false,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			// when window width is >= 480px
			576: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 3,
			},
		},
	}

	return (
		<section
			id='gallery'
			className='featured-carousel px-4 px-sm-0'
			style={{ backgroundImage: `url(${RoadMapBG})` }}
		>
			<h3 className='feature-title text-center'>Gallery</h3>
			<Swiper
				{...params}
				className='slider-wrapper'
				style={{ overflow: "visible" }}
			>
				{Data.map(function (data, key) {
					return (
						<SwiperSlide key={key}>
							<div
								className='featured-box'
								style={{ height: "90%", background: "none" }}
							>
								<img
									src={
										require("../../assets/images/feature-carousel/" + data.image).default
									}
									alt='image_not_found'
								/>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Feature
