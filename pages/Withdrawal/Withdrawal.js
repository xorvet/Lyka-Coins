import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Withdrawal = () => {
  const [identifier, setIdentifier] = useState("");
  const [datas, setDatas] = useState("");
  const [message, setMessage] = useState("");
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
            setDatas(acc.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleWithdraw = () => {
    setMessage("");
    try {
      axios
        .post("/api/Withdraw", {
          userId: id,
          coins: identifier,
        })
        .then((acc) => {
          console.log(acc.data);
          getData();

          toast.success("Withdrawal Done", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log(err);

          if (
            err.response.data.error ==
            "Your Have Not Entered Your Wallate Address Yet"
          ) {
            setMessage(err.response.data.error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-wrap">
      <main id="content" className="content" role="main">
        <h4 className="mb-3 ">Withdraw Your Coins</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Withdraw</span>{" "}
        </p>

        {datas ? (
          <div
            className="container mt-5"
            style={{
              borderColor: "#0CDCE5",
              borderWidth: 2,
              borderStyle: "solid",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h2>
              You Have{" "}
              <span style={{ color: "#CDBD6E" }}>{datas.Wallete} Coins</span> In
              Your Wallate
            </h2>
            <h5 className="mt-3">withdraw them now</h5>

            <h5 className="mt-3" style={{ color: "#CDBD6E" }}>
              {datas.Wallete} X 2 = {Number(datas.Wallete) * 2} Lyka Coins
            </h5>

            <div className="input-group mt-5 mb-5 container">
              <input
                onChange={(e) => {
                  setIdentifier(e.target.value);
                }}
                type="number"
                className="form-control"
                min={1}
              />
              {identifier < 1 || identifier > Number(datas.Wallete) ? (
                <button
                  className="btn btn-outline-secondary disabled"
                  type="button"
                >
                  Withdraw
                </button>
              ) : (
                <button
                  onClick={() => handleWithdraw()}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  Withdraw
                </button>
              )}
            </div>
            <p className="text-center text-danger">{message}</p>
            {message ? (
              <div className="text-center">
                <Link href="/Profile">
                  <button className="btn btn-primary">Update Now</button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Withdrawal;
