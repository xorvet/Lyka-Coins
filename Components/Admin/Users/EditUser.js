import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditUser = ({ id, setOpenEdit, getDatas }) => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [walleteAddress, setWalleteAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [ids, setId] = useState("");
  const [password, setPassword] = useState("");
  const [Status, setStatus] = useState("");
  const [wallete, setWallete] = useState("");
  const [Package, setPackage] = useState("");
  const [packageId, setPackageId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .post("/api/Admin/UserData", {
          id: id,
        })
        .then((acc) => {
          setData(acc.data);
          setName(acc.data.Name);
          setUserName(acc.data.UserName);
          setMobileNumber(acc.data.Mobile_Number);
          setWalleteAddress(acc.data.WalleteAddress);
          setCountry(acc.data.Country);
          setEmail(acc.data.Email);
          setPassword(acc.data.Password);
          setStatus(acc.data.Status);
          setWallete(acc.data.Wallete);
          setPackage(acc.data.PackageName);
          setPackageId(acc.data.PackageId);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateData = () => {
    try {
      axios
        .put("/api/Admin/UserData", {
          id,
          UserName: userName,
          Name: name,
          Email: email,
          Country: country,
          Mobile_Number: mobileNumber,
          WalleteAddress: walleteAddress,
          password: password,
          Status: Status,
          wallete: wallete,
          Package: Package,
          packageId: packageId,
        })
        .then((acc) => {
          getDatas();
          getData();

          toast.success("User Data Update", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          getData();
          window.localStorage.setItem("username", name);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <main >
        <svg
          style={{ cursor: "pointer" }}
          onClick={() => setOpenEdit(false)}
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>

        <h4 className="mb-3 mt-3">
          Update{" "}
          <span style={{ color: "#A90C9A", fontWeight: "bold" }}>
            {data ? data.Name : "User"}
          </span>{" "}
          Details
        </h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>All Users</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Update User</span>{" "}
        </p>

        <div className="row mt-3">
          <div className="col-sm-12">
            <section className="widget mb-0 h-100 p-5">
              <div className="row mt-4">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      defaultValue={data.Name}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      defaultValue={data.Mobile_Number}
                      maxLength={13}
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number"
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email Id</label>
                    <input
                      defaultValue={data.Email}
                      type="email"
                      className="form-control"
                      placeholder="Email Id"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lyka Wallet Address</label>
                    <input
                      defaultValue={
                        data.WalleteAddress == "null"
                          ? "Address Not Provided"
                          : data.WalleteAddress
                      }
                      type="text"
                      className={`form-control `}
                      placeholder="Lyka Wallet Address"
                      onChange={(e) => {
                        setWalleteAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      defaultValue={data.UserName}
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      defaultValue={data.Country}
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      defaultValue={data.Password}
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Status</label>
                    <input
                      defaultValue={data.Status}
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Wallete</label>
                    <input
                      min={0}
                      defaultValue={data.Wallete}
                      type="number"
                      className="form-control"
                      placeholder="User Name"
                      onChange={(e) => {
                        setWallete(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Package</label>
                    <input
                      defaultValue={
                        data.PackageName === "null"
                          ? "This User Don't Have Any Active Plan"
                          : data.PackageName
                      }
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      onChange={(e) => {
                        setPackage(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="text-center mt-5">
          <button onClick={UpdateData} className="btn btn-primary">
            Update Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditUser;
