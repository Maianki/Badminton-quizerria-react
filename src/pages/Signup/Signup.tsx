import React, { useState } from "react";
import { toast } from "react-toastify";
import { Input, Label, Navbar } from "components";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "assets";
import { UserSignupState ,UserLoginState} from "types";
import { ThreeDots } from "react-loader-spinner";
import "./sign-up.css";
import { useAuth } from "context";

export function Signup() {
  const { signup, loader } = useAuth();

  const [userDetails, setUserDetails] = useState<UserSignupState | UserLoginState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassWord, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (userDetails.password === userDetails.confirmPassword) {
      if (userDetails.password.length >= 6) {
        signup(userDetails.email, userDetails.password);

        setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      } else {
        toast.error("Passwords length should be greater than equal to 6");
      }
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

            <div className='flex-column'>
              <button type='submit' className='btn btn-primary form-btn'>
                {loader ? (
                  <div className='loader'>
                    <ThreeDots color='#00BFFF' height={20} width={40} />
                  </div>
                ) : (
                  `Sign up`
                )}
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
