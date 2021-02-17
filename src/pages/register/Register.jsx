import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { register } from "../../apiFunctions/usersApi";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [alert, setAlert] = useState({ message: "", color: "" });
  const [show, setShow] = useState(false);

  const handleFormChange = (e) => {
    const target = e.target;
    const name = target.id;
    const value = target.value;
    // let user = { ...user, [name]: value };
    setUser({ ...user, [name]: value });
  };

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(user);
    if (response.ok) {
      history.push("/login");
    } else {
      let { error } = await response.json();
      console.log(error);
      setShow(true);
      setAlert({ message: error, color: "danger" });
    }
  };
  return (
    <div>
      <Container>
        {show && (
          <Alert
            variant={alert.color}
            onClose={() => setShow(false)}
            dismissible
          >
            {alert.message}
          </Alert>
        )}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => handleFormChange(e)}
              id="firstName"
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => handleFormChange(e)}
              id="lastName"
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => handleFormChange(e)}
              id="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => handleFormChange(e)}
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
