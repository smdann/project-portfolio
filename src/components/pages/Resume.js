import { SimpleGrid } from '@chakra-ui/react'
import { Col, Row, Card } from 'react-bootstrap';
import resume from '../../images/Shannon-Dann-Resume-2022.pdf'

export default function Resume() {
  return (
    <div>
      <h2 className='text-center'>Resume</h2><br/>
      <h5 className='text-center'>
        <a href={resume} className='text-decoration-none'>
          <i className='fas fa-file-download text-decoration-none' style={{ color: '#1F71A2' }}></i> Download
        </a>  a PDF version of my resume.
      </h5><br/>
      <SimpleGrid className='d-flex justify-content-center' bg='gray.50' columns={2}  color='gray.400' alignItems='center'>
        <Row>
          <Col >
            <Card className='shadow p-3 mb-5 bg-white rounded'>
              <h4 className='text-center'>
              Front-End Proficiencies:
              </h4>
              <Card.Body>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap</li>
                  <li>React.js</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card className='shadow p-3 mb-5 bg-white rounded'>
              <h4 className='text-center'>
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
      </SimpleGrid>
    </div>
  );
}