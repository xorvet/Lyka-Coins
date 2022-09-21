import $ from "jquery";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Login from "./Login";
// import sidebar from "../Components/sidebar";
// import HeaderRight from "../Components/HeaderRight";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import app from "../public/js/app"
// const MyApp = () =>

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [shoWindow, setshoWindow] = useState(false);

  useEffect(() => {
    setshoWindow(true);
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      router.reload();
    }
  };

  return (
    <div>
      <Head>
        <title>Lyka Coin</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" />
        <meta name="keywords" />
        <meta name="author" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link
          rel="shortcut icon"
          href="https://lykacoin.io/images/favicon.png"
        />
        <link href="/css/application.css" rel="stylesheet" />
        <link href="/css/mystyles.css" rel="stylesheet" />
      </Head>

      {shoWindow ? (
        <>
          {!window.localStorage.getItem("user") ? (
            <Login />
          ) : (
            <>
              {/* <div>
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
              <nav id="sideba" className="sideba" role="navigation">
                <div className="js-sideba-content">
                  <header className="logo d-none d-md-block">
                    <Link href="/">
                      <a>
                        <img
                          src="https://lykacoin.io/images/logo.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </header>
                  <div className="sideba-status d-md-none d-flex align-items-center justify-content-around">
                    <span>Hey User</span>
                    <span className="thumb-sm avatar float-right d-none">
                      <img
                        src="https://lykacoin.net/node_module/demo/img/people/a5.jpg"
                        id="ctl00_imgDp"
                        className="rounded-circle"
                        alt="..."
                      />
                    </span>
                  </div>
                 
                  <ul className="sideba-nav">
                    <li className="active">
                    <Link href="/">
                      <a >
                        <span className="icon">
                          <i className="fi flaticon-home" />
                        </span>
                        Dashboard
                      </a>
                      </Link>
                    </li>
                   
                    <li>
                      <a
                        className="collapsd"
                        href="#five"
                        data-toggle="collaps"
                      >
                        <span className="icon">
                          <i className="la la-bank" />
                        </span>
                        Withdrawal
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="five" className="collaps">
                        <li>
                          <Link href="/Withdrawal/Withdrawal">
                            <a>Withdrawal</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Withdrawal/WithdrawalHistory">
                            <a>Withdrawal History</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className="collapsd"
                        href="#seven"
                        data-toggle="collaps"
                      >
                        <span className="icon">
                          <i className="la la-user-alt" />
                        </span>
                        Profile
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="seven" className="collaps">
                        <li>
                          <a className="collaps-item" href="memberEdit">
                            User Profile
                          </a>
                        </li>
                        <li>
                          <a className="collaps-item" href="ChangePassword">
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className="collapsd"
                        href="#ueyui"
                        data-toggle="collaps"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-box-seam"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                          </svg>
                        </span>
                        Packages
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="ueyui" className="collaps">
                        <li>
                          <Link href="/Packages">
                            <a className="collaps-item">All Packages</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className="collapsd"
                        href="#rgergr"
                        data-toggle="collaps"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-link-45deg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                          </svg>
                        </span>
                        Referal
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="rgergr" className="collaps">
                        <li>
                          <Link href="/Reward/RewardHistory">
                            <a>Referal System</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className="collapsd"
                        href="#eight"
                        data-toggle="collaps"
                      >
                        <span className="icon">
                          <i className="la la-headphones-alt" />
                        </span>
                        Support
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="eight" className="collaps">
                        <li>
                          <a className="collaps-item" href="SupportRequest">
                            New Message
                          </a>
                        </li>
                        <li>
                          <a className="collaps-item" href="Inbox">
                            Inbox
                          </a>
                        </li>
                        <li>
                          <a className="collaps-item" href="OutBox">
                            Outbox
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a onClick={handleLogout}>
                        <span className="icon">
                          <i className="la la-sign-out-alt" />
                        </span>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav> */}
              {/* <HeaderRight /> */}
              {/* <sideba />
              <ToastContainer />
              <Component {...pageProps} /> */}

              {/* <div className="loader-wrap hiding hide">
                <i className="fa fa-circle-o-notch fa-spin-fast" />
              </div> */}

              <div>
                <div
                  style={{ backgroundColor: "#2E2E42" }}
                  className="container-fluid fixed-top  py-3"
                >
                  <div className="row">
                    <div className="col-xl-2 col-sm-3 col-0 collaps sho sideba">
                      {/* spacer */}
                    </div>
                    <div className="col px-3 pb-5">
                    <div>

                      {/* toggler */}
                      <a
                        data-toggle="collaps"
                        href="#"
                        data-target=".collaps"
                        role="button"
                      >
                        {/* <i className="fa fa-bars fa-lg" /> */}
                        <img
                          className="img-fluid d-xl-none d-xxl-block"
                          style={{ width: 150, marginLeft: 60 }}
                          src="https://lykacoin.net/images/logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>










                    <div className="navbar-header mobile-hidden float-right">
          <ul className="nav navbar-nav">
            <li className="dropdown nav-item mr-2">
              <span className="thumb-sm avatar d-none">
                <img className="rounded-circle" src alt="..." />
              </span>
              <span>
                {typeof window !== "undefined"
                  ? window.localStorage.getItem("username")
                  : ""}
              </span>
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
                  <Link href="/Profile">
                    <a className="dropdown-item">
                      <i className="glyphicon glyphicon-user" />
                      &nbsp; Profile
                    </a>
                  </Link>
                </li>
                <li className="dropdown-divider" />
                <li>
                  <Link href="/DipositHistory">
                    <a className="dropdown-item">Deposit History</a>
                  </Link>
                </li>
                <li>
                  <Link href="/Withdrawal/WithdrawalHistory">
                    <a className="dropdown-item">Withdrawal History</a>
                  </Link>
                </li>
                <li>
                  <Link href="/Reward/RewardHistory">
                    <a className="dropdown-item">Reward History</a>
                  </Link>
                </li>

                <li>
                  <Link href="/TransactionHistory">
                    <a className="dropdown-item">Transaction History</a>
                  </Link>
                </li>

                {
                  typeof window !== "undefined" ? 
                  window.localStorage.userType == "AdminUser" ? 

                <li>
                  <Link href="/AdminUser">
                    <a className="dropdown-item">Admin</a>
                  </Link>
                </li>

                  :


                  <></>


                  :


                  <></>
                }
                {
                  typeof window !== "undefined" ? 
                  window.localStorage.userType == "AdminUser" ? 

                  <li>
                  <Link href="/Settings">
                    <a className="dropdown-item">Settings</a>
                  </Link>
                </li>

                  :


                  <></>


                  :


                  <></>
                }




               
                
                <li className="dropdown-divider" />
                <li>
                  <a onClick={handleLogout} className="dropdown-item">
                    <i className="la la-sign-out" />
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>













                      






                    </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row  flex-nowrap" style={{ marginTop: 10 }}>
                    <div
                      style={{
                        
                        borderRightColor: "white",
                        borderRightWidth: 2,
                      }}
                      className="col-xl-2 col-sm-3 col-auto collaps sho sideba  text-white px-0"
                    >
                      <ul
                        style={{ backgroundColor: "#2E2E42" }}
                        className="nav flex-column flex-nowrap  navbar-primary   position-fixed pt-2 vh-100"
                        id="sideba"
                      >
                        <img
                          className="img-fluid d-none d-sm-block"
                          style={{
                            width: 150,
                            marginLeft: 30,
                            marginBottom: 30,
                          }}
                          src="https://lykacoin.net/images/logo.png"
                          alt=""
                        />
                        <li
                          className="nav-item "
                          style={{  }}
                        >
                        <Link href="/">

                          <a className="nav-link ">
                            <i className="fa fa-home" />
                            <span className="ml-1 d-none d-sm-inline   ml-3">
                              Dashboard
                            </span>
                          </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/Withdrawal/Withdrawal">

                          <a className="nav-link">
                            <i className="fa fa-university" />
                            <span className="ml-1 d-none d-sm-inline  ml-3">
                              Withdrawal
                            </span>
                          </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/Profile">
                        
                          <a className="nav-link" >
                            <i className="fa fa-user" />
                            <span className="ml-1 d-none d-sm-inline  ml-3">
                              Profile
                            </span>
                          </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/Packages">

                          <a className="nav-link" >
                            <i className="fa fa-archive" />
                            <span className="ml-1 d-none d-sm-inline  ml-3">
                              Packages
                            </span>
                          </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/Reward/RewardHistory">

                          <a className="nav-link" >
                            <i className="fa fa-link" />
                            <span className="ml-1 d-none d-sm-inline  ml-3">
                              Referal
                            </span>
                          </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" >
                            <i className="fa fa-question-circle" />
                            <span className="ml-1 d-none d-sm-inline  ml-3">
                              Support
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <i className="fa fa-sign-out" />
                            <span className="ml-1 d-none d-sm-inline ml-3">
                              Logout
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col py-3 ">
                      <Component {...pageProps} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div></div>
      )}

      <Script strategy="beforeInteractive" src="js/jquery.min.js" />
      <Script strategy="beforeInteractive" src="js/jquery.slimscroll.js" />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.js"
        integrity="sha512-37SbZHAnGzLuZV850k61DfQdZ5cnahfloYHizjpEwDgZGw49+D6oswdI8EX3ogzKelDLjckhvlK0QZsY/7oxYg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js"
      />
      <Script
        strategy="beforeInteractive"
        src="js/jquery.flot.animator.min.js"
      />
      <Script strategy="beforeInteractive" src="js/jquery.flot.selection.js" />
      <Script strategy="beforeInteractive" src="js/jquery.countdown.min.js" />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/flot/4.2.3/jquery.flot.js"
      />
      <Script
        strategy="beforeInteractive"
        src="./node_module/js/jquery.flot.orderBars.js"
      />
      <Script strategy="beforeInteractive" src="js/jquery.flot.time.js" />
      <Script strategy="beforeInteractive" src="js/app.js" />

      <Script strategy="beforeInteractive" src="js/popper.js" />
      <Script strategy="beforeInteractive" src="js/util.js" />
      <Script strategy="beforeInteractive" src="js/widgster.js" />
      <Script
        strategy="beforeInteractive"
        src="js/pace.js"
        data-pace-options='{ "target": ".page-controls", "ghostTime": 1000 }'
      />
      <Script strategy="beforeInteractive" src="js/hammer.js" />

      <Script strategy="beforeInteractive" src="js/settings.js" />

      <Script strategy="beforeInteractive" src="js/jquery.flot.pie.js" />
      <Script strategy="beforeInteractive" src="js/jquery.flot.stack.js" />
      <Script strategy="beforeInteractive" src="js/jquery.flot.crosshair.js" />
      <Script strategy="beforeInteractive" src="js/jquery.flot.symbol.js" />
      <Script strategy="beforeInteractive" src="js/jquery.flot.dashes.js" />
      <Script strategy="beforeInteractive" src="js/jquery.sparkline.js" />
      <Script strategy="beforeInteractive" src="js/bignumber.js" />

      {/* <Script strategy="beforeInteractive"  src="js/index.js" /> */}
      <Script strategy="beforeInteractive" src="js/cute-alert.js" />

      <Script strategy="beforeInteractive" src="js/moment.min.js" />
      <Script strategy="beforeInteractive" src="js/moment-timezone.min.js" />
      <Script
        strategy="beforeInteractive"
        src="js/moment-timezone-with-data.min.js"
      />
      <Script strategy="beforeInteractive" src="js/mine.js" />
      <Script strategy="beforeInteractive" src="js/bootstrap_calendar.min.js" />
      <Script strategy="beforeInteractive" src="js/bootstrap-select.min.js" />
      <Script strategy="beforeInteractive" src="js/bootstrap.js" />
    </div>
  );
};

export default MyApp;
