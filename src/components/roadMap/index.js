import RoadMapBG from "../../assets/images/roadmap/roadmap.svg";
import { Container, Col, Row } from "react-bootstrap";
const RoadMap = () => {
  return (
    <section className="road-map-section">
      <Container>
        <div className="roadmap-overlay">
        <div className="timeline"></div>
        <div className="road-map-section-tile">
          <h3 className="road-map-title">History</h3>
        </div>
        <Container className="roadmap-container">
          <Row>
            <Col>
              <div className="demo">
                <ul className="road-map-list">
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">4.5 billion years ago</h4>
                      <p className="road-map-text">
                        Our wonderful Earth was created
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">1</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">4,000-3,000 BCE</h4>
                      <p className="road-map-text">
                        The first human civilization sprang up
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">2</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">1760-1840</h4>
                      <p className="road-map-text">
                        Industrial revolution – the start of unnatural levels of
                        greenhouse gas emissions
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">3</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">2000s</h4>
                      <p className="road-map-text">
                        The rise of cryptocurrency and the metaverse
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">4</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">2760</h4>
                      <p className="road-map-text">
                        Earth’s resources start to become exhausted from use of
                        new technology
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">5</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">2800</h4>
                      <p className="road-map-text">
                        Humans begin to evacuate Earth
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">6</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">2830 </h4>
                      <p className="road-map-text">
                        The fuel from the interstellar ships creates an extremely
                        potent new greenhouse gas, resulting in an uncontrollable
                        rise in the Earth’s temperature
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">7</span>
                    </div>
                  </li>
                  <li className="road-map-list-item">
                    <div className="road-map-content">
                      <h4 className="road-map-date">3000</h4>
                      <p className="road-map-text">
                        99.999% of current day Earth is now underwater!
                      </p>
                    </div>
                    <div className="road-map-shape">
                      <span className="road-map-circle"></span>
                      <span className="road-map-number">8</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
