import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { validateEmail } from './utils/helpers';

export default function Contact() {

  // Puts the form fields and error message into state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  // Handles changes to the input fields
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handles clicking out of form field without entering text
  const handleClickingOut = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

      if ( inputType === 'email' ) {
      const valid = validateEmail(inputValue);

      if (!valid) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        setErrorMessage('');
      }

      } else {
        if (!inputValue.length) {
        setErrorMessage(`Please enter your ${inputType}.`);
      } else {
        setErrorMessage('');
      }
    };
  }
  
  // Handles submission of the form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Displays error message if name isn't entered
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }
    // Displays error message if an invalid email address is entered
    if (!validateEmail(email)) {
      setErrorMessage(
        'Please enter a valid email address.'
      );
      return;
    }
    // Displays error message if message isn't entered
    if (!message) {
      setErrorMessage('Please enter a message.');
      return;
    }
    
    // Clears out form field data after successful form submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container>
    <MDBRow>
      <MDBCol className="d-flex align-items-center justify-content-center">
        <MDBCard className="shadow-5 w-50 mt-4">
          <MDBCardBody>
            <MDBCardTitle>Please feel free to contact me by submitting some information below.</MDBCardTitle>
              <MDBCardText>
              <Form className="form">
                <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  onBlur={handleClickingOut}
                  type="text"
                  placeholder="Name"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur={handleClickingOut}
                  type="email"
                  placeholder="Email"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Control
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  onBlur={handleClickingOut}
                  as="textarea" rows={6}
                  placeholder="Message"
                />
                </Form.Group>
                <MDBBtn type="button" onClick={handleFormSubmit} className="btn btn btn-rounded">Submit</MDBBtn>
              </Form>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        <div className='text-center'>
          {errorMessage && (
            <div>
              <h4 className="error-text">{errorMessage}</h4>
            </div>
          )}
        </div>
    </Container> 
           
  );
}
