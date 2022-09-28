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
import MainPage from "../Components/MainPage";
// import app from "../public/js/app"
// const MyApp = () =>

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [shoWindow, setshoWindow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setshoWindow(true);
  }, []);
  useEffect(() => {
    console.log("route changed");
  }, [router.asPath]);

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
          {
            <>
              {!window.localStorage.getItem("user") ? (
                <Login />
              ) : (
                <>
                <ToastContainer />
                          <Component {...pageProps} />
                </>
              )}
            </>
          }
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
