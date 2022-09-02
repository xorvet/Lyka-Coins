import React from 'react'

const HeaderRight = () => {
  return (
    <nav className="page-controls navbar navbar-dashboard">
    <div className="container-fluid">
      <div className="navbar-header mr-md-3">
        <ul className="nav navbar-nav" id="backBtn">
          <li className="nav-item">
          
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
      
        <a className="navbar-brand d-md-none" href="Default">
          <img src="https://lykacoin.io/images/logo.png" alt="Logo" />
        </a>
      </div>

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
  )
}

export default HeaderRight