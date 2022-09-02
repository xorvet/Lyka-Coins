import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

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
      <Component {...pageProps} />

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
