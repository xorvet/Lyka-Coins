import React, { useState, useEffect } from "react";
import axios from "axios";
const DepositLyka = ({ id, inputValue, setGoForDeposit, getData ,packageName, packagePeriod, packageReward, packageMin, packageMax, amountDeposit}) => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = window.localStorage.getItem("user");
      const parsedUserId = userId.replaceAll('"', "");
      setUserId(parsedUserId);
    }
  }, []);

  const openMetaMask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        try {
          axios
            .post("/api/Package/ActivatePackage", {
              userID: userId,
              PackageName: packageName,
              PackagePeriod: packagePeriod,
              PackageReward: packageReward,
              PackageMin: packageMin+"$",
              PackageMax: packageMax+"$",
              AmountDeposit: amountDeposit+"$",
              LykaTokens: Number(inputValue) * 2,
            })
            .then((acc) => {
              getData();
              setGoForDeposit(false);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {}
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <>
      <h3 className="mb-4 mt-5">Deposit Lyka</h3>
      <div
        className="mb-5 mt-5"
        style={{
          borderColor: "#0CDCE5",
          borderWidth: 2,
          borderStyle: "solid",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <h4>
          You Need To Deposit{" "}
          <span style={{ fontWeight: "bold" }}>
            {Number(inputValue) * 2} Lyka Tokens{" "}
          </span>{" "}
          To Activate This Plan
        </h4>

        <h6 style={{ color: "#21AE8C", fontWeight: "bold" }}>
          0x531B05284aAb36fB15A57edeC2670404D025714a
        </h6>

        <div className="mt-4">
          <button onClick={openMetaMask} className="btn btn-primary">
            Deposit
          </button>
        </div>

        <p
          style={{ cursor: "pointer" }}
          className="text-danger mt-5 ml-2"
          onClick={() => setGoForDeposit(false)}
        >
          Cancel
        </p>
      </div>
    </>
  );
};

export default DepositLyka;
