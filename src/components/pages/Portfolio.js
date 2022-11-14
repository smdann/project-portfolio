import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../images/finding-fido.png';
import image2 from '../../images/mmhd-residences.png';
import image3 from '../../images/developer-blog-site.png';
import image4 from '../../images/team-roster-generator.png';
import image5 from '../../images/weather-dashboard.png';
import image6 from '../../images/notes-express.png';
import {
  MDBCardLink
} from 'mdb-react-ui-kit';

export default function Portfolio() {
  return (
    <Container fluid>
      <h1 className="portfolio-header">Project Portfolio</h1>
      <h2>Here are some of my favorite projects I've worked on.</h2>
      <br />
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Text>
                <h3>Finding Fido</h3>
                <p>
                  A dog finder application for adopting dogs in need<br />
                  <MDBCardLink href='https://hoffh-5334.github.io/finding-fido/'>Visit Website</MDBCardLink>
                  <MDBCardLink href='https://github.com/hoffh-5334/finding-fido' className="text-decoration-none">View on GitHub</MDBCardLink>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6">
          <Card >
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Text>
                <h3>MMHD Residences Property Management</h3>
                <p>
                A property management website for a luxury apartment complex<br />
                  <a href="https://propertymanager-production.up.railway.app/">Visit Website</a> <br />
                  <a href="https://github.com/hoffh-5334/propertyManager">View on GitHub</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md="6">
          <Card >
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Text>
              <h3>Tech Blog</h3>
                <p>
                A blog site where developers share their tech knowledge<br />
                  <a href="https://enigmatic-savannah-78345.herokuapp.com/">Visit Website</a> <br />
                  <a href="https://github.com/smdann/developer-blog-site">View on GitHub</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card md="6">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Text>
              <h3>Team Roster Generator</h3>
                <p>
                A command-line application for generating a team roster HTML file<br />
                  <a href="https://drive.google.com/file/d/1l__u6dmc67J-G2aO0Ilu-7XdHAw4gZmD/view">Walkthrough Video</a> <br />
                  <a href="https://github.com/smdann/team-roster-generator">View on GitHub</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md="6">
          <Card >
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Text>
              <h3>Weather Dashboard</h3>
                <p>
                Dynamically updated weather dashboard using the OpenWeather Map API<br />
                  <a href="https://smdann.github.io/weather-dashboard/">Visit Website</a> <br />
                  <a href="https://github.com/smdann/weather-dashboard">View on GitHub</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card md="6">
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Text>
              <h3>Notes Express</h3>
                <p>
                A useful notetaking tool for staying organized<br />
                  <a href="https://notes-express-production.up.railway.app/">Visit Website</a> <br />
                  <a href="https://github.com/smdann/notes-express">View on GitHub</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
}