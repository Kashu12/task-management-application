import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
            <p>Have no account yet? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;
