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
    {
      datas ? 

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
                  <th scope="col">Lyka Price</th>
                  <th scope="col">Invested Date</th>
                  <th scope="col">Percentage</th>
                  <th scope="col">Valid upto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{datas.userData.PackageName}</td>
                  <td>200</td>
                  <td>21-09-2022</td>
                  <td>{datas.packageData.PackageReward} APY</td>
                  <td>{datas.userData.PackageEndOn}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      :


    <></>
    }
    </>
  );
};

export default Plans;
