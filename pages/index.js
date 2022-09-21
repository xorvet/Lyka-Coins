import React, { useState, useEffect } from "react";
import Intro from "../Components/Home/Intro";
import Menu from "../Components/Home/Menu";
import Packages from "../Components/Home/Packages";
import Plans from "../Components/Home/Plans";
import ProfileData from "../Components/Home/ProfileData";
import axios from "axios";
const Index = () => {
  const [status, setStatus] = useState("");
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
    <div className="p-3 pl-5" style={{marginTop:50}}>
      <main >
        <div className="analytics">
          <div className="analytics-side">
            <Intro />
            <Menu />
            {status == "Active" ? <Plans /> : <Packages getDatas={getData}  />}
            {/* <ProfileData /> */}
          </div>
        </div>
        <footer className="page-footer text-center d-none">
          2022 © All rights reserved. <a href="/Member">Lyka Coin</a>
        </footer>
      </main>
    </div>
  );
};

export default Index;
