import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Login from "./Login";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
          <link href rel="stylesheet" />
        </div>
      </Head>

      {1 === 2 ? (
        <Login />
      ) : (
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
          <Component {...pageProps} />

          <div className="loader-wrap hiding hide">
            <i className="fa fa-circle-o-notch fa-spin-fast" />
          </div>
        </form>
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
    </>
  );
}

export default MyApp;
