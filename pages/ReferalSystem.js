import React, { useState, useEffect } from "react";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const  handleCopy = () =>{
    toast.success("Copied", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });


  }

  return (
    <div className="minecss" style={{ marginTop: 100 }}>
      <main>
        <h4 className="mb-3 ">Refer & Earn</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Refer&Earn</span>{" "}
        </p>
<div style={{display:"flex",justifyContent:"center",gap:20}}>

        <h3 className="text-center mt-3">
          https://www.lykayield.com?spoID={data ? data.UserName : "00000"}
        </h3>
        <div>
<CopyToClipboard onCopy={handleCopy} text={`https://www.lykayield.com?spoID=${data ? data.UserName : "00000"}`} >

        <button className="btn btn-primary mt-3">Copy</button>
</CopyToClipboard>
        </div>
</div>

        <h4 className="mb-3 mt-5">Your Referrals</h4>
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
              <th scope="col">Referrals User</th>
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
        </div>
      </main>
    </div>
  );
};

export default ReferalSystem;
