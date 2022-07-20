import React from "react";
import { UserLoginState, UserSignupState } from "types";

type InputProps = {
  type: 'text' | 'password' | 'email' ,
  id: string,
  name: string,
  placeholder: string,
  isRequired?: boolean,
  value: string |undefined,
  userDetails : UserLoginState | UserSignupState,
  setUserDetails: React.Dispatch<React.SetStateAction<UserLoginState | UserSignupState >>
}

export function Input({
  type,
  id,
  name,
  placeholder,
  isRequired = true,
  value,
  setUserDetails,
  userDetails,
} : InputProps) {

  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <input
      className='form-input form-input-lg pd-1'
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={isRequired}
      onChange={changeHandler}
    />
  );
}
