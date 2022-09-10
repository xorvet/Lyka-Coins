import React from "react";
import Link from 'next/link'

const WalleteMessage = ({ setShowMessage }) => {
  return (
    <div
      style={{
        borderColor: "#0CDCE5",
        borderStyle: "solid",
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: "#2E2E42",
      }}
    >
      <div className="row">
        <div className="col">
          <h5>You Have Not Entered You Wallete Address Yet</h5>
        </div>
        <div className="col">
          <p className="text-right">
            <svg
              onClick={() => setShowMessage(false)}
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-x-octagon-fill text-danger"
              viewBox="0 0 16 16"
            >
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </p>
        </div>
      </div>

      <p>please update it by clicking below.</p>
      <Link href="/Profile">
      <button className="btn btn-primary">Add Wallete Address</button>
      </Link>
    </div>
  );
};

export default WalleteMessage;
