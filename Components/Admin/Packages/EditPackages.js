import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditPackages = ({ setPackageEdit, id ,getDatas}) => {
  const [packageName, setPackageName] = useState("");
  const [packagePeriod, setPackagePeriod] = useState("");
  const [packageReward, setPackageReward] = useState("");
  const [packageMin, setPackageMin] = useState("");
  const [packageMax, setPackageMax] = useState("");
  const [datas, setDatas] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      axios
        .post("/api/Package/Packages", {
          id: id,
        })
        .then((acc) => {
          console.log(acc.data);
          setDatas(acc.data);

          setPackageName(acc.data.PackageName);
          setPackagePeriod(acc.data.PackagePeriod);
          setPackageReward(acc.data.PackageReward);
          setPackageMin(acc.data.PackageMin);
          setPackageMax(acc.data.PackageMax);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    try {
      axios
        .put("/api/Package/Packages", {
          PackageName: packageName,
          PackagePeriod: packagePeriod,
          PackageReward: packageReward.replace("%", "") + "%",
          PackageMin: packageMin,
          PackageMax: packageMax,
          id:id
        })
        .then((acc) => {
          console.log(acc.data);
          getData();
          getDatas()

          toast.success("Package Updated Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 pl-5" style={{marginTop:50}}>
      <main >
        <svg
          style={{ cursor: "pointer" }}
          onClick={() => setPackageEdit(false)}
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

        <div>
          <h4 className="mb-3 mt-3">Update Package</h4>

          <p>
            <span style={{ color: "#E7D478", cursor: "pointer" }}>
              Dashboard
            </span>{" "}
            {" > "} <span style={{ color: "#E7D478" }}>Update Package</span>{" "}
          </p>
        </div>


        {
          datas ? 


          <div
          style={{
            borderColor: "#0CDCE5",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 40,
            marginTop: 40,
            borderRadius: 10,
          }}
        >
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Package Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Package Name"
                  onChange={(e) => {
                    setPackageName(e.target.value);
                  }}
                  defaultValue={packageName}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Package Period</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Package Period eg: 1,2,3"
                  onChange={(e) => {
                    setPackagePeriod(e.target.value);
                  }}
                  defaultValue={packagePeriod}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Package Reward</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Package Reward In %"
                  onChange={(e) => {
                    setPackageReward(e.target.value);
                  }}
                  defaultValue={packageReward.replace('%','')}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Package Minimum</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Package Minimum "
                  onChange={(e) => {
                    setPackageMin(e.target.value);
                  }}
                  defaultValue={packageMin}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Package Maximum</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Package Maximum"
                  onChange={(e) => {
                    setPackageMax(e.target.value);
                  }}
                  defaultValue={packageMax}
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button onClick={handleSubmit} className="btn btn-primary">
              Create Package
            </button>
          </div>
        </div>


          :


          <></>
        }

      
      </main>
    </div>
  );
};

export default EditPackages;
