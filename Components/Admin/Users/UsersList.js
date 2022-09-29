import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUsers from "./EditUser";

const UsersList = ({ setUsers }) => {
  const [datas, setDatas] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("/api/Admin/UserData")
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

  const handleEdit = (id) => {
    setId(id);
    setOpenEdit(true);
  };

  const handleDelete = (id) => {
    // axios
    //   .delete("/api/User/UserData", {
    //     id,
    //   })
    axios
      .delete("/api/Admin/UserData", {
        headers: {},
        data: {
          id,
        },
      })
      .then((acc) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnblock = (id) => {
    try {
      axios
        .post("/api/BlockUnblock/Unblock", {
          id: id,
        })
        .then((acc) => {
          console.log(acc.data);
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const Block = (id) => {
    try {
      axios
        .post("/api/BlockUnblock/Block", {
          id: id,
        })
        .then((acc) => {
          console.log(acc.data);
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openEdit && (
        <EditUsers getDatas={getData} setOpenEdit={setOpenEdit} id={id} />
      )}
      {!openEdit && (
        <div className="p-3 pl-5" style={{ marginTop: 10 }}>
          <main>
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => setUsers(false)}
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

            <h4 className="mb-3 mt-3">User's</h4>

            <p>
              <span style={{ color: "#E7D478", cursor: "pointer" }}>
                Dashboard
              </span>{" "}
              {" > "} <span style={{ color: "#E7D478" }}>User's</span>{" "}
            </p>

            <div className="table-responsive  mt-5">
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
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Status</th>
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
                          <td>{hit.Name}</td>
                          <td>{hit.Email}</td>
                          <td>{hit.Mobile_Number}</td>
                          <td>{hit.Status}</td>
                          {hit.Status == "blocked" ? (
                            <td className="text-center">
                              <button
                                onClick={() => handleUnblock(hit._id)}
                                className="btn btn-success"
                              >
                                Unblock
                              </button>
                            </td>
                          ) : (
                            <td className="text-center">
                              <button
                                onClick={() => Block(hit._id)}
                                className="btn btn-danger"
                              >
                                Block
                              </button>
                            </td>
                          )}
                          <td className="text-center">
                            <svg
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDelete(hit._id)}
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

export default UsersList;
