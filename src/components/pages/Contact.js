import React, { useState } from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
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
    // Displays a message if all fields are valid upon submission
    if (name && email && message) {
      setErrorMessage(`Thank you for your inquiry, ${name}!`);

      // Clears out form field data after successful form submission
      setName('');
      setEmail('');
      setMessage('');
      return;
    }
  };

  return (
    <Container>
      <h2 className='text-center'>Contact Me</h2>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Card className="mw-75 mt-4 shadow p-3 mb-5 bg-white rounded" id='contact-card'>
            <Card.Body style={{ backgroundColor: '#D6E7EF' }}>
              <Card.Text className='text-center'>
                Please provide some information below and I will be in touch shortly.
              </Card.Text>
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
                  <div className='text-center'>
                    <Button type="button" onClick={handleFormSubmit} variant="secondary">Submit
                    </Button>
                  </div>
                </Form>
                <br/>
                <div className='text-center'>
                  {errorMessage && (
                    <div>
                      <h5 className="error-text">{errorMessage}</h5>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      <br/>
    </Container> 
           
  );
}
