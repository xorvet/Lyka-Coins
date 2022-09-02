import React, { useState, useEffect } from "react";
import Login from "./Login";

const Register = () => {
  const [showRegister, setShowRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {showRegister ? (
        <Login />
      ) : (
        <div className="container h-100">
        
          <div className="d-flex justify-content-md-center align-items-center vh-100">









            <div
              style={{
                backgroundColor: "#2D2E42",
                borderColor: "#27A8B5",
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 5,
                width: "45%",
                padding: 40,
              }}
              //   className="p-5"
            >
            
          <div className="text-center" >

           
            <img
              src="https://lykacoin.net/images/Logo.png"
              className="img-fluid logotop"
              style={{ width: 200, marginBottom:40}}
              alt=""
            />
</div>
              <h3 className="mb-4">Sign up to Lyka Coin</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="text-center mt-3">
                 
                   
                    <button type="submit" className="btn btn-secondary">
                      Register
                    </button>
                  
                </div>
              </form>
              <h6
              onClick={() => setShowRegister(true)}
                style={{ color: "#F8A12D", marginTop: 80, cursor: "pointer" }}
              >
                  Already Have Account
              </h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
