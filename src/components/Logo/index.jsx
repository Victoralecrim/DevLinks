import "./logo.css";

import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/">
      <h1>Dev <span className="logo-text">Link</span></h1>
    </Link>
  );
}
