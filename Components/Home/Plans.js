import React, { useState, useEffect } from "react";
import axios from "axios";
const Plans = () => {
  const [datas, setDatas] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");
      const parsedId = id.replaceAll('"', "");

      try {
        axios
          .post("/api/User/GetActivePlan", {
            id: parsedId,
          })
          .then((acc) => {
            console.log(acc.data)
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
    <>
      {datas ? (
        <div className="mb-4">
          <h5>My Active Staked Plan</h5>
          <div className="table-responsive">
            <div>
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Plans;
