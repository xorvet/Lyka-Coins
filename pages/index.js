import React from "react";

const index = () => {
  return (
    <div>
      <form
        name="aspnetForm"
        method="post"
        action="./Dashboard"
        id="aspnetForm"
      >
        <div>
          <input
            type="hidden"
            name="__VIEWSTATE"
            id="__VIEWSTATE"
            defaultValue="/wEPDwUKLTUwMjUyMTM1NQ9kFgJmD2QWAgIDD2QWBGYPFgIeA3NyYwUjL25vZGVfbW9kdWxlL2RlbW8vaW1nL3Blb3BsZS9hNS5qcGdkAgMPZBZGAgMPFgIeB1Zpc2libGVoZAIEDxYCHwFnZAIFDw8WAh4EVGV4dAUHICgwLjAwKWRkAgYPDxYCHwIFBDAuMDBkZAIHDw8WAh8CBQEwZGQCCA8PFgIfAgUCNDlkZAIJDw8WAh8CBQQwLjAwZGQCCg8PFgIfAgUEMC4wMGRkAgsPDxYCHwIFBDAuMDBkZAIMDw8WAh8CBQQwLjAwZGQCDQ8PFgIfAgUEMC4wMGRkAg4PDxYCHwIFBDAuMDBkZAIPDw8WAh8CBQQwLjAwZGQCEA8PFgIfAgUEMC4wMGRkAhEPDxYCHwIFBDAuMDBkZAISDw8WAh8CBQQwLjAwZGQCEw8PFgIfAgUEMC4wMGRkAhQPDxYCHwIFBDAuMDBkZAIVDw8WAh8CBQQwLjAwZGQCFg8PFgIfAgUEMC4wMGRkAhcPDxYCHwIFBDAuMDBkZAIYDw8WAh8CBQQwLjAwZGQCGQ9kFgJmDxYCHglpbm5lcmh0bWwFCElOQUNUSVZFZAIaDw8WBh8CBQJOTx4IQ3NzQ2xhc3MFC3RleHQtZGFuZ2VyHgRfIVNCAgJkZAIcDw8WAh8CZWRkAh0PDxYCHwJlZGQCHg8PFgIfAgUEMC4wMGRkAh8PDxYCHwIFBDAuMDBkZAIgDw8WAh8CBQEwZGQCIQ88KwARAwAPFgQeC18hRGF0YUJvdW5kZx4LXyFJdGVtQ291bnQCAWQBEBYAFgAWAAwUKwAAFgJmD2QWBmYPDxYCHgxUYWJsZVNlY3Rpb24LKilTeXN0ZW0uV2ViLlVJLldlYkNvbnRyb2xzLlRhYmxlUm93U2VjdGlvbgBkZAIBD2QWDmYPZBYCZg8VAQgyLDQwMC4wMGQCAQ9kFgJmDxUBBDAuMDBkAgIPZBYCZg8VAQQwLjAwZAIDD2QWAmYPFQEEMC4wMGQCBA9kFgJmDxUBBDAuMDBkAgUPZBYCZg8VAQgyLDQwMC4wMGQCBg9kFgJmDxUBBDAuMDBkAgIPDxYCHwFoZGQCIg8PFgIfAgUEMC4wMGRkAiMPDxYCHwIFCzI2LUF1Zy0yMDIyZGQCJA8PFgIfAmVkZAIlDw8WAh8CBRJMWUtBU09VVEggKDc2OTcxMSlkZAImDw8WAh8CBQUwLjAwJWRkGAEFImN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEkZ3ZCaW5hcnkPPCsADAEIAgFkqTgULm3H4NN/3eDRcVQwqgx1nEuoMovy9TxwhxjjTNA="
          />
        </div>
        <div>
          <input
            type="hidden"
            name="__VIEWSTATEGENERATOR"
            id="__VIEWSTATEGENERATOR"
            defaultValue="1559EFB7"
          />
        </div>
        <nav id="sidebar" className="sidebar" role="navigation">
          <div className="js-sidebar-content">
            <header className="logo d-none d-md-block">
              <a href="Default">
                <img src="https://lykacoin.io/images/logo.png" alt="Logo" />
              </a>
            </header>
            <div className="sidebar-status d-md-none d-flex align-items-center justify-content-around">
              <span>Prem Kumar</span>
              <span className="thumb-sm avatar float-right d-none">
                <img
                  src="https://lykacoin.net/node_module/demo/img/people/a5.jpg"
                  id="ctl00_imgDp"
                  className="rounded-circle"
                  alt="..."
                />
              </span>
            </div>
            <h5 className="sidebar-nav-title">User : 277015</h5>
            <ul className="sidebar-nav">
              <li className="active">
                <a href="Default">
                  <span className="icon">
                    <i className="fi flaticon-home" />
                  </span>
                  Dashboard
                </a>
              </li>
              <li>
                <a className="collapsed" href="#one" data-toggle="collapse">
                  <span className="icon">
                    <i className="fi flaticon-users" />
                  </span>
                  Team Details
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="one" className="collapse">
                  <li>
                    <a href="memberdirect">Direct Referrals</a>
                  </li>
                  <li>
                    <a href="memberdownline1">Team</a>
                  </li>
                  <li>
                    <a href="Genealogy">Genealogy/Tree</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#three" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-lightbulb" />
                  </span>
                  Topup
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="three" className="collapse">
                  <li id="ctl00_divTopup">
                    <a href="Recharge">Topup</a>
                  </li>
                  <li>
                    <a href="TopupHistory">Topup History</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#four" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-wallet" />
                  </span>
                  Income
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="four" className="collapse">
                  <li>
                    <a href="RoiIncome?booster=0">Lyka Staking Bonus (LSB)</a>
                  </li>
                  <li>
                    <a href="DirectIncome">Lyka Direct Bonus (LDB)</a>
                  </li>
                  <li>
                    <a href="RoiIncome?booster=1">Lyka Fast Bonus (LFB)</a>
                  </li>
                  <li>
                    <a href="binaryIncome">Lyka Matching Bonus (LMB)</a>
                  </li>
                  <li>
                    <a href="levelIncome">Lyka Renewal Reward (LRR)</a>
                  </li>
                  <li>
                    <a href="MemberReward">Lyka Pay Royalty (LPR)</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#nine" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-trash-alt" />
                  </span>
                  LMB Flushed/Carry
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="nine" className="collapse">
                  <li>
                    <a href="BusinessFlushed">LMB Flushed Out</a>
                  </li>
                  <li>
                    <a href="BusinessCarry">LMB Carry Forward</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#five" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-bank" />
                  </span>
                  Withdrawal
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="five" className="collapse">
                  <li>
                    <a href="AccountSummary">Withdrawal</a>
                  </li>
                  <li>
                    <a href="WithdrawlHistory">Withdrawal History</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#seven" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-user-alt" />
                  </span>
                  Profile
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="seven" className="collapse">
                  <li>
                    <a className="collapse-item" href="memberEdit">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a className="collapse-item" href="ChangePassword">
                      Change Password
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="collapsed" href="#eight" data-toggle="collapse">
                  <span className="icon">
                    <i className="la la-headphones-alt" />
                  </span>
                  Support
                  <i className="toggle fa fa-angle-down" />
                </a>
                <ul id="eight" className="collapse">
                  <li>
                    <a className="collapse-item" href="SupportRequest">
                      New Message
                    </a>
                  </li>
                  <li>
                    <a className="collapse-item" href="Inbox">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a className="collapse-item" href="OutBox">
                      Outbox
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="logout">
                  <span className="icon">
                    <i className="la la-sign-out-alt" />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
            {/* <h5 class="sidebar-nav-title">Template</h5> */}
            {/*<h5 class="sidebar-nav-title">Labels</h5>
      <ul class="sidebar-labels">
          <li><a href="#"><i class="fa fa-circle text-danger mr-xs"></i><span class="label-name">My Recent</span></a></li>
      </ul>*/}
          </div>
        </nav>
        <nav className="page-controls navbar navbar-dashboard">
          <div className="container-fluid">
            <div className="navbar-header mr-md-3">
              <ul className="nav navbar-nav" id="backBtn">
                <li className="nav-item">
                  {/* whether to automatically collapse sidebar on mouseleave. If activated acts more like usual admin templates */}
                  <a
                    className="d-none d-lg-block nav-link"
                    id="nav-state-toggle"
                    href="#"
                  >
                    <i
                      className="la la-bars"
                      data-step={1}
                      data-intro="You can adjust sidebar, or leave it closed 🙂"
                    />
                  </a>
                  <a
                    className="d-lg-none nav-link"
                    id="nav-collapse-toggle"
                    href="#"
                  >
                    <span className="square square-lg d-md-none">
                      <i className="la la-bars" />
                    </span>
                    <i className="la la-bars d-none d-md-block" />
                  </a>
                </li>
              </ul>
              {/* xs & sm screen logo */}
              <a className="navbar-brand d-md-none" href="Default">
                <img src="https://lykacoin.io/images/logo.png" alt="Logo" />
              </a>
            </div>
            {/* this part is hidden for xs screens */}
            <div className="navbar-header mobile-hidden float-right">
              <ul className="nav navbar-nav">
                <li className="dropdown nav-item mr-2">
                  <span className="thumb-sm avatar d-none">
                    <img className="rounded-circle" src alt="..." />
                  </span>
                  <span>Prem Kumar</span>
                </li>
                <li className="dropdown nav-item">
                  <a
                    href="#"
                    className="dropdown-toggle no-caret nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="la la-cog" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a className="dropdown-item" href="memberEdit">
                        <i className="glyphicon glyphicon-user" />
                        &nbsp; Profile
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="Recharge">
                        Deposit History
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="Accountsummary">
                        Withdrawal History
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="Logout">
                        <i className="la la-sign-out" />
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar">
          <div className="container-fluid p-0">
            <div className="grid">
              <ul>
                <li>
                  <a href="Default">
                    <i className="la la-home" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="memberEdit">
                    <i className="la la-user-alt" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="Recharge">
                    <i className="la la-lightbulb" />
                    Topup
                  </a>
                </li>
                <li>
                  <a href="AccountSummary">
                    <i className="la la-bank" />
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
                  <small className="d-block fs-larger text-danger">
                    Inactive
                  </small>
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
                                  <span id="lblDirectBusinessRight">
                                    4500 LYKA
                                  </span>
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
                            <span className="fw-semi-bold">Name : </span>Prem
                            Kumar
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
                            <span className="fw-semi-bold">
                              Registered On :{" "}
                            </span>
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
                            All Admin Push News Msg will be display here
                            dynamically
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
        {/* The Loader. Is shown when pjax happens */}
        <div className="loader-wrap hiding hide">
          <i className="fa fa-circle-o-notch fa-spin-fast" />
        </div>
      </form>
    </div>
  );
};

export default index;
