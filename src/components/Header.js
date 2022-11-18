import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

function Header({ currentPage, handlePageChange }) {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container className='text-center'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
              {/* Each Nav.Link contains a ternary operator to check to see if the current page matches the link page. If it does, it sets the current page to 'nav-link-active', otherwise it's set to 'nav-link' */}
            <Nav.Link href="#about-me"
              onClick={() => handlePageChange('AboutMe')}
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              id='navbar-items'
            >About Me</Nav.Link>
        
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              id='navbar-items'
            >Portfolio</Nav.Link>
        
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              id='navbar-items'
            >Contact</Nav.Link>
          
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              id='navbar-items'
            >Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;