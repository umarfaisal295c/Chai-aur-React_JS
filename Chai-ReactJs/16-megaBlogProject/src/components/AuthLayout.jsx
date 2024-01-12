import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.stats);
  useEffect(() => {
    // true && false !== true
    // true && false
    // false
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // false && true
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
  }, [authStatus, loader]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
  
};
