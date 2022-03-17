import React, { useEffect, useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavHashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import Image from "react-bootstrap/Image"
import logo from "../../assets/images/MainLogo.svg"

const Header = () => {
	const [scroll, setScroll] = useState(false)
	const [headerHeight, setHeaderHeight] = useState(false)

	useEffect(() => {
		const Header = document.getElementById("header-section")
		setHeaderHeight(Header.offsetHeight)
		window.addEventListener("scroll", handleScroll)
		return () => {}
	}, [])

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	return (
		<>
			<header
				id="header-section"
				className={`main-header ${scroll > headerHeight ? "sticky" : "not-sticky"} m-2`}
			>
				<Navbar collapseOnSelect expand="lg" variant="light" className="m-3">
					<Container fluid>
						<NavHashLink
							smooth={true}
							offset={-70}
							duration={500}
							className="nav-link lead font-weight-bold"
							style={{ textShadow: "2px 2px 10px white" }}
							to="#hero"
						>
							<Navbar.Brand href="#home">
								<Image src={logo} />
							</Navbar.Brand>
						</NavHashLink>
						<Navbar.Toggle aria-controls="responsive-navbar-nav">
							<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
							</svg>
						</Navbar.Toggle>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ms-auto">
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="#lab"
								>
									LAB
								</NavHashLink>
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="#gallery"
								>
									GALLERY
								</NavHashLink>
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="#mint"
								>
									MINT
								</NavHashLink>
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="#benifits"
								>
									BENEFITS
								</NavHashLink>
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "4px 4px 10px white" }}
									to="#team"
								>
									THE TEAM
								</NavHashLink>
								<NavHashLink
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="#faq"
								>
									FAQ
								</NavHashLink>
								<Link
									smooth={true}
									offset={-70}
									duration={500}
									className="nav-link lead font-weight-bold"
									style={{ textShadow: "2px 2px 10px white" }}
									to="/comic"
								>
									COMIC
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	)
}

export default Header
