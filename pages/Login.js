import React, { useState, useEffect } from "react";
import Link from "next/link";
import Register from "./Register";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();

  const [showRegister, setShowRegister] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [spoId, setSpoId] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    var num = router.query;
    console.log(Object.keys(num).length);

    if (Object.keys(num).length !== 0) {
      setSpoId(num);
      setShowRegister(true);
    }
  }, [router.isReady]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/Login", {
        identifier,
        password,
      })
      .then((acc) => {
      
        if (acc.data.UserType == "AdminUser") {
          console.log(acc.data);
          router.reload();
          localStorage.setItem("user", JSON.stringify(acc.data._id));
          localStorage.setItem("username", String(acc.data.Name));
          localStorage.setItem("userType", String(acc.data.UserType));
          localStorage.setItem("UserName", String(acc.data.UserName));
        }
   
      })
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      {showRegister ? (
        <Register ReferCode={spoId} />
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

                padding: 40,
              }}
              //   className="p-5"
            >
              <div className="text-center">
                <img
                  src="https://lykacoin.net/images/Logo.png"
                  className="img-fluid logotop"
                  style={{ width: 200, marginBottom: 40 }}
                  alt=""
                />
              </div>
              <h3>Login To Your Lyka Yield</h3>
              <p className="mt-3 mb-1 " style={{ color: "#888888" }}>
                Use your userid as username to sign in.
              </p>
              <p className="" style={{ color: "#888888" }}>
                Dont have and account Signup now!
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email or Password"
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                {/* <div className="float-right mt-3">
                  <div style={{ display: "flex", gap: 5 }}>
                    <button
                      onClick={() => setShowRegister(true)}
                      type="submit"
                      className="btn btn-light"
                    >
                      Create An Account
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="btn btn-secondary"
                    >
                      Login
                    </button>
                  </div>
                </div> */}
              </form>
              <h6
                style={{ color: "#F8A12D", marginTop: 80, cursor: "pointer" }}
              >
                Forgot Password?
              </h6>
            </div>
          </div>


          
        </div>
      )}
    </>
  );
};

export default Login;
