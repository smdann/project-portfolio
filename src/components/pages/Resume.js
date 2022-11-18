import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import resume from '../../images/Shannon-Dann-Resume-2022.pdf'

export default function Resume() {
  return (
    <div>
      <h2 className='text-center'>Resume</h2>
      <h4 className='text-center'>
        <a href={resume} className='text-decoration-none'>
          <i className='fas fa-file-download text-decoration-none' style={{ color: '#1F71A2' }}></i> Download
        </a> 
      </h4>
    <br/>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
            <h4>
            Front-End Proficiencies:
            </h4>
            <Card.Body>
              <Card.Text>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>UX / UI Design</li>
                <li>Graphic Design</li>
                <li>Figma</li>
              </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
            <h4>
            Back-End Proficiencies:
            </h4>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>RESTful APIs</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
    </div>
  );
}