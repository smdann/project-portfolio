import Project from '../Project';
import image1 from '../../images/indepth-agronomy.png';
import image2 from '../../images/finding-fido.png';
import image3 from '../../images/mmhd-residences.png';
import image4 from '../../images/conceal-and-carry-mn.png';
import image5 from '../../images/weather-dashboard.png';
import image6 from '../../images/team-roster-generator.png';
import { Col, Row, Container } from 'react-bootstrap';

export default function Portfolio() {

  const projectData = [ 
    {
      projectNumber: 1,
      projectName: 'InDepth Agronomy',
      image: image1,
      deployedLink: 'https://indepth-agronomy-production.up.railway.app/',
      githubLink: 'https://github.com/hoffh-5334/indepth-agronomy'
    },
    {
      projectNumber: 2,
      projectName: 'Finding Fido',
      image: image2,
      deployedLink: 'https://hoffh-5334.github.io/finding-fido/',
      githubLink: 'https://github.com/hoffh-5334/finding-fido'
    },
    {
      projectNumber: 3,
      projectName: 'MMHD Residences',
      image: image3,
      deployedLink: 'https://propertymanager-production.up.railway.app/',
      githubLink: 'https://github.com/hoffh-5334/propertyManager'
    },
    {
      projectNumber: 4,
      projectName: 'Conceal and Carry MN',
      image: image4,
      deployedLink: 'https://cfia-mn.com/',
      githubLink: ''
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
      projectName: 'Team Roster Generator',
      image: image6,
      deployedLink: 'https://drive.google.com/file/d/1l__u6dmc67J-G2aO0Ilu-7XdHAw4gZmD/view',
      githubLink: 'https://github.com/smdann/team-roster-generator'
    }
  ];

  return (
    <Container>
      <h2 className="portfolio-header">Project Portfolio</h2>
      <h4>Here are some of my favorite projects I've worked on so far.</h4>
      <p>Visit the links to view the live website or GitHub repository.</p>
      <br />
      <Row>
        {projectData.map(project => (
          <Col md="12" lg="4">
            <Project 
              key={project.projectNumber} 
              image={project.image} 
              name={project.projectName} 
              deployedLink={project.deployedLink} 
              githubLink={project.githubLink} 
            />
          </Col>
        ))}
      </Row>
      <p>Note: Conceal and Carry MN is a family-run business and is not on GitHub.</p>
      <br/>
      <br/>
    </Container>
  );
}