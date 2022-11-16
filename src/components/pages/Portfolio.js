import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project';
import image1 from '../../images/finding-fido.png';
import image2 from '../../images/mmhd-residences.png';
import image3 from '../../images/developer-blog-site.png';
import image4 from '../../images/team-roster-generator.png';
import image5 from '../../images/weather-dashboard.png';
import image6 from '../../images/notes-express.png';

export default function Portfolio() {

  const projectData = [ 
    {
      projectNumber: 1,
      projectName: 'Finding Fido',
      image: image1,
      deployedLink: 'https://hoffh-5334.github.io/finding-fido/',
      githubLink: 'https://github.com/hoffh-5334/finding-fido'
    },
    {
      projectNumber: 2,
      projectName: 'MMHD Residences',
      image: image2,
      deployedLink: 'https://propertymanager-production.up.railway.app/',
      githubLink: 'https://github.com/hoffh-5334/propertyManager'
    },
    {
      projectNumber: 3,
      projectName: 'Tech Blog',
      image: image3,
      deployedLink: 'https://enigmatic-savannah-78345.herokuapp.com/',
      githubLink: 'https://github.com/smdann/developer-blog-site'
    },
    {
      projectNumber: 4,
      projectName: 'Team Roster Generator',
      image: image4,
      deployedLink: 'https://drive.google.com/file/d/1l__u6dmc67J-G2aO0Ilu-7XdHAw4gZmD/view',
      githubLink: 'https://github.com/smdann/team-roster-generator'
    },
    {
      projectNumber: 5,
      projectName: 'Weather Dashboard',
      image: image5,
      deployedLink: 'https://smdann.github.io/weather-dashboard/',
      githubLink: 'https://github.com/smdann/weather-dashboard'
    },
    {
      projectNumber: 6,
      projectName: 'Notes Express',
      image: image6,
      deployedLink: 'https://notes-express-production.up.railway.app/',
      githubLink: 'https://github.com/smdann/notes-express'
    }
  ];

  return (
    <Container>
      <h1 className="portfolio-header">Project Portfolio</h1>
      <h2>Here are some of my favorite projects I've worked on.</h2>
      <br />
      <Row>
        {projectData.map((project) => (
          <Col md="12" lg="4">
          <Project key={project.projectNumber} image={project.image} name={project.projectName} deployedLink={project.deployedLink} githubLink={project.githubLink} />
          </Col>
        ))}
      </Row>
      <h3 className='pb-5'>Thank you for visiting my portfolio!</h3>
    </Container>
  );
}