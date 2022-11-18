import '../style.css';
import { Col, Row, Card } from 'react-bootstrap';
import welcomeimage from "../../images/welcome-image.png";


export default function About() {
  return (
    <div id='about-section'>
      <h2 className='text-center'>About Me</h2><br/>
      <Row>
        <Col className='col-sm-12 col-md-8 mx-auto'>
          <Card className='about-card shadow p-3 mb-5 bg-white rounded'>
            <Card.Body className="about-card">
              <div className='d-flex align-items-center justify-content-center'>
                <img src={welcomeimage} alt="Hi there! I'm Shannon. So glad to have you here" id='welcome-image'/>
              </div>
              <Card.Text>
                <p>
                  Welcome to my portfolio, where you can view my projects and get to know me a little. Over the past few years, I discovered my passion for web / mobile configuration and graphic design while working on a family-run business. It started as a hobby that I did on the side since I had a full time career as a Medical Lab Scientist. With hopes of a career change and a desire to receive structured training, I started on the path to become a full stack developer. 
                  </p>
                  <p>
                  Over 7 years in the healthcare laboratory setting not only shaped me as a professional, but it helped me realize my skills. To my surprise, the same skills that led to my successful laboratory career are the same skills needed in web development.
                </p>
                <p>
                  Focus, attention to detail, and a dedication to providing the highest quality results possible are among my most valued. I'm excited to transfer these skills to my new career so that I can be a part of creating exceptional work. Thank you for taking the time to view my portfolio and I hope we have the opportunity to work together in the future. 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h4 className='text-center'>An Overview of My Skills:</h4><br/>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Card className='about-mini-cards shadow p-3 mb-5 bg-white rounded' border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
              <i className='fas fa-laptop-code fa-3x about-icons' style={{ color: '#094472' }}></i><br/><br/>
                Technical Aptitude<br/>JavaScript<br/>HTML / CSS<br/>React.js
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Card className='about-mini-cards shadow p-3 mb-5 bg-white rounded' border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
              <i className="fas fa-palette fa-3x" style={{ color: '#094472' }}></i><br/><br/>
                UX / UI<br/>Graphic Design<br/>Branding<br/>Figma
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Card className='about-mini-cards shadow p-3 mb-5 bg-white rounded' border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
              <i className="fas fa-users fa-3x" style={{ color: '#094472' }}></i><br/><br/>
                Agile Methodology<br/>Team Collaboration<br/>Git Version Control<br/>Independent Contributor
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Card className='about-mini-cards shadow p-3 mb-5 bg-white rounded' border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
              <i className="fas fa-hand-holding-heart fa-3x" style={{ color: '#094472' }}></i><br/><br/>
                Client-Centric<br/>Lifelong Learner<br/>Goal-Oriented<br/>Value-Driven
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};