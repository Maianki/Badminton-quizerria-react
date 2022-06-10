import React, { useState } from "react";
import { Navbar, Input, Label } from "components";
import { Link } from "react-router-dom";
import { useAuth } from "context";
import { AiFillEyeInvisible, AiFillEye } from "assets";
import "./login.css";

export function Login() {
  const { login, user } = useAuth();

  console.log(user);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    isRememberMe: true,
  });

  const [showPassWord, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    login(userDetails.email, userDetails.password);
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    login("guestuser@gmail.com", "guest@123");
  };

  return (
    <div className='login-container'>
      <Navbar />
      <main className='login-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Login</h2>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='email' labelName='Email' />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='johndoe@gmail.com'
                value={userDetails.email}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='password' labelName='Password' />
              <Input
                type={showPassWord ? `text` : `password`}
                id='password'
                name='password'
                placeholder='********'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassWord ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>

            <div className='form-check md-vt-1 flex-row'>
              <input
                type='checkbox'
                checked={userDetails.isRememberMe}
                onChange={() =>
                  setUserDetails({
                    ...userDetails,
                    isRememberMe: !userDetails.isRememberMe,
                  })
                }
                id='remember-me'
              />
              <label
                className='form-label-inline text-sm text-primary'
                htmlFor='remember-me'
              >
                Remember Me
              </label>
              <Link
                className='text-sm text-bold-500 forgot-password'
                to='forgot-pwd'
                role='button'
              >
                Forgot Your password
              </Link>
            </div>

            <div className='flex-column '>
              <input
                type='submit'
                className='btn btn-primary form-btn text-center'
                value='sign in'
              />
              <button
                onClick={guestLoginHandler}
                className='btn btn-secondary form-btn text-center'
              >
                Guest login
              </button>
              <p className='text-sm text-center text-bold-500 text-primary form-link-text'>
                New to shuttle shopy ?
              </p>
              <Link
                className='btn btn-secondary text-center btn-login'
                to='/signup'
                role='button'
              >
                Create Your Account
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}