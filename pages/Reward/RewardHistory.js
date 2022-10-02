import React, { useState, useEffect } from "react";
import axios from "axios";
const RewardHistory = () => {
  const [datas, setDatas] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");


      console.log(JSON.parse(id))

      try {
        axios
          .post("/api/RewardHistory", {
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
  }, []);

  return (
    <div style={{marginTop:100,paddingLeft:80 }}>
      <main >
        <h4 className="mb-3 ">Your Reward History</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Reward History</span>{" "}
        </p>

        <div className="mt-5">
        <div className="table-responsive">

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
                <th scope="col">Reward Package Name</th>
                <th scope="col">Deposited Amount</th>
                <th scope="col">Reward USDT</th>
                <th scope="col">Reward Percentage</th>
                <th scope="col">RewardTime</th>
              </tr>
            </thead>
            <tbody>
             {
              datas ? 
              datas.map((hit,index)=>{
                return  <tr key={hit._id}>
                <td>{index+1}</td>
                <td>{hit.PackageName}</td>
                <td>{hit.DepositedAmount}</td>
                <td>{hit.RewardCoin}</td>
                <td>{hit.RewardPercentage}% APY</td>
                <td>{hit.createdAt}</td>
              </tr>
              })
             

              :



              <></>
             }
            </tbody>
          </table>
        </div>
        </div>
      </main>
    </div>
  );
};

export default RewardHistory;
