import React, { useState } from "react";
import UsersList from "../Components/Admin/Users/UsersList";
import PackageList from "../Components/Admin/Packages/PackageList";
import AllFundAccounts from "../Components/Admin/FundManager/AllFundAccounts";
const AdminUser = () => {
  const [Users, setUsers] = useState(false);
  const [Packages, setPackages] = useState(false);
  const [fundManager, setFundManager] = useState(false);

  return (
    <>
      {Users && <UsersList setUsers={setUsers} />}
      {Packages && <PackageList setPackages={setPackages} />}
      {fundManager && <AllFundAccounts  setFundManager={setFundManager}  />}
      {!Users && !Packages  && !fundManager && (
        <div className="content-wrap">
          <main id="content" className="content" role="main">
            <div className="analytics">
              <div className="analytics-side">
                <div
                  id="ctl00_divMsgMaster"
                  className="text-center text-danger mb-2"
                />
                <h3 className="page-title">
                  Hey, <small>Admin</small>
                </h3>
                <small>Todays Analylics</small>
                <div className="row" style={{ marginTop: 20 }}>
                  <div
                    onClick={() => setUsers(true)}
                    style={{ cursor: "pointer" }}
                    className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2"
                  >
                    <div className="pb-xlg h-80">
                      <section className="widget mb-0 h-80">
                        <header className="d-flex justify-content-between flex-wrap pb-2">
                          <h4
                            className="d-flex align-items-center pb-1"
                            style={{ fontSize: 16 }}
                          >
                           Users
                          </h4>
                        </header>
                        <div className="widget-body p-0">
                          <div className="d-flex">
                            <div className="w-100">
                              <h4 className="fw-semi-bold ml-lg mb-lg">
                                <span className="text-success"> 0 </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div
                    onClick={() => setPackages(true)}
                    style={{ cursor: "pointer" }}
                    className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2"
                  >
                    <div className="pb-xlg h-80">
                      <section className="widget mb-0 h-80">
                        <header className="d-flex justify-content-between flex-wrap pb-2">
                          <h4
                            className="d-flex align-items-center pb-1"
                            style={{ fontSize: 16 }}
                          >
                            Packages
                          </h4>
                        </header>
                        <div className="widget-body p-0">
                          <div className="d-flex">
                            <div className="w-100">
                              <h4 className="fw-semi-bold ml-lg mb-lg">
                                <span>
                                  <span
                                    id="lblBinaryQualified"
                                    className="text-success"
                                  >
                                    0
                                  </span>
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div
                  onClick={()=>setFundManager(true)}
                    style={{ cursor: "pointer" }}
                    className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2"
                  >
                    <div className="pb-xlg h-80">
                      <section className="widget mb-0 h-80">
                        <header className="d-flex justify-content-between flex-wrap pb-2">
                          <h4
                            className="d-flex align-items-center pb-1"
                            style={{ fontSize: 16 }}
                          >
                            Fund Manager
                          </h4>
                        </header>
                        <div className="widget-body p-0">
                          <div className="d-flex">
                            <div className="w-100">
                              <h4 className="fw-semi-bold ml-lg mb-lg">
                                <span>
                                  <span id="lblDirectBusinessLeft">0</span>
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div
                    style={{ cursor: "pointer" }}
                    className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2"
                  >
                    <div className="pb-xlg h-80">
                      <section className="widget mb-0 h-80">
                        <header className="d-flex justify-content-between flex-wrap pb-2">
                          <h4
                            className="d-flex align-items-center pb-1"
                            style={{ fontSize: 16 }}
                          >
                            Something
                          </h4>
                        </header>
                        <div className="widget-body p-0">
                          <div className="d-flex">
                            <div className="w-100">
                              <h4 className="fw-semi-bold ml-lg mb-lg">
                                <span>
                                  <span id="lblDirectBusinessLeft">0</span>
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default AdminUser;
