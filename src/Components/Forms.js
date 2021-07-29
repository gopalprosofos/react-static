import React from 'react';
import { Container, Button, Form, Row } from 'react-bootstrap';

function Forms() {

    function onSubmit(){
        alert("Form Submitted");
    }
    return (
        <Container>
            <Row>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Phone Number" />
                </Form.Group>

                <Button variant="primary" onClick={onSubmit}>Submit</Button>
            </Form>
            </Row>
        </Container>
    )
}

export default Forms;
