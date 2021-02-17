import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "../../apiFunctions/usersApi";

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({ message: "", color: "" });
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    let name = e.currentTarget.id;
    let value = e.currentTarget.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(credentials);
  };
  const history = useHistory();
  const handleLogin = async (credentials) => {
    try {
      let res = await login(credentials);
      if (res.ok) {
        let { token } = await res.json();
        console.log(token);
        localStorage.setItem("bearer_token", token);
        setShow(true);
        setAlert({ message: "Login successful", color: "success" });
        props.handleLogin();
        history.push("/");
      } else {
        // console.log(await res.json());
        let { error } = await res.json();
        setShow(true);
        setAlert({ message: error, color: "danger" });
      }
    } catch (error) {
      console.log(error);
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
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              onChange={(e) => {
                handleChange(e);
              }}
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
              onChange={(e) => {
                handleChange(e);
              }}
              type="password"
              placeholder="Password"
              id="password"
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
