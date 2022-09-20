import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const HeaderRight = () => {
  const router = useRouter();

  useEffect(() => {
   

    
  }, []);






  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      router.reload();
    }
  };

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
    </nav>
  );
};

export default HeaderRight;
