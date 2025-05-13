



// Login.jsx
import React, { useState } from 'react';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import '../css/login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      alert('Login successful!');
      navigate('/'); // ✅ redirect to home page
    } catch (err) {
      alert(err.message);
    }
  } else {
    setErrors(newErrors);
  }
};


  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
  };

  const handleGoogleFailure = () => {
    console.error('Google Login Failed');
  };

  return (
    <div className="login-wrapper">
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  placeholder="Enter your password"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" className="w-100 mt-4">
                Login
              </Button>

              <div className="text-center mt-3">
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
              </div>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
