import React, { useState, useEffect, useRef } from "react";
import Intro from "../Components/Home/Intro";
import Menu from "../Components/Home/Menu";
import Packages from "../Components/Home/Packages";
import Plans from "../Components/Home/Plans";
import ProfileData from "../Components/Home/ProfileData";
import axios from "axios";
const Index = () => {
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [blocked, setBlocked] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (typeof window !== "undefined") {
      const id = window.localStorage.getItem("user");
      console.log(id);

      try {
        axios
          .post("/api/User/UserData", {
            id: JSON.parse(id),
          })
          .then((acc) => {
            console.log(acc.data);

            setStatus(acc.data.Status);

            if (acc.data.Status == "blocked") {
              ref.current.click();
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
    <div className="minecss" style={{ marginTop: 50 }}>
      <main>
        <div className="analytics">
          <div className="analytics-side">
            <div
              className="modal fade"
              id="staticBackdrop"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="text-center">
                      <h2 className="text-dark">
                        Your Account Is Blocked By Admin
                      </h2>
                      <p className="text-dark">
                        {" "}
                        you can talk to them via this mail
                      </p>
                      <p className="text-dark"> help@lykayield.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Intro />
            <Menu />
            {status == "Active" ? <Plans /> : <Packages getDatas={getData} />}
            {/* <ProfileData /> */}
          </div>
        </div>
        <footer className="page-footer text-center d-none">
          2022 © All rights reserved. <a href="/Member">Lyka Coin</a>
        </footer>
      </main>

      <button
        ref={ref}
        style={{
          backgroundColor: "#171621",
          borderColor: "#171621",
          borderBlockColor: "#171621",
        }}
        data-toggle="modal"
        data-target="#staticBackdrop"
      ></button>
    </div>
  );
};

export default Index;
