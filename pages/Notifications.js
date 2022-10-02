import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicMail from "../Components/MailSupport/DynamicMail";
import CreateMail from "../Components/MailSupport/CreateMail";

const Notifications = () => {
  const [datas, setDatas] = useState("");
  const [showMail, setShowMail] = useState(false);
  const [trailMailId, setTrailMailId] = useState("");
  const [createNewMail, setCreateNewMail] = useState(false);

  var mid;
  if (typeof window !== "undefined") {
    mid = localStorage.getItem("UserName");
  }

  useEffect(() => {
    try {
      axios
        .post("/api/Notifications/findMyNotifications", {
          userid: mid,
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
  }, []);

  const handleShowMail = (id) => {
    setTrailMailId(id);

    setShowMail(true);
  };

  return (
    <div className="minecss" style={{ marginTop: 100 }}>
      {!showMail && !createNewMail && (
        <div style={{ textAlign: "right", marginBottom: 15 }}>
          <button onClick={()=>setCreateNewMail(true)} className="btn btn-primary">CREATE MAIL</button>
        </div>
      )}

      <main>
        {showMail && (
          <DynamicMail setShowMail={setShowMail} trailMailId={trailMailId} />
        )}
        {createNewMail && (
          <CreateMail
            setCreateNewMail={setCreateNewMail}
            trailMailId={trailMailId}
          />
        )}

        {!showMail && !createNewMail && (
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
                    <th scope="col">From</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {datas ? (
                    datas.map((hit) => {
                      return (
                        <tr
                          onClick={() => handleShowMail(hit.MailTrailId)}
                          style={{ cursor: "pointer" }}
                          key={hit._id}
                        >
                          <td>Admin</td>
                          <td>{hit.MailSubject}</td>
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
        )}
      </main>
    </div>
  );
};

export default Notifications;
