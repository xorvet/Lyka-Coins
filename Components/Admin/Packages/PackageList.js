import React, { useState, useEffect } from "react";
import CreatePackages from "./CreatePackages";
import EditPackages from "./EditPackages";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PackageList = ({ setPackages }) => {
  const [createPackage, setCreatePackage] = useState(false);
  const [packageEdit, setPackageEdit] = useState(false);
  const [datas, setDatas] = useState("");
  const [id, setId] = useState("");

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

  const handleDelete = (id) => {
    try {
      axios
        .delete("/api/Package/Packages", {
          headers: {},
          data: {
            id,
          },
        })
        .then((acc) => {
          getData();
        })
        .catch((err) => {
          toast.error("Something Went Wrong", {
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




  const handleEdit = (id) =>{

    setPackageEdit(true)
    setId(id)
  }

  return (
    <>
      {createPackage && (
        <CreatePackages getData={getData} setCreatePackage={setCreatePackage} />
      )}
      {packageEdit && <EditPackages id={id} getDatas={getData} setPackageEdit={setPackageEdit} />}

      {!createPackage && !packageEdit && (
        <div className="p-3 pl-5" style={{marginTop:10}}>
          <main >
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => setPackages(false)}
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

            <div className="row">
              <div className="col">
                <div>
                  <h4 className="mb-3 mt-3">Packages</h4>

                  <p>
                    <span style={{ color: "#E7D478", cursor: "pointer" }}>
                      Dashboard
                    </span>{" "}
                    {" > "} <span style={{ color: "#E7D478" }}>Packages</span>{" "}
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-right">
                  <button
                    onClick={() => setCreatePackage(true)}
                    className="btn btn-primary"
                  >
                    Create Packages
                  </button>
                </div>
              </div>
            </div>

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
                    <th scope="col">Package Name</th>
                    <th scope="col">Package Period</th>
                    <th scope="col">Package Reward</th>
                    <th scope="col">Package Min.</th>
                    <th scope="col">Package Max.</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {datas ? (
                    datas.map((hit, index) => {
                      return (
                        <tr key={hit._id}>
                          <td>{index + 1}</td>
                          <td>{hit.PackageName}</td>
                          <td>{hit.PackagePeriod} Year</td>
                          <td>{hit.PackageReward}</td>
                          <td>{hit.PackageMin}$</td>
                          <td>{hit.PackageMax}$</td>
                          <td className="text-center">
                            <button onClick={()=>handleEdit(hit._id)} className="btn btn-primary">EDIT</button>
                          </td>
                          <td className="text-center">
                            <svg
                              onClick={() => handleDelete(hit._id)}
                              style={{ cursor: "pointer" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
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
      )}
    </>
  );
};

export default PackageList;
