import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
       
        <div className="m-5 bg-light">
            <h1 className="bg-danger">Contact Us</h1>
            <p>We are always ready to serve you.
              Please contact us for any details. 
              </p> 
            <Form>
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="bg-dark text-white p-1">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="bg-dark text-white p-1">Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" className="m-3 bg-info p-2" type="submit">
    Send Message
  </Button>
      </Form>
        </div>
    );
};

export default Contact;