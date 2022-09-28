import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageFund from "./ManageFund";

const AllFundAccounts = ({ setFundManager }) => {
  const [datas, setDatas] = useState("");
  const [editFund, setEditFund] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("/api/Admin/UserData")
        .then((acc) => {
          console.log(acc.data);
          setDatas(acc.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };


  const handleEditFund = (id) =>{
    setId(id)
    setEditFund(true)
  }











  return (
    <>
    {
        editFund && <ManageFund  getDatas={getData}   id={id}   setEditFund={setEditFund}   />
    }

    {
        !editFund && 


    <div className="p-3 pl-5" style={{marginTop:10}}>
      <main >
        <svg
          style={{ cursor: "pointer" }}
          onClick={() => setFundManager(false)}
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>

        <h4 className="mb-3 mt-3">All Accounts</h4>

        <p>
          <span style={{ color: "#E7D478", cursor: "pointer" }}>Dashboard</span>{" "}
          {" > "} <span style={{ color: "#E7D478" }}>All Accounts</span>{" "}
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
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Status</th>
                <th scope="col">Wallete</th>
                <th scope="col"></th>
             
              </tr>
            </thead>
            <tbody>
              {datas ? (
                datas.map((hit, index) => {
                  return (
                    <tr key={hit._id}>
                      <td>{index + 1}</td>
                      <td>{hit.Name}</td>
                      <td>{hit.Email}</td>
                      <td>{hit.Mobile_Number}</td>
                      <td>{hit.Status}</td>
                      <td>{hit.Wallete.toFixed(2)}</td>
                      <td className="text-center">
                        <button onClick={()=>handleEditFund(hit._id)} className="btn btn-primary">Manage Fund</button>
                      </td>
                      
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

    }


    </>
  );
};

export default AllFundAccounts;
