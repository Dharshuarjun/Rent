import React from 'react';


function Register() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div><h2>Register</h2></div>
          <label className="font-weight-bold text-danger">Username</label>
          <input
            type={"text"}
            
            className={"form-control"}
            name={"username"}
           
          />
        </div>
        <div className="col-lg-12">
          <label className="font-weight-bold text-danger">Email</label>
          <input
            type={"text"}
           
            className={"form-control"}
            name={"email"}
           />
        </div>
        <div className="col-lg-12">
          <label className="font-weight-bold text-danger">password</label>
          <input
            type={"password"}
           
            className={"form-control"}
            name={"password"}
           />
        </div>
        <div className="col-lg-12 mt-2">
         
          <input
            type={"submit"}
           value={"submit"}
            className={"btn btn-primary"}
           
           />
        </div>
       
        </div>
        </div>
   
  )
};

export default Register;