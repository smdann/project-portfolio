import welcomeimage from "../../images/welcome-image.png";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function About() {
  return (
    <div >
      <div className="d-flex align-items-center justify-content-center ">
        <img src={welcomeimage} alt="welcome" />
      </div>

      <MDBRow >
        <br />
        <MDBCol className="d-flex align-items-center justify-content-center">
          <MDBCard className="shadow-5 w-50 mt-4">
            <MDBCardBody>
              <MDBCardText>

                <p>
                  Welcome to my portfolio, where I showcase my projects and let you get a sense of who I am. While I have a couple of years worth of experience in web / mobile configuration and graphic design for a family-run business, I recently started on the path to becoming a full stack web developer. 
                </p>

                <MDBAccordion initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Accordion Item #1</>}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Accordion Item #2</>}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt l
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Accordion Item #3</>}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt 
                </MDBAccordionItem>
              </MDBAccordion>
              
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <br />
    </MDBRow>
    </div>
  );
};