import React from "react";

const index = () => {
  return (
    <div className="content-wrap">
      <main id="content" className="content" role="main">
        <div className="analytics">
          <div className="analytics-side">
            <div
              id="ctl00_divMsgMaster"
              className="text-center text-danger mb-2"
            />
            <h3 className="page-title">
              Hello <small>Prem Kumar (277015)</small>
              <small className="d-block fs-larger text-danger">Inactive</small>
            </h3>
            <h5
              style={{
                fontWeight: 800,
                color: "#fe0000",
                fontSize: 28,
                margin: 0,
                display: "none",
              }}
            >
              <img
                src="https://lykacoin.io/images/Live.gif"
                alt="Live"
                style={{ maxWidth: 80, margin: "-20px -15px -15px" }}
              />
              RATE <span className="text-success">$1.00</span>
            </h5>
            <p className="mb-0 fs-mini">
              <span className="circle bg-success" style={{ fontSize: 6 }} />
              Contract :
              <a
                href="https://bscscan.com/address/0x26844Ffd91648e8274598e6e18921a3E5Dc14ADe"
                target="_blank"
              >
                0x26844Ffd91648e8274598e6e18921a3E5Dc14ADe
              </a>
              <br />
            </p>
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
                            <span className="text-success"> 7800$ </span>
                          </h4>
                          <p style={{ textAlign: "center" }}>
                            450 LYKA at present Value
                          </p>
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
                              <span
                                id="lblBinaryQualified"
                                className="text-success"
                              >
                                580$
                              </span>
                            </span>
                          </h4>
                          <p style={{ textAlign: "center" }}>
                            450 LYKA at present Value
                          </p>
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
                                1 USDT = 200LYKA
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
                              <span id="lblDirectBusinessRight">4500 LYKA</span>
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="col-sm-12 mb-lg order-0 order-md-2">
                <h5>My Active Staked Plans</h5>
                <div className="table-responsive">
                  <div>
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
                          <th scope="col">Staking Amount (USD)</th>
                          <th scope="col">Lyka Price</th>
                          <th scope="col">Invested Date</th>
                          <th scope="col">Percentage</th>
                          <th scope="col">Valid upto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>100</td>
                          <td>200</td>
                          <td>21-09-2022</td>
                          <td>48% APY</td>
                          <td>21-09-2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                  .timer {\n                    position: absolute;\n                    bottom: 6px;\n                    right: 10px;\n                    font-weight: 500;\n                    color: #ffc107;\n                  }\n                ",
                }}
              />
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 last-side-element mb-xlg">
                <section className="widget h-100 mb-0">
                  <header>
                    <h4>Profile</h4>
                  </header>
                  <div className="widget-body w-100 notifications">
                    <div className="d-flex align-items-start">
                      <i className="la la-user-alt mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Name : </span>Prem Kumar
                      </p>
                    </div>
                    <div className="d-flex w-100">
                      <i className="la la-envelope mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Email : </span>
                        jesusprem98@gmail.com
                      </p>
                    </div>
                    <div className="d-flex w-100">
                      <i className="la la-calendar-plus mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Registered On : </span>
                        <span id="lblMemReg">26-Aug-2022</span>
                      </p>
                    </div>
                    <div className="d-flex align-items-start">
                      <i className="la la-user-check mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Wallet Address</span>
                        <span id="lblSponsor">664646546546546465</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                  .newsItem {\n                    background: #171622;\n                    padding: 15px;\n                    border-radius: 2px;\n                    border: 1px solid #00dce6;\n                    margin-bottom: 10px;\n                    width: calc(100% - 1px);\n                  }\n\n                  .newsItem p {\n                    color: #ffffff;\n                    font-weight: 600;\n                    margin-bottom: 5px;\n                    font-size: 12px;\n                  }\n\n                  .newsItem h5 {\n                    margin: 0;\n                    font-weight: 400;\n                    font-size: 14px;\n                    line-height: 1.5;\n                  }\n                ",
                }}
              />
              <div className="col-sm-12 col-md-6 last-side-element mb-xlg">
                <section className="widget h-100 mb-0">
                  <header>
                    <h4>Important Notice</h4>
                    <p className="text-primary mb-0">
                      <small className="tasks-stat" />
                    </p>
                  </header>
                  <div className="widget-body task-container">
                    <div className="latestNews">
                      <marquee
                        id="marquee"
                        behavior="scroll"
                        direction="up"
                        height="161px"
                        width="100%"
                        scrollamount={3}
                        onmouseover="this.stop()"
                        onmouseout="this.start()"
                      >
                        All Admin Push News Msg will be display here dynamically
                      </marquee>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer text-center d-none">
          2022 © All rights reserved. <a href="/Member">Lyka Coin</a>
        </footer>
      </main>
    </div>
  );
};

export default index;
