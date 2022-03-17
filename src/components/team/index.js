import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Data from "../../data/team"
import TeamItem from "./TeamItem"
const TeamSection = () => {
	return (
		<section id='team' className='team-section'>
			<Container className='prueba'>
				<Row>
					<Col>
						<h2 className='team-title'>The Team</h2>
					</Col>
				</Row>
				<Row>
					{Data.map(function (data, key) {
						return (
							<Col xs={12} sm={6} md={6} lg={4} key={key} className='mb-5'>
								<TeamItem data={data}></TeamItem>
							</Col>
						)
					})}
				</Row>
			</Container>
		</section>
	)
}

export default TeamSection
