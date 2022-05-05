import {Container, Row, Col} from "react-bootstrap";
export default function Footer () {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} lg={4}>
            <p>Footer proximamente</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}