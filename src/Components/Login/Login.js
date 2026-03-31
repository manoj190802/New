import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        
        <form className="login-form">
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@email.com" required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="login-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="login-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)} className="switch-link">
              {isLogin ? 'Sign up here' : 'Log in here'}
            </span>
          </p>
        </div>
        
        <div className="back-to-home">
           <Link to="/" className="home-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
