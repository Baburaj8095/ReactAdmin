import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "./spinner.css";

export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    )
  );
};

export default Spinner;