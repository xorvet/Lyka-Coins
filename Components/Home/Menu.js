import React from "react";
import Plans from "../../Components/Home/Plans";
const Menu = () => {
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Total Staked USDT
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span className="text-success"> 7800$ </span>
                  </h4>
                  <p style={{ textAlign: "center" }}>
                    450 LYKA at present Value
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Available Lyka Withdrawal
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      <span id="lblBinaryQualified" className="text-success">
                        580$
                      </span>
                    </span>
                  </h4>
                  <p style={{ textAlign: "center" }}>
                    450 LYKA at present Value
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                LYKA Current Price
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      <span id="lblDirectBusinessLeft">1 USDT = 200LYKA</span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 mb-lg order-0 order-md-2">
        <div className="pb-xlg h-100">
          <section className="widget mb-0 h-100">
            <header className="d-flex justify-content-between flex-wrap pb-2">
              <h4
                className="d-flex align-items-center pb-1"
                style={{ fontSize: 16 }}
              >
                Token Yield Rewards
              </h4>
            </header>
            <div className="widget-body p-0">
              <div className="d-flex">
                <div className="w-100">
                  <h4 className="fw-semi-bold ml-lg mb-lg">
                    <span>
                      <span id="lblDirectBusinessRight">4500 LYKA</span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                  .timer {\n                    position: absolute;\n                    bottom: 6px;\n                    right: 10px;\n                    font-weight: 500;\n                    color: #ffc107;\n                  }\n                ",
        }}
      />
    </div>
  );
};

export default Menu;
