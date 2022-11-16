import Card from 'react-bootstrap/Card';

export default function Project(props) {
  return (
    <Card style={{ backgroundColor: '#90C7D6' }} className="m-3">
      <Card.Img variant="top" src={props.image} alt={props.name} className="opacity-50"/>
      <Card.Body className='text-center'>
        <a href={props.deployedLink}>
          <i className="fas fa-external-link-alt fa-3x text-decoration-none m-1" style={{ color: '#375A6C' }}>
          </i>
        </a>
        <a href={props.githubLink}>
          <i className="fab fa-github fa-3x text-decoration-none m-1" style={{ color: '#375A6C' }}>
          </i>
        </a>
      </Card.Body>
    </Card>
  )
}