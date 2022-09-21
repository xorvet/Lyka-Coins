import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import ABI from "../../Web3Resources/ABI.js";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";

const Withdrawal = () => {
  const [identifier, setIdentifier] = useState("");
  const [datas, setDatas] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [HashCode, setHashCode] = useState("");

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
            // console.log(acc.data.WalleteAddress)
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
    if (datas.WalleteAddress == "null") {
      return setMessage("Your Have Not Entered Your Wallate Address Yet");
    }

    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          setMessage("");
          const privateKey =
            "a0eb7c28c883375a9f4e41f74d74fb98cbd2d0a5e6d520f566522dce39f72319";
          const web3 = new Web3(window.ethereum);
          const tokenAddress = "0xB1E019D89b46c782232048c6CCe5ba0396F1bA67";
          const fromAddress = "0x746816E08e1E3F66dc014Efc02815C9A3B36b511";
          const contract = new web3.eth.Contract(ABI, tokenAddress, {
            from: fromAddress,
          });
          let amount = web3.utils.toHex(web3.utils.toWei(identifier));
          let data = contract.methods
            .transfer(datas.WalleteAddress, amount)
            .encodeABI()
			
          function sendErcToken() {
            let txObj = {
              gas: web3.utils.toHex(100000),
              to: tokenAddress,
              value: "0x00",
              data: data,
              from: fromAddress,
            };
            web3.eth.accounts.signTransaction(
              txObj,
              privateKey,
              (err, signedTx) => {
                if (err) {
                  return callback(err);
                } else {
                  console.log(signedTx);
                  return web3.eth.sendSignedTransaction(
                    signedTx.rawTransaction,
                    (err, res) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log(res);
                     




                        try {
                          axios
                            .post("/api/Withdraw", {
                              userId: id,
                              coins: identifier,
                              Hash:res
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






                      }
                    }
                  );
                }
              }
            );
          }

          sendErcToken();
          setMessage("");
         
        });
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <div style={{marginTop:100,marginLeft:40}}>
      <main >
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

            {/* <h5 className="mt-3" style={{ color: "#CDBD6E" }}>
              {datas.Wallete} X 2 = {Number(datas.Wallete) * 2} Lyka Coins
            </h5> */}

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
