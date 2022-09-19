import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Settings = () => {
  const [lyka, setLyka] = useState("");
  const [lykaData, setLykaData] = useState("");
  const [referal, setReferal] = useState("");
  const [referalData, setReferalData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("/api/LykaValue")
        .then((acc) => {
          console.log(acc.data);
          setLykaData(acc.data);
          setLyka(acc.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .get("/api/ReferalValue")
        .then((acc) => {
          console.log(acc.data);
          setReferalData(acc.data);
          setReferal(acc.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateLyka = () => {
    try {
      axios
        .put("/api/LykaValue", {
          id: "6328b8fb9213fd000da2fc14",
          value: lyka,
        })
        .then((acc) => {
          getData();
          toast.success("Lyka Value Updated", {
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
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateReferal = () => {
    try {
      axios
        .put("/api/ReferalValue", {
          id: "6328c0949213fd000da2fc74",
          value: referal,
        })
        .then((acc) => {
          getData();
          toast.success("Referal Value Updated", {
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
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content-wrap">
      <main id="content" className="content" role="main">
        <h2>Settings</h2>

        <div className="row mt-5">
          <div className="col-sm-6">
            <label>1 USD = {lykaData.value ? lykaData.value : "?"} Lyka</label>
            <div style={{ display: "flex", gap: 5 }}>
              <input
                defaultValue={lykaData.value}
                type="number"
                class="form-control"
                placeholder="1 USD = ? Lyka"
                onChange={(e) => {
                  setLyka(e.target.value);
                }}
              ></input>
              <button onClick={handleUpdateLyka} className="btn btn-primary">
                Update
              </button>
            </div>
            <label className="mt-4">Referal Commission %</label>
            <div style={{ display: "flex", gap: 5 }}>
              <input
                defaultValue={referalData.value}
                type="text"
                class="form-control"
                placeholder="Referal Commission %"
                onChange={(e) => {
                  setReferal(e.target.value);
                }}
              ></input>
              <button onClick={handleUpdateReferal} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
