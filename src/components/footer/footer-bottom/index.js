import { React, useState, useRef } from "react"
import { Container, Row, Col, Tooltip, Overlay } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa"
import openseaLogo from "../../../assets/images/footer/openseaLogo.svg"
import styles from "./flooterBottom.module.css"
const FooterBottom = () => {
	const [show, setShow] = useState(false)
	const target = useRef(null)
	return (
		<div className='position-relative'>
			<div className='footer'>
				<Container>
					<Row className='align-items-center'>
						{/* <Col sm={6}>
            <a className="brand-logo text-center text-sm-left" href="#">
              Logo
            </a>
          </Col> */}
						<Col sm={12}>
							<ul className='footer-links justify-content-center justify-content-sm-end'>
								<li>
									<a href='https://twitter.com/' target='_blank'>
										<BsTwitter
											color='#1DA1F2'
											size='3rem'
											className={styles.icons}
											href='/#'
										></BsTwitter>
									</a>
								</li>
								<li>
									<a href='https://discord.com/' target='_blank'>
										<FaDiscord
											size='3rem'
											className={styles.icons}
											color='5865F2'
										></FaDiscord>
									</a>
								</li>

								<Overlay target={target.current} show={show} placement='top'>
									{(props) => (
										<Tooltip id='overlay-example' {...props}>
											You need the professor’s permission to join the discord. Come back
											again, maybe he’ll be in a better mood. Recently, he’s been spending
											a lot of time on <a href='#'>Twitter</a> , why don’t you check that
											out instead?
										</Tooltip>
									)}
								</Overlay>

								<li>
									<a href='https://opensea.io/' target='_blank'>
										<img
											src={openseaLogo}
											alt='opensea'
											width='44px'
											className={styles.icons}
											href='#'
										/>
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default FooterBottom
