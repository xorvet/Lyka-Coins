import React from 'react'

const ProfileData = () => {
  return (
    <div className="row">
              <div className="col-sm-12 col-md-6 last-side-element mb-xlg">
                <section className="widget h-100 mb-0">
                  <header>
                    <h4>Profile</h4>
                  </header>
                  <div className="widget-body w-100 notifications">
                    <div className="d-flex align-items-start">
                      <i className="la la-user-alt mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Name : </span>Prem Kumar
                      </p>
                    </div>
                    <div className="d-flex w-100">
                      <i className="la la-envelope mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Email : </span>
                        jesusprem98@gmail.com
                      </p>
                    </div>
                    <div className="d-flex w-100">
                      <i className="la la-calendar-plus mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Registered On : </span>
                        <span id="lblMemReg">26-Aug-2022</span>
                      </p>
                    </div>
                    <div className="d-flex align-items-start">
                      <i className="la la-user-check mr text-info" />
                      <p>
                        <span className="fw-semi-bold">Wallet Address</span>
                        <span id="lblSponsor">664646546546546465</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                  .newsItem {\n                    background: #171622;\n                    padding: 15px;\n                    border-radius: 2px;\n                    border: 1px solid #00dce6;\n                    margin-bottom: 10px;\n                    width: calc(100% - 1px);\n                  }\n\n                  .newsItem p {\n                    color: #ffffff;\n                    font-weight: 600;\n                    margin-bottom: 5px;\n                    font-size: 12px;\n                  }\n\n                  .newsItem h5 {\n                    margin: 0;\n                    font-weight: 400;\n                    font-size: 14px;\n                    line-height: 1.5;\n                  }\n                ",
                }}
              />
              <div className="col-sm-12 col-md-6 last-side-element mb-xlg">
                <section className="widget h-100 mb-0">
                  <header>
                    <h4>Important Notice</h4>
                    <p className="text-primary mb-0">
                      <small className="tasks-stat" />
                    </p>
                  </header>
                  <div className="widget-body task-container">
                    <div className="latestNews">
                      <marquee
                        id="marquee"
                        behavior="scroll"
                        direction="up"
                        height="161px"
                        width="100%"
                        scrollamount={3}
                        onmouseover="this.stop()"
                        onmouseout="this.start()"
                      >
                        All Admin Push News Msg will be display here dynamically
                      </marquee>
                    </div>
                  </div>
                </section>
              </div>
            </div>
  )
}

export default ProfileData