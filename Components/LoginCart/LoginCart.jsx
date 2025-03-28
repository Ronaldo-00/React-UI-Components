import React, { useEffect, useState } from 'react';
import "./LoginCart.css";
import eyeOpen from "./images/eye-o.png" //eye open image
import eyeClose from ".images//eye-c.png" //eye close image

const LoginCart = () => {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const texts = ["Line1", "Line2", "Line3"];
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='contain'>
      {/* Top-right positioned button */}
      <button className="btn-1" onClick={toggleCart}>
        Login/Register
      </button>
      {/* Cart appears in the center when showCart is true */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart">
            <button className="close-btn" onClick={toggleCart}>✖</button>
            <div className="row">
              <div className="col-left">
                <div className='d-text'>Write Yours</div>
                <div className='d-text'>Company Moto</div>
                <div className='left-anim'></div>
                <div className='text-anim'>{texts[textIndex]}</div>
              </div>
              <div className="col-right">
                <div className="cart-content">
                  <h2>Welcome to App</h2>
                  <input type="text" placeholder="Your Email Address" className="input" />
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="input password-input"
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img className='eye-icon' src={showPassword ? eyeClose : eyeOpen}></img>
                    </span>
                 </div>
                 <button className="login-btn">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginCart;