import React, { useState, useEffect } from "react";
import axios from "axios";
const DynamicMail = ({ trailMailId, setShowMail }) => {
    const [datas, setDatas] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .post("/api/Notifications/FindSingleNotification", {
            userid:trailMailId
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
  };

  return (
    <div className="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setShowMail(false)}
        style={{ marginBottom: 25, cursor: "pointer" }}
        width={26}
        height={26}
        fill="currentColor"
        className="bi bi-arrow-left-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
      </svg>


      {
        datas ? 
        datas.map((hit)=>{
            return <div style={{margin:15}} key={hit._id} id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link text-dark"
                style={{ fontWeight: "bold" }}
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {hit.MailSubject}
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
             {hit.MailBody}
            </div>
          </div>
        </div>
      </div>
        })

      


        :


        <></>
      }

    </div>
  );
};

export default DynamicMail;
