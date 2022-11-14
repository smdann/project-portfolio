import Form from 'react-bootstrap/Form';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    
      
      <MDBRow>
        <br />
        <MDBCol className="d-flex align-items-center justify-content-center">
          <MDBCard className="shadow-5 w-50 mt-4">
            <MDBCardBody>
              <MDBCardTitle>Please feel free to contact me by submitting this form.</MDBCardTitle>
              <MDBCardText>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={6} placeholder="Enter a message" />
                </Form.Group>
                <MDBBtn type="button" class="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Submit</MDBBtn>
                </Form>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <br />
      </MDBRow>
      
    
  );
}

