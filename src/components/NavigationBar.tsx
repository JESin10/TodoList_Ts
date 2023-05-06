import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <Link to="/">main </Link>
      <Link to="/write">write </Link>
      <Link to="/profile">profile </Link>
    </div>
  );
}
