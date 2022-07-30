import { useFormik } from "formik";
import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    const formik=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:async (values)=>{
        
        }
    })
   
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label>Username</label>
          <input
            type={"text"}
            placeholder={"username"}
            className={"form-control"}
            name={"username"}
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-lg-12">
          <label>Password</label>
          <input
            type={"password"}
            placeholder={"password"}
            className={"form-control"}
            name={"username"}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-lg-12 mt-2">
         
          <input
            type={"submit"}
           
            className={"btn btn-primary"}
                       
          />
        </div>
        <p>Dont have an account?<Link to={"/register"}>Sign-up</Link></p>
      </div>
    </div>
  );
}

export default Login;
