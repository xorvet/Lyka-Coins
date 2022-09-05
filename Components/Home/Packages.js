import React, { useState, useEffect } from "react";
import axios from "axios";
import DepositLyka from "../Packages/DepositLyka";

const Packages = ({getDatas}) => {
  const [datas, setDatas] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [goForDeposit, setGoForDeposit] = useState(false);
  const [id, setId] = useState("");



  const [packageName, setPackageName] = useState("");
  const [packagePeriod, setPackagePeriod] = useState("");
  const [packageReward, setPackageReward] = useState("");
  const [packageMin, setPackageMin] = useState("");
  const [packageMax, setPackageMax] = useState("");
  const [amountDeposit, setAmountDeposit] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("/api/Package/Packages")
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

  const handleButttonClicked = (id,name,packagePeriod,packageReward,packageMin,packageMax,amountDeposit) => {
    setId(id)
    setGoForDeposit(true)
    setPackageName(name)
    setPackagePeriod(packagePeriod)
    setPackageReward(packageReward)
    setPackageMin(packageMin)
    setPackageMax(packageMax)
    setAmountDeposit(amountDeposit)
  };

  return (
    <>
      {goForDeposit && <DepositLyka packageName={packageName} packagePeriod={packagePeriod} packageReward={packageReward} packageMin={packageMin}  packageMax={packageMax} amountDeposit={amountDeposit} getData={getDatas}  id={id} inputValue={inputValue} setGoForDeposit={setGoForDeposit} />}
      {!goForDeposit && (
        <div className="mt-5 mb-5">
          <h3 className="mb-4">Available Plans</h3>
          <div className="">
            <div className="row">
              {datas ? (
                datas.map((hit) => {
                  return (
                    <div className="col-sm-3 m-2" key={hit._id}>
                      <div
                        style={{
                          borderColor: "#0CDCE5",
                          borderWidth: 2,
                          borderStyle: "solid",
                          padding: 30,
                          borderRadius: 10,
                        }}
                      >
                        <h5 className="text-center">{hit.PackageName}</h5>
                        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
                          {hit.PackageReward} APY
                        </h1>
                        <p className="mt-3">
                          Locked Period: {hit.PackagePeriod} Year
                        </p>
                        <p style={{ marginTop: -15 }}>
                          Withdrawal Rewars: Anytime
                        </p>

                        <div className="input-group mb-3">
                          <input
                            min={Number(hit.PackageMin)}
                            max={Number(hit.PackageMax)}
                            type="number"
                            className="form-control"
                            aria-describedby="button-addon2"
                            onChange={(e) => {
                              setInputValue(e.target.value);
                            }}
                            defaultValue={inputValue}
                          />
                          {inputValue < Number(hit.PackageMin) ||
                          inputValue > Number(hit.PackageMax) ? (
                            <button
                              className="btn btn-outline-secondary disabled"
                              type="button"
                              id="button-addon2"
                            >
                              Deposit
                            </button>
                          ) : (
                            <button
                              onClick={() => handleButttonClicked(hit._id,hit.PackageName,hit.PackagePeriod,hit.PackageReward,hit.PackageMin,hit.PackageMax,inputValue)}
                              className="btn btn-outline-secondary"
                              type="button"
                              id="button-addon2"
                            >
                              Deposit
                            </button>
                          )}
                        </div>
                        <p className="text-center">
                          Min: {hit.PackageMin}$ - Max: {hit.PackageMax}$
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Packages;
