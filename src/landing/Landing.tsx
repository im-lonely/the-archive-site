import React from "react";
import "./landing.css";

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <section className="landing">
          <main className="main-landing">
            <h2 className="title">Lorum Ipsum Dolor</h2>
            <hr className="line" />
            <br />
            <div className="buttons">
              <a href="#1" className="landinglink">
                <div className="btn">Sit</div>
              </a>
              <a href="#2" className="landinglink">
                <div className="btn">Amet</div>
              </a>
            </div>
          </main>
        </section>
        <div className="wave-container">
          <svg className="wave" viewBox="0 0 1600 172" version="1.1">
            <g
              id="g"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="wave-path"
                transform="translate(0.000000, -662.000000)"
                fill="#17181B"
              >
                <path
                  d="M1599.04257,834 L-4.54747351e-13,834 L-4.54747351e-13,688.258691 C29.5332614,693.129699 76.9868445,733.598761 111.52648,746.731071 C148.246948,760.692554 216.681269,709.893019 232.32492,703.474247 C247.968571,697.055475 295.15,668.875627 370.020982,756.032617 C444.891963,843.189608 600.394881,812.262331 698.698638,762.411429 C797.002396,712.560526 844.674188,740.365043 910.876993,769.066074 C977.079798,797.767105 1021.18561,732.251712 1066.6243,692.705164 C1112.06298,653.158616 1121.66475,678.354134 1158.98335,707.733731 C1196.30194,737.113328 1290.42041,726.187264 1349.05412,694.003383 C1407.68782,661.819501 1418.06978,662.900799 1466.4187,662.900799 C1498.65132,662.900799 1542.85927,690.848333 1599.04257,746.743401 L1599.04257,834 Z"
                  id="wave"
                  preserveAspectRatio="none"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </>
    );
  }
}
