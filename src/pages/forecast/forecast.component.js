import React from "react";
import { withRouter } from "react-router";

const Forecast = ({ history, match }) => {
  console.log(match);
  return <>FORECAST!</>;
};

export default withRouter(Forecast);
