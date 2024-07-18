import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:1122/users?username=${username}&password=${password}`);
            if (response.data.length > 0) {
                login(username, password);
                navigate('/');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Error logging in');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={6} className="mx-auto">
                    <h2 className="text-center">Login</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4 w-100">
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <Link to="/register">Don't have an account? Register</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
