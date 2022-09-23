import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [walleteAddress, setWalleteAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");
      setId(JSON.parse(id));

      try {
        axios
          .post("/api/User/UserData", {
            id: JSON.parse(id),
          })
          .then((acc) => {
            setData(acc.data);
            setName(acc.data.Name);
            setUserName(acc.data.UserName);
            setMobileNumber(acc.data.Mobile_Number);
            setWalleteAddress(acc.data.WalleteAddress);
            setCountry(acc.data.Country);
            setEmail(acc.data.Email);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const UpdateData = () => {
    try {
      axios
        .put("/api/User/UserData", {
          id,
          UserName: userName,
          Name: name,
          Email: email,
          Country: country,
          Mobile_Number: mobileNumber,
          WalleteAddress: walleteAddress,
        })
        .then((acc) => {
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
          window.localStorage.setItem("username",name)
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
    <div style={{marginTop:100,marginLeft:40}}>
      {data ? (
        <main >
          <h4 className="mb-3">Profile</h4>

          <p>
            <span style={{ color: "#E7D478", cursor: "pointer" }}>
              Dashboard
            </span>{" "}
            {" > "} <span style={{ color: "#E7D478" }}>Profile</span>{" "}
          </p>

          <div className="row">
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
                        disabled
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
                        disabled
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
                        className={`form-control ${
                          data.WalleteAddress == "null" ? "border-danger" : ""
                        } `}
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
                      <label>User Id</label>
                      <input
                        defaultValue={data.UserName}
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        disabled
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
              </section>
            </div>
          </div>



          <div className="container">
            <a target="__blank" href={`https://lyka-coins.vercel.app?spoID=${data.UserName}`}><p className="text-center mt-4" style={{color:"#0CDCE5"}}>https://lyka-coins.vercel.app?spoID={data.UserName}</p></a>
          </div>





          <div className="text-center mt-5">
            <button onClick={UpdateData} className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </main>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
