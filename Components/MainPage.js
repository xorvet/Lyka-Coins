import React from "react";
import Head from "next/head";
import Script from "next/script";

const MainPage = ({setShowLogin}) => {




  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/css2/bootstrap.min.css" />
        <link rel="stylesheet" href="/css2/aos.css" />
        <link rel="stylesheet" href="/css2/all.min.css" />
        <link rel="stylesheet" href="/css2/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css2/style.css" />
      </Head>

      <div>
        <div>
          {/* ==========Header Section Starts Here========== */}
          <header className="header-section">
            <div className="container">
              <div className="header-holder">
                <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                  <div className="brand-logo d-none d-lg-inline-block">
                    <div className="logo">
                      <a href="index-2.html">
                        <img src="/images2/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="header-wrapper justify-content-lg-end">
                    <div className="mobile-logo d-lg-none">
                      <a href="index-2.html">
                        <img src="/images2/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                    <div className="menu-area">
                      <ul className="menu">
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Yield Plans</a>
                          <ul className="submenu">
                            <li>
                              <a onClick={()=>setShowLogin(true)}>Yield Pro</a>
                            </li>
                            <li>
                              <a onClick={()=>setShowLogin(true)}>Yield Pro Max</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://bscscan.com/address/0x26844Ffd91648e8274598e6e18921a3E5Dc14ADe">
                            Contract
                          </a>
                        </li>
                      </ul>
                      <a href="https://wallpaperaccess.com/full/2588754.jpg" className="wallet-btn" >
                        <span>Login / Register</span>{" "}
                        <i className="fa-solid fa-wallet" />
                      </a>
                      {/* toggle icons */}
                      <div className="header-bar d-lg-none">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* ==========Header Section Ends Here========== */}
          {/* ==========>> Banner Section start Here <<========== */}
          <section
            className="banner"
            id="home"
            style={{ backgroundImage: "url(/images2/banner/bg.png)" }}
          >
            <div className="container">
              <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="banner__content"
                      data-aos="fade-right"
                      data-aos-duration={1000}
                    >
                      <h1 className="text-uppercase">
                        Lyka Yield <br />{" "}
                      </h1>
                      <p>
                        Yield farming involves lending or staking cryptocurrency
                        in exchange for interest and other rewards. Yield
                        farmers measure their returns in terms of annual
                        percentage yields (APY). While potentially profitable,
                        yield farming is also incredibly risky. On 1 year you
                        get 48% APY and on 2 Years you get 60% APY
                      </p>
                      <a href="/register" className="default-btn">
                        <span>Register Now</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="banner__thumb"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <img
                        src="/images2/banner/banner-thumb/01.png"
                        alt="banner Image"
                      />
                      <div className="shape-2">
                        <img
                          src="/images2/banner/banner-thumb/shape3.png"
                          alt="Banner Shape"
                        />
                      </div>
                      <div className="shape-3">
                        <img
                          src="/images2/banner/banner-thumb/shape1.png"
                          alt="Banner Shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==========>> Banner Section Ends Here <<========== */}
          {/* ==========>> featured Project Section start Here <<========== */}
          <section className="project project--featured padding-top padding-bottom">
            <div className="container">
              <div className="project__wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="section-header section-header--left">
                      <div className="section-header__content">
                        <div className="section-header__titlebar">
                          <p className="section-header__subtitle">
                            {" "}
                            Yield Plans
                          </p>
                          <h2 className="section__header__title">
                            Select Plan &amp; Yield Lyka
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="swiper project__slider2 py-2">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="project__item">
                            <div className="project__item-inner">
                              <div className="project__item-thumb">
                                <img
                                  src="/images2/igo/item/01.jpg"
                                  alt="IGO cover"
                                />
                                <span className="badge">
                                  <img
                                    src="/images2/chain/binance.png"
                                    alt="chain logo"
                                  />
                                </span>
                              </div>
                              <div className="project__item-content">
                                <div className="project__item-top">
                                  <div className="project__item-author">
                                    <a href="#">
                                      <img
                                        src="/images2/igo/author/1.png"
                                        alt="author image"
                                      />
                                    </a>
                                    <h4>Yield Pro</h4>
                                  </div>
                                </div>
                                <div className="project__item-middle">
                                  <ul className="project__infolist">
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        APY
                                      </p>
                                      <p className="project__infolist-data">
                                        48%
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Locking Period
                                      </p>
                                      <p className="project__infolist-data">
                                        1 Year
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Minimum Yield
                                      </p>
                                      <p className="project__infolist-data">
                                        60$
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Maximum Yield
                                      </p>
                                      <p className="project__infolist-data">
                                        60000$
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="project__item-bottom">
                                  <a
                                    href="/login"
                                    className="default-btn default-btn--small"
                                  >
                                    Yield Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="project__item">
                            <div className="project__item-inner">
                              <div className="project__item-thumb">
                                <img
                                  src="/images2/igo/item/02.jpg"
                                  alt="IGO cover"
                                />
                                <span className="badge">
                                  <img
                                    src="/images2/chain/binance.png"
                                    alt="chain logo"
                                  />
                                </span>
                              </div>
                              <div className="project__item-content">
                                <div className="project__item-top">
                                  <div className="project__item-author">
                                    <a href="#">
                                      <img
                                        src="/images2/igo/author/2.png"
                                        alt="author image"
                                      />
                                    </a>
                                    <h4>Yield Pro Max</h4>
                                  </div>
                                </div>
                                <div className="project__item-middle">
                                  <ul className="project__infolist">
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        60%
                                      </p>
                                      <p className="project__infolist-data">
                                        APY
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Locking Period
                                      </p>
                                      <p className="project__infolist-data">
                                        2 Year
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Minimum Yield
                                      </p>
                                      <p className="project__infolist-data">
                                        60$
                                      </p>
                                    </li>
                                    <li className="project__infolist-item">
                                      <p className="project__infolist-name">
                                        Maximum Yield
                                      </p>
                                      <p className="project__infolist-data">
                                        60000$
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="project__item-bottom">
                                  <a
                                    href="/login"
                                    className="default-btn default-btn--small"
                                  >
                                    Yeild Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="project__slider-pagination mt-4 text-center"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==========>> featured Project Section Ends Here <<========== */}
          {/* ==========>> work Section start Here <<========== */}
          <section className="work padding-top padding-bottom bg--primary-color">
            <div className="container">
              <div className="section-header section-header--middle">
                <div className="section-header__content">
                  <div className="section-header__titlebar">
                    <p className="section-header__subtitle"> Getting Start </p>
                    <h2 className="section__header__title"> Simple as 1,2,3</h2>
                  </div>
                </div>
              </div>
              <div className="work__wrapper">
                <div className="row  justify-content-center g-4">
                  <div className="col-lg-4 col-sm-6">
                    <div className="work__item">
                      <div className="work__item-inner">
                        <div className="work__item-thumb">
                          <img
                            src="/images2/work/1.png"
                            alt="work Step 1 Image"
                          />
                        </div>
                        <div className="work__item-content">
                          <h4>1. Register LykaYield</h4>
                          <p>
                            Simply Register in LykaYield by providing basic
                            information
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="work__item">
                      <div className="work__item-inner">
                        <div className="work__item-thumb">
                          <img
                            src="/images2/work/2.png"
                            alt="work Step 2 Image"
                          />
                        </div>
                        <div className="work__item-content">
                          <h4>2. Select Plan</h4>
                          <p>
                            Deposit Lyka Tokens in your wallet and Select the
                            plan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="work__item">
                      <div className="work__item-inner">
                        <div className="work__item-thumb">
                          <img
                            src="/images2/work/3.png"
                            alt="work Step 3 Image"
                          />
                        </div>
                        <div className="work__item-content">
                          <h4>3. Start Yeild</h4>
                          <p>
                            Click on yeild and start earning lyka tokens per
                            every hour
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a href="/register" className="default-btn">
                    <span>Register Now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* ==========>> work Section Ends Here <<========== */}
          <br />
          {/* ==========>> cta Section start Here <<========== */}
          <section
            className="cta  padding-bottom"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="container">
              <div className="cta__wrapper">
                <div className="cta__content">
                  <p className="section-header__subtitle">
                    {" "}
                    Refer a Friend &amp; Earn 8% Commision on his every package
                    activation
                  </p>
                  <a href="apply-project.html" className="default-btn">
                    <span>Start Referring Now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* ==========>> cta Section Ends Here <<========== */}
          {/* ================> Footer section start here <================== */}
          <footer
            className="footer"
            style={{ backgroundImage: "url(/images2/footer/bg.png)" }}
          >
            <div className="footer__wrapper padding-top padding-bottom">
              <div className="container">
                <div className="footer__content text-center">
                  <a className="mb-4 d-inline-block" href="index-2.html">
                    <img src="/images2/logo/logo.png" alt="Logo" />
                  </a>
                  <ul className="social justify-content-center">
                    <li className="social__item">
                      <a
                        href="https://twitter.com/lykacoin"
                        className="social__link"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        href="https://twitter.com/lykacoin"
                        className="social__link"
                      >
                        <i className="fab fa-telegram" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        href="https://t.me/lykacoin_chat"
                        className="social__link"
                      >
                        <i className="fab fa-telegram" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        href="https://www.youtube.com/channel/UC80qk5vgad9sMykF_bslMhw"
                        className="social__link"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__copyright">
              <div className="container">
                <div className="text-center py-4">
                  <p onClick={()=>setShowLogin(true)} className=" mb-0">
                    Lyka Yield © 2022 | All Rights Reserved{" "}
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/* ================> Footer section end here <================== */}
          {/* scrollToTop start here */}
          <a href="#" className="scrollToTop">
            <i className="fa-solid fa-arrow-up-from-bracket" />
          </a>
          {/* scrollToTop ending here */}
        </div>
      </div>

      <Script   src="/js2/jquery-3.6.0.min.js" />
      <Script   src="/js2/bootstrap.bundle.min.js" />
      <Script   src="/js2/all.min.js" />
      <Script  src="/js2/swiper-bundle.min.js" />
      <Script   src="/js2/aos.js" />
      <Script   src="/js2/purecounter.js" />
      <Script   src="/js2/custom.js" />
    </div>
  );
};

export default MainPage;
