import React, { useState } from "react";
import { Navbar, Input, Label } from "components";
import { Link } from "react-router-dom";
import { useAuth } from "context";
import { ThreeDots } from "react-loader-spinner";
import { AiFillEyeInvisible, AiFillEye } from "assets";
import { UserLoginState } from "types";

import "./login.css";

export function Login() {
  const { login, loader } = useAuth();

  const [userDetails, setUserDetails] = useState<UserLoginState>({
    email: "",
    password: ""
  });

  const [showPassWord, setShowPassword] = useState(false);

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login(userDetails.email, userDetails.password);
  };

  const guestLoginHandler = (e: { preventDefault: () => void; }) => {
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

            <div className='flex-column'>
              {loader ? (
                <div className='loader'>
                  <ThreeDots color='#00BFFF' height={20} width={40} />
                </div>
              ) : (
                <input
                  type='submit'
                  className='btn btn-primary form-btn text-center'
                  value='Sign In'
                />
              )}
              <button
                onClick={guestLoginHandler}
                className='btn btn-secondary form-btn text-center'
              >
                {loader ? (
                  <div className='loader'>
                    <ThreeDots color='#00BFFF' height={20} width={40} />
                  </div>
                ) : (
                  `Guest Login`
                )}
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
