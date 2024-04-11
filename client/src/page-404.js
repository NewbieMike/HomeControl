import { React, useState } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const [errorMsg, setErrorMsg] = useState(error);
  return (
    <div className="error-page-container">
      <div className="error-msg d-flex flex-column row">
        <div className="error-status col-3 w-100  h-25 fs-1 text-light d-flex align-items-center justify-content-center">
          {errorMsg.status}
        </div>
        <div className="error-status-text col-3 w-100 d-flex align-items-center justify-content-center h-25 fs-1  text-light">
          {errorMsg.statusText}
        </div>
        <div className="error-data col-3 w-100 text-center d-flex align-items-center justify-content-center h-25 fs-5 text-light">
          {errorMsg.data}
        </div>
        <a href="/">
          <button type="button" class="btn btn-dark col-3 w-100">
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
