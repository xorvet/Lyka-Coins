import React, { useState, useEffect } from "react";
import axios from "axios";
const ReferalSystem = () => {
  const [data, setData] = useState("");
  const [datas, setDatas] = useState("");

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



            try {
              


              axios.post("/api/History/ReferalHistory",{
                id:JSON.parse(id)
              })
              .then((acc)=>{
                console.log(acc.data)
                setDatas(acc.data)
              })
              .catch((err)=>{
                console.log(err)
              })








            } catch (error) {
              console.log(error)
            }













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
    <div style={{ marginTop: 100, marginLeft: 40 }}>
      <main>
        <h4 className="mb-3 ">Refer & Earn</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Refer&Earn</span>{" "}
        </p>

        <h3 className="text-center mt-3">
          https://lyka-coins.vercel.app?spoID={data ? data.UserName : "00000"}
        </h3>

        <h4 className="mb-3 mt-5">Your Referals</h4>

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
              <th scope="col">Referal User</th>
              <th scope="col">Package Name</th>
              <th scope="col">USD</th>
              <th scope="col">Date</th>
            
            </tr>
          </thead>
          <tbody>
          {
            datas ?  
            datas.map((hit,index)=>{
              return  <tr key={hit._id}>
              <td>{index+1}</td>
              <td>{hit.ReferalName}</td>
              <td>{hit.PackageName}</td>
              <td>{hit.Coins}</td>
              <td>{hit.createdAt}</td>
            </tr>
            })
           

            :


            <></>
          }
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ReferalSystem;
