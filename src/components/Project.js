import Card from 'react-bootstrap/Card';

export default function Project(props) {
  return (
    <Card style={{ backgroundColor: '#D6E7EF' }} className="project-card m-3 shadow p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={props.image} alt={props.name} className="opacity-50"/>
      <Card.Body className='text-center'>
        <h4 style={{ color: '#1F71A2' }}>{props.name}</h4>
        <a href={props.deployedLink} className='portfolio-icons'>
          <i className="fas fa-external-link-alt fa-3x text-decoration-none" style={{ color: '#1F71A2' }}>
          </i>
        </a>
        <a href={props.githubLink} className='portfolio-icons'>
          <i className="fab fa-github fa-3x text-decoration-none" style={{ color: '#1F71A2' }}>
          </i>
        </a>
      </Card.Body>
    </Card>
  )
}