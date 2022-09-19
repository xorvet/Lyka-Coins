import React,{useState,useEffect} from "react";
import axios from "axios";

const WithdrawalHistory = () => {
  const [datas, setDatas] = useState("");


  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");


      console.log(JSON.parse(id))

      try {
        axios
          .post("/api/WithdrawalHistory", {
            id: JSON.parse(id),
          })
          .then((acc) => {
            setDatas(acc.data);
            console.log(acc.data)
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
        <h4 className="mb-3">Withdrawal History</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>Withdrawal History</span>{" "}
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
                <th scope="col">Coins</th>
                <th scope="col">Wallete</th>
                <th scope="col">Deducted Value</th>
                <th scope="col">Date</th>
                <th scope="col">Hash</th>
              
              </tr>
            </thead>
            <tbody>

            {
              datas ?
              datas.map((hit,index)=>{
                return  <tr key={hit._id}>
                <td>{index+1}</td>
                <td>{Number(hit.DeductedCoins)} Coins</td>
                <td>{hit.Wallete}</td>
                <td>{Number(hit.DeductedValue).toFixed(1)} Coins</td>
                <td>{hit.createdAt}</td>
                <td>{hit.Hash}</td>
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

export default WithdrawalHistory;
