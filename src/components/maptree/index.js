import MaptreeImage from "../../assets/images/maptree/maptree.png"
import { Container, Col, Row } from "react-bootstrap"
import benefitShark from "../../assets/images/benefits/benefitShark.png"
const MapTree = () => {
	return (
		<section
			id='benifits'
			className='map-tree-section position-relative'
			style={{
				backgroundColor: "rgb(0,46,59)",
			}}
		>
			<img className='spider background-image' src={MaptreeImage} alt='image' />
			<div className='maptree-wrape'>
				<Container fluid>
					<Row>
						<Col>
							<h2 className='benifit-title'>Benefits</h2>
							<div className='spider-diyagram'>
								<div className='spider-box'>
									<div className='spider-inner-box'>
										<ul className='spider-list'>
											<img
												src={benefitShark}
												alt='benefitShark'
												className='benefit-shark'
											/>
											<li style={{ display: "none" }}>
												Artwork in centre of box will be provided in a few days
											</li>
											<li>Insert text here</li>
											<li>Insert text here</li>
											<li>First 200 NFTs FREE + Gas</li>
											<li>An interactive and epic adventure that you control</li>
											<li>Insert text here </li>
											<li>Unique and hand drawn artwork by a talented tattoo artist</li>
										</ul>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	)
}

export default MapTree
