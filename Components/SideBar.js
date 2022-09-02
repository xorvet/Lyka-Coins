import React from 'react'

const SideBar = () => {
  return (
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
  )
}

export default SideBar