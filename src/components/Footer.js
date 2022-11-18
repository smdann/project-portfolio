import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#1F71A2' }}>
      <MDBContainer className='p-2 pb-0'>
        <section className='mb-2'>
          <MDBBtn outline color="light" floating className='m-2' href='mailto:smdann17@gmail.com' role='button'>
            <MDBIcon fas icon="envelope" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='https://www.linkedin.com/in/shannon-dann' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='https://github.com/smdann' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='https://stackoverflow.com/users/20540114/sdann' role='button'>
            <MDBIcon fab icon='fab fa-stack-overflow' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}