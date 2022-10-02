import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateMail = ({ setCreateNewMail, trailMailId }) => {
  const [sub, setSub] = useState("");
  const [body, setBody] = useState("");

  var val;
  var val2;
  if (typeof window !== "undefined") {
    val = localStorage.getItem("UserName");
    val2 = localStorage.getItem("username");
  }

  const handleSend = () => {
    try {
      axios
        .post("/api/MailSupport/MailSupport", {
          MailSubject: sub,
          MailBody: body,
          Attachment: "",
          To: "Admin",
          From: val,
        })
        .then((acc) => {
          console.log(acc.data);
          window.alert("Mail Sent")
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
        onClick={() => setCreateNewMail(false)}
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: 25, cursor: "pointer" }}
        width={26}
        height={26}
        fill="currentColor"
        className="bi bi-arrow-left-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
      </svg>

      <div className="container mt-5">
        <div className="form-group">
          <input
            onChange={(e) => {
              setSub(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => {
              setBody(e.target.value);
            }}
            role={40}
            type="text"
            className="form-control"
            placeholder="Mail Content"
          />
        </div>
        <button onClick={handleSend} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default CreateMail;
