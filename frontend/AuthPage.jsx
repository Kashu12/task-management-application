import React from 'react';
import './AuthPage.css'; // Add styles in a separate CSS file for modularity

const AuthPage = () => {
    return (
        <div className="auth-container">
            {/* Left section with illustration */}
            <div className="auth-illustration">
                <div className="auth-welcome">
                    <img src="/path/to/illustration.png" alt="Welcome illustration" />
                    <p>Welcome aboard my friend</p>
                    <p>just a couple of clicks and we start</p>
                </div>
            </div>

            {/* Right section with form */}
            <div className="auth-form">
                <div className="form-header">
                    <h2>Login</h2>
                    {/* Hide/unhide password icons */}
                    <span className="toggle-password">
                        <i className="icon-eye"></i>
                    </span>
                </div>

                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email" required />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className="login-button">Log in</button>
                </form>

                <p>Have no account yet? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="auth-container">
            {/* Left section with illustration */}
            <div className="auth-illustration">
                <div className="auth-welcome">
                    <img src="frontend\Group.png" alt="Welcome illustration" />
                    <p>Welcome aboard my friend</p>
                    <p>just a couple of clicks and we start</p>
                </div>
            </div>

            {/* Right section with form */}
            <div className="auth-form">
                <h2>Register</h2>
                
                <form>
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Name" required />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email" required />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <span onClick={togglePasswordVisibility} className="toggle-password">
                            {showPassword ? 'Hide' : 'Show'}
                        </span>
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                        />
                        <span onClick={toggleConfirmPasswordVisibility} className="toggle-password">
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </span>
                    </div>

                    <button type="submit" className="register-button">Register</button>
                </form>

                <p>Have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
};

export default AuthPage;
