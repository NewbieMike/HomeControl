import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navigation } from "../Navigation/Navigation";
const Component = ({ children }) => {
  return (
    <div className="">
      <Navigation />
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
