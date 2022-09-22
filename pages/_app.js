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
              <div>
                <div
                  style={{ backgroundColor: "#2E2E42" }}
                  className="container-fluid fixed-top  py-3"
                >
                  <div className="row">
                    <div className="col-xl-2 col-sm-3 col-0 collaps sho sideba">
                      {/* spacer */}
                    </div>
                    <div className="col px-3 ">
                      <div>
                        {/* toggler */}
                        <a
                          data-toggle="collaps"
                          href="#"
                          data-target=".collaps"
                          role="button"
                        >
                         
                          <i
                            style={{
                              position: "absolute",
                              marginTop: 10,
                              fontSize: 20,
                            }}
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="fa fa-bars d-xl-none d-xxl-block"
                          />

                          <img
                            className="d-xl-none d-xxl-block"
                            style={{
                              width: 120,
                              marginLeft: 30,
                              position: "absolute",
                            }}
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
                                <li >
                                  <Link href="/Profile">
                                    <a className="dropdown-item ">
                                      <i className="glyphicon glyphicon-user" />
                                      &nbsp; Profile
                                    </a>
                                  </Link>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <Link href="/DipositHistory">
                                    <a className="dropdown-item">
                                      Deposit History
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/Withdrawal/WithdrawalHistory">
                                    <a className="dropdown-item">
                                      Withdrawal History
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/Reward/RewardHistory">
                                    <a className="dropdown-item">
                                      Reward History
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link href="/TransactionHistory">
                                    <a className="dropdown-item">
                                      Transaction History
                                    </a>
                                  </Link>
                                </li>

                                {typeof window !== "undefined" ? (
                                  window.localStorage.userType ==
                                  "AdminUser" ? (
                                    <li>
                                      <Link href="/AdminUser">
                                        <a className="dropdown-item">Admin</a>
                                      </Link>
                                    </li>
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <></>
                                )}
                                {typeof window !== "undefined" ? (
                                  window.localStorage.userType ==
                                  "AdminUser" ? (
                                    <li>
                                      <Link href="/Settings">
                                        <a className="dropdown-item">
                                          Settings
                                        </a>
                                      </Link>
                                    </li>
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <></>
                                )}

                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    onClick={handleLogout}
                                    className="dropdown-item"
                                  >
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
                      className="col-xl-1 col-sm-3 col-auto collaps sho sideba  text-white px-0"
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
                        <li className="nav-item d-none d-sm-block" style={{color:"white"}}>
                          <Link href="/">
                            <a className="nav-link ">
                              <i  className="fa fa-home text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                              <span  className="ml-1 d-none d-sm-inline   ml-3 text-white">
                                Dashboard
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <Link href="/Withdrawal/Withdrawal">
                            <a className="nav-link">
                              <i className="fa fa-university  text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                              <span className="ml-1 d-none d-sm-inline  ml-3  text-white">
                                Withdrawal
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <Link href="/Profile">
                            <a className="nav-link">
                              <i className="fa fa-user  text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                              <span className="ml-1 d-none d-sm-inline  ml-3  text-white">
                                Profile
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <Link href="/Packages">
                            <a className="nav-link">
                              <i className="fa fa-archive  text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                              <span className="ml-1 d-none d-sm-inline  ml-3  text-white">
                                Packages
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <Link href="/ReferalSystem">
                            <a className="nav-link">
                              <i className="fa fa-link  text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                              <span className="ml-1 d-none d-sm-inline  ml-3  text-white">
                                Referal
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <a className="nav-link">
                            <i className="fa fa-question-circle  text-dark p-3" style={{borderRadius:50,backgroundColor:"#0CDCE5"}}/>
                            <span className="ml-1 d-none d-sm-inline  ml-3  text-white">
                              Support
                            </span>
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                          <a className="nav-link" href="#">
                            <i className="fa fa-sign-out  text-dark  p-3 " style={{borderRadius:50,backgroundColor:"#0CDCE5"}} />
                            <span className="ml-1 d-none d-sm-inline ml-3  text-white">
                              Logout
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col py-3 ">
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog  modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-body ">
                              <ul className="list-group mt-3 mb-3">
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-house-fill "
                                    />
                                    Dashboard
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-file-person "
                                    />
                                    Withdrwawal
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-gear-fill "
                                    />
                                    Profile
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-filter-square-fill "
                                    />
                                    Packages
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-person-lines-fill"
                                    />
                                    Referal
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-cart-plus-fill "
                                    />{" "}
                                    {/* */}Support
                                  </button>
                                </li>
                                <li className="p-1">
                                  {" "}
                                  <button
                                    type="button"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "#3073AE",
                                    }}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    <i
                                      style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      className="shopicon bi bi-calendar2-week-fill "
                                    />
                                    Logout
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ToastContainer />
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
