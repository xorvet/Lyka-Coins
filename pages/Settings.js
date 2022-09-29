import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Settings = ({setOpenSetting}) => {
  const [lyka, setLyka] = useState("");
  const [lykaData, setLykaData] = useState("");
  const [referal, setReferal] = useState("");
  const [referalData, setReferalData] = useState("");
  const [realLykaValue, setRealLykaValue] = useState("");
  const [apiValue, setApiValue] = useState("");
  const [lykaDynamicValue, setLykaDynamicValue] = useState("");

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

    try {
      axios
        .get(
          "https://api.pancakeswap.info/api/v2/tokens/0x26844ffd91648e8274598e6e18921a3e5dc14ade"
        )
        .then((acc) => {
          console.log(acc.data.data.price);
          setApiValue(acc.data.data.price);
          setLykaDynamicValue(acc.data.data.price)
          
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  const handleUpdateLyka = () => {
    try {
      axios
        .put("/api/LykaValue", {
          id: "632f30a2c7c572c7d78645d6",
          value: lyka,
          current:realLykaValue
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



  const changinState = (e) =>{
    setRealLykaValue(e.target.value)
    console.log(e.target.value)

   
  }

  return (
    <div style={{ marginTop: 30,  }}>
     <svg
          style={{ cursor: "pointer",marginBottom:20 }}
          onClick={() => setOpenSetting(false)}
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
      <main>
        <h2>Settings</h2>

        <div className="row mt-5">
          <div className="col-sm-6">
            <label>1 USD = {realLykaValue == "Automated" ?  lykaDynamicValue  :   lykaData.value ? lykaData.value : "?"} Lyka</label>
            <div style={{ display: "flex", gap: 5 }}>
              <input
                defaultValue={lykaData.value}
                type="number"
                className="form-control"
                placeholder="1 USD = ? Lyka"
                onChange={(e) => {
                  setLyka(e.target.value);
                }}
                disabled={realLykaValue == "Manual" ?false:true}
                checked={realLykaValue == "Manual" ? true : false}
                
              ></input>
              <button onClick={handleUpdateLyka} className="btn btn-primary">
                Update
              </button>
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="form-check">
                <input
                  onChange={(e) => changinState(e) }
                  value="Automated"
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"

                  checked={realLykaValue == "Automated" ? true : false}
                  
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Automated
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={(e) => changinState(e) }
                  value="Manual"
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  // defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Manual
                </label>
              </div>
            </div>

            <label className="mt-4">Referal Commission %</label>
            <div style={{ display: "flex", gap: 5 }}>
              <input
                defaultValue={referalData.value}
                type="text"
                className="form-control"
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
