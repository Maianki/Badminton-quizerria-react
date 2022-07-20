import React from "react";

type LabelProps = {
  labelName:string,
  labelFor:string
}

export function Label({ labelName, labelFor }:LabelProps) {
  return (
    <label className='form-label' htmlFor={labelFor}>
      {labelName}:
    </label>
  );
}
