import { Accordion, Container, Row, Col } from "react-bootstrap"
import Data from "../../data/faq/index.json"
const Accourdion = () => {
	return (
		<section id="faq" className="faq-section">
			<Container>
				<Row>
					<Col>
						<h2 className="faq-title">Faq</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<Accordion>
							{Data.map((data, key) => {
								return (
									<Accordion.Item eventKey={key} key={key}>
										<Accordion.Header>{data.header}</Accordion.Header>
										<Accordion.Body>{data.body}</Accordion.Body>
									</Accordion.Item>
								)
							})}
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Accourdion
