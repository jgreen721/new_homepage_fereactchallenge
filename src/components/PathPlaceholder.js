import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const PathPlaceholder = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="placeholder-wrapper">
      <h1 className="placeholder-h1">
        {location.pathname} -- Under Construction 🚧
      </h1>
      <Link className="back-btn" to="/">
        Back
      </Link>
    </div>
  );
};

export default PathPlaceholder;
