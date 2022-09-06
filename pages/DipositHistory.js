import React, { useState, useEffect } from "react";
import axios from "axios";
const DipositHistory = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ids = window.localStorage.getItem("user");
      const parsedId = ids.replaceAll('"', "");
      console.log(parsedId);

      try {
        axios
          .post("/api/History/PackageDepositHistory", {
            id: parsedId,
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
  }, []);

  return (
    <div className="content-wrap">
      <main id="content" className="content" role="main">
        <h4 className="mb-3">Diposit History</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Diposit History</span>{" "}
        </p>

        <div className="mt-5">
          <table
            className="table table-bordered mb-0"
            cellSpacing={0}
            rules="all"
            border={1}
            id="gvBinary"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Package Name</th>
                <th scope="col">Amount Deposit</th>
                <th scope="col">Lyka Price</th>
                <th scope="col">Invested Date</th>
                <th scope="col">Percentage</th>
                <th scope="col">Valid upto</th>
              </tr>
            </thead>
            <tbody>
              {datas ? (
                datas.map((hit,index) => {
                  return (
                    <tr key={hit._id}>
                      <td>{index+1}</td>
                      <td>{hit.PackageName}</td>
                      <td>{hit.AmountDeposit}</td>
                      <td>{hit.LykaTokens} Tokens</td>
                      <td>{hit.createdAt}</td>
                      <td>{hit.PackageReward} APY</td>
                      <td>{hit.ExpiryDate}</td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DipositHistory;
