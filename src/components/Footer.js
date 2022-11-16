import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#375A6C' }}>
      <MDBContainer className='p-2 pb-0'>
        <section className='mb-2'>
          <MDBBtn outline color="light" floating className='m-2' href='#!' role='button'>
            <MDBIcon fas icon="envelope" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}