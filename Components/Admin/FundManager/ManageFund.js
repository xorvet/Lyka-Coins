import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ManageFund = ({ setEditFund, id ,getDatas}) => {
  const [data, setData] = useState("");
  const [Transactiontype, setTransactiontype] = useState(0);
  const [Value, setValue] = useState("");
  const [Remark, setRemark] = useState("");

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
          //   console.log(acc.data)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    console.log(Transactiontype, Value, Remark,id);

    try {
      axios
        .post("/api/Admin/FundManager/manageFund", {
          TransactionType: Transactiontype,
          TransactionValue: Value,
          Remark: Remark,
          Id:id,
        })
        .then((acc) => {
          // console.log("acc.data");
          getData()
          getDatas()
          toast.success('Transaction Done', {
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
           toast.error('Something Went Wrong', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
          console.log(err);
          getData()

        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-wrap">
      <main id="content" className="content" role="main">
        <svg
          style={{ cursor: "pointer" }}
          onClick={() => setEditFund(false)}
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
            {" "}
            {data ? data.Name : "User"}{" "}
          </span>{" "}
          Fund
        </h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>All Users</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Update Fund</span>{" "}
        </p>

        {data ? (
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
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        defaultValue={data.Mobile_Number}
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Email-Id</label>
                      <input
                        defaultValue={data.Email}
                        type="text"
                        className="form-control"
                        placeholder="Email-Id"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>User-Id</label>
                      <input
                        defaultValue={data.UserName}
                        type="text"
                        className="form-control"
                        placeholder="User-Id"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Wallete</label>
                      <input
                        value={data.Wallete.toFixed(2)}
                        type="text"
                        className="form-control"
                        placeholder="Wallete"
                        disabled
                      />
                    </div>

                    <div>
                      <p>
                        Transaction Type <span style={{ color: "red" }}>*</span>
                      </p>
                      <div className="form-check">
                        <input
                          onChange={(e) => {
                            setTransactiontype(e.target.value);
                          }}
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={0}
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Add Fund
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          onChange={(e) => {
                            setTransactiontype(e.target.value);
                          }}
                          value={1}
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Deduct Fund
                        </label>
                      </div>
                    </div>

                    <div className="form-group mt-3">
                      <label>
                        Transaction Value{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Transaction Value"
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Remark<span style={{ color: "red" }}>*</span>
                      </label>
                      <textarea
                        style={{ height: 520 }}
                        type="text"
                        className="form-control"
                        placeholder="Add Some Remark Here..."
                        onChange={(e) => {
                          setRemark(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Make Transaction
                  </button>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default ManageFund;
