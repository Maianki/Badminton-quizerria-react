import React, { useState } from "react";
import { Input, Label, Navbar } from "components";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "assets";
import "./sign-up.css";
import { useAuth } from "context";

export function Signup() {
  const { signup } = useAuth();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndCondition: true,
  });

  const [showPassWord, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (userDetails.password === userDetails.confirmPassword) {
      signup(userDetails.email, userDetails.password);

      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndCondition: "",
      });
    } else {
    }
  };

  return (
    <div className='signup-container'>
      <Navbar />
      <main className='signup-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Sign Up</h2>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='firstName' labelName='First Name' />
              <Input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='John'
                value={userDetails.firstName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='lastName' labelName='Last Name' />
              <Input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Doe'
                value={userDetails.lastName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

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
                type={showPassWord.password ? `text` : `password`}
                id='password'
                name='password'
                placeholder='********'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    password: !showPassWord.password,
                  })
                }
              >
                {showPassWord.password ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>

            <div className='form-set'>
              <Label labelFor='confirm-password' labelName='Confirm Password' />
              <Input
                type={showPassWord.confirmPassword ? `text` : `password`}
                id='confirm-password'
                name='confirmPassword'
                placeholder='Enter pasword again'
                value={userDetails.confirmPassword}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    confirmPassword: !showPassWord.confirmPassword,
                  })
                }
              >
                {showPassWord.confirmPassword ? (
                  <AiFillEye />
                ) : (
                  <AiFillEyeInvisible />
                )}
                <i className='fas fa-eye'></i>
              </span>
            </div>

            <div className='form-check md-vt-1 flex-row'>
              <input
                type='checkbox'
                value='demo'
                name='termsAndCondition'
                id='terms-and-conditions'
                checked={userDetails.termsAndCondition}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    termsAndCondition: !userDetails.termsAndCondition,
                  })
                }
              />
              <label
                className='form-label-inline text-sm text-primary'
                htmlFor='terms-and-conditions'
              >
                I accept all terms and conditions.
              </label>
            </div>

            <div className='flex-column'>
              <button type='submit' className='btn btn-primary form-btn'>
                Sign up
              </button>
              <p className='text-sm text-center text-bold-500 text-primary form-link-text'>
                Existing user ?
                <Link className='text-primary pd-ht-1' to='/login'>
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
