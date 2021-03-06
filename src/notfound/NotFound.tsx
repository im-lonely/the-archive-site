import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <main className="not-found">
        <div className="fourohfour">
          <h1 className="error">404</h1>
          <h3 className="message">Page Not Found</h3>
          <br />
          <div className="go-home">
            <Link to="/">Back</Link>
          </div>
        </div>
      </main>
    );
  }
}
