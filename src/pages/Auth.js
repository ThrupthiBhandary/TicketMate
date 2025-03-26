import { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Auth({ setUser }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name || !isSignUp) {
      setUser({ name: formData.name || "User", email: formData.email });
      navigate("/"); // Redirect to Home
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <Card className="shadow-lg p-4" style={{ maxWidth: "400px" }}>
            <Card.Body>
              <h3 className="text-center mb-3">{isSignUp ? "Sign Up" : "Sign In"}</h3>
              <Form onSubmit={handleSubmit}>
                {isSignUp && (
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">{isSignUp ? "Sign Up" : "Sign In"}</Button>
              </Form>
              <p className="mt-3 text-center">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
