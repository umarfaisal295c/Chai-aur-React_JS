import { ErrorMessage } from "formik";
import React from 'react'

const ErrorM = ({name}) => {
  return (
    <div style={{color:"red"}}>
        <ErrorMessage name={name}/>
    </div>
  )
}

export default ErrorM