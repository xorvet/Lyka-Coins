import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionHistory = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");

      try {
        axios
          .post("/api/History/TransaactionHistory", {
            id: JSON.parse(id),
          })
          .then((acc) => {
            setDatas(acc.data);
            console.log(acc.data);
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
    <div style={{marginTop:100,marginLeft:40}}>
      <main >
        <h4 className="mb-3 mt-3">Transaction History</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Transaction History</span>{" "}
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
                <th scope="col">USD</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Performed By</th>
                <th scope="col">Date</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {datas ? (
                datas.map((hit, index) => {
                  return (
                    <tr key={hit._id}>
                      <td>{index + 1}</td>
                      <td>{hit.Amount}</td>
                      <td>
                        {hit.TransactionType == 0 ? "Credited" : "Debited"}
                      </td>
                      <td>Admin</td>
                      <td>{hit.createdAt}</td>
                      <td>{hit.Remark}</td>
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

export default TransactionHistory;
