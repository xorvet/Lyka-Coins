import React, { useState, useEffect } from "react";
import axios from "axios";
import Plans from "../../Components/Home/Plans";
const Menu = () => {
  const [datas, setDatas] = useState("");
  const [datass, setDatass] = useState("");
  const [datasss, setDatasss] = useState("");
  const [lyka, setLyka] = useState("");

  let val = 0;
  let num = 0;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ids = window.localStorage.getItem("user");
      const parsedId = ids.replaceAll('"', "");
      console.log(parsedId);

      try {
        axios
          .post("/api/History/PackageDepositHistory", {
            id: parsedId,
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

      try {
        axios
          .post("/api/User/UserData", {
            id: parsedId,
          })
          .then((acc) => {
            setDatass(acc.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }

      try {
        axios
          .post("/api/RewardHistory", {
            id: parsedId,
          })
          .then((acc) => {
            setDatasss(acc.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }

      try {
        axios
          .get("/api/LykaValue")
          .then((acc) => {
            setLyka(acc.data.value);
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
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Total Staked USDT
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    {datas ? (
                      datas.map((hit) => {
                        var min = hit.AmountDeposit.replace("$", "");

                        val = val + Number(min);
                      })
                    ) : (
                      <></>
                    )}
                    <span className="text-success"> {val}$ </span>
                  </h4>
                  {/* <p style={{ textAlign: "center" }}>
                    450 LYKA at present Value
                  </p> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Available Lyka Withdrawal
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      {datass ? (
                        <span id="lblBinaryQualified" className="text-success">
                          {datass.Wallete.toFixed(4)}$
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                  </h4>
                  {/* <p style={{ textAlign: "center" }}>
                    450 LYKA at present Value
                  </p> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                LYKA Current Price
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      <span id="lblDirectBusinessLeft">
                        1 USDT = {lyka ? lyka : "..."} LYKA
                      </span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Token Yield Rewards
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      {datasss ? (
                        datasss.map((hit) => {
                          num = num + Number(hit.RewardCoin);
                        })
                      ) : (
                        <></>
                      )}
                      <span id="lblDirectBusinessRight">{num.toFixed(4)} LYKA</span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                  .timer {\n                    position: absolute;\n                    bottom: 6px;\n                    right: 10px;\n                    font-weight: 500;\n                    color: #ffc107;\n                  }\n                ",
        }}
      />
    </div>
  );
};

export default Menu;
