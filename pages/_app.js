import React,{useEffect,useState} from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Login from "./Login";
import SideBar from "../Components/SideBar";
import HeaderRight from "../Components/HeaderRight";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// const MyApp = () =>


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [showWindow, setShowWindow] = useState(false);



  useEffect(() => {
    
    setShowWindow(true)




  }, []);




  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      router.reload();
    }
  };

  return (
    <div>
      {/* <Head>
        <div>
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
          <link href="css/application.css" rel="stylesheet" />
          <link href="css/mystyles.css" rel="stylesheet" />
          
        </div>
      </Head> */}
    
  

      {showWindow ? (
        <>
          {!window.localStorage.getItem("user") ? (
            <Login />
          ) : (
            <>
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
                    <Link href="/">
                      <a>
                        <img
                          src="https://lykacoin.io/images/logo.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
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
                      <a
                        className="collapsed"
                        href="#one"
                        data-toggle="collapse"
                      >
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
                      <a
                        className="collapsed"
                        href="#three"
                        data-toggle="collapse"
                      >
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
                      <a
                        className="collapsed"
                        href="#four"
                        data-toggle="collapse"
                      >
                        <span className="icon">
                          <i className="la la-wallet" />
                        </span>
                        Income
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="four" className="collapse">
                        <li>
                          <a href="RoiIncome?booster=0">
                            Lyka Staking Bonus (LSB)
                          </a>
                        </li>
                        <li>
                          <a href="DirectIncome">Lyka Direct Bonus (LDB)</a>
                        </li>
                        <li>
                          <a href="RoiIncome?booster=1">
                            Lyka Fast Bonus (LFB)
                          </a>
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
                      <a
                        className="collapsed"
                        href="#nine"
                        data-toggle="collapse"
                      >
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
                      <a
                        className="collapsed"
                        href="#five"
                        data-toggle="collapse"
                      >
                        <span className="icon">
                          <i className="la la-bank" />
                        </span>
                        Withdrawal
                        <i className="toggle fa fa-angle-down" />
                      </a>
                      <ul id="five" className="collapse">
                        <li>
                        <Link href="/Withdrawal/Withdrawal">
                          <a >Withdrawal</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/Withdrawal/WithdrawalHistory">
                          <a >Withdrawal History</a>
                        </Link>

                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="collapsed"
                        href="#seven"
                        data-toggle="collapse"
                      >
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
                      <a
                        className="collapsed"
                        href="#ueyui"
                        data-toggle="collapse"
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
                      <ul id="ueyui" className="collapse">
                        <li>
                          <Link href="/Packages">
                            <a className="collapse-item">All Packages</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className="collapsed"
                        href="#eight"
                        data-toggle="collapse"
                      >
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
                      <a onClick={handleLogout}>
                        <span className="icon">
                          <i className="la la-sign-out-alt" />
                        </span>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <HeaderRight />
              <SideBar />
              <ToastContainer />
              <Component {...pageProps} />

              <div className="loader-wrap hiding hide">
                <i className="fa fa-circle-o-notch fa-spin-fast" />
              </div>
            </>
          )}
        </>
      ) : (
        <div></div>
      )}
     


      <Script src="js/jquery.min.js" />

      <Script src="js/popper.js" />
      <Script src="js/bootstrap.js" />
      <Script src="js/util.js" />
      <Script src="js/jquery.slimscroll.js" />
      <Script src="js/widgster.js" />
      <Script
        src="js/pace.js"
        data-pace-options='{ "target": ".page-controls", "ghostTime": 1000 }'
      />
      <Script src="js/hammer.js" />
      <Script src="js/jquery.hammer.js" />

      <Script src="js/settings.js" />
      <Script src="js/app.js" />

      <Script src="js/jquery.flot.animator.min.js" />
      <Script src="js/jquery.flot.js" />
      <Script src="./node_module/js/jquery.flot.orderBars.js" />
      <Script src="js/jquery.flot.selection.js" />
      <Script src="js/jquery.flot.time.js" />
      <Script src="js/jquery.flot.pie.js" />
      <Script src="js/jquery.flot.stack.js" />
      <Script src="js/jquery.flot.crosshair.js" />
      <Script src="js/jquery.flot.symbol.js" />
      <Script src="js/jquery.flot.dashes.js" />
      <Script src="js/jquery.sparkline.js" />
      <Script src="js/bootstrap_calendar.min.js" />
      <Script src="js/bootstrap-select.min.js" />
      <Script src="js/bignumber.js" />

      <Script src="js/index.js" />
      <Script src="js/cute-alert.js" />

      <Script src="js/jquery.countdown.min.js" />
      <Script src="js/moment.min.js" />
      <Script src="js/moment-timezone.min.js" />
      <Script src="js/moment-timezone-with-data.min.js" />
      <Script src="js/mine.js" />
    </div>
  );
}

export default MyApp;





// import React from 'react'

// const MyApp = () => {
//   return (
//     <div>_app</div>
//   )
// }

// export default MyApp