import React, { useState, useEffect } from "react";
import WalleteMessage from "../WalleteMessage";
import axios from "axios";
const Intro = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");

      try {
        axios
          .post("/api/User/UserData", {
            id: JSON.parse(id),
          })
          .then((acc) => {
            setData(acc.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {data ? (
        data.WalleteAddress == "null" ? (
          <>
            {showMessage ? (
              <WalleteMessage setShowMessage={setShowMessage} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}

      <div>
        <div id="ctl00_divMsgMaster" className="text-center text-danger mb-2" />
        <h3 className="page-title">
          Hello{" "}
          <small>
            {typeof window !== "undefined"
              ? window.localStorage.getItem("username")
              : "User"}
          </small>
          {/* <small className="d-block fs-larger text-danger">Inactive</small> */}
        </h3>
        <h5
          style={{
            fontWeight: 800,
            color: "#fe0000",
            fontSize: 28,
            margin: 0,
            display: "none",
          }}
        >
          <img
            src="https://lykacoin.io/images/Live.gif"
            alt="Live"
            style={{ maxWidth: 80, margin: "-20px -15px -15px" }}
          />
          RATE <span className="text-success">$1.00</span>
        </h5>
        <p className="mb-0 fs-mini">
          <span className="circle bg-success" style={{ fontSize: 6 }} />
          Contract :
          <a
            href="https://bscscan.com/address/0x26844Ffd91648e8274598e6e18921a3E5Dc14ADe"
            target="_blank"
          >
            0x26844Ffd91648e8274598e6e18921a3E5Dc14ADe
          </a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Intro;
