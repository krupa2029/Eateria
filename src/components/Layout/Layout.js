import React, { Fragment } from "react";
import ShowCart from "./ShowCart";

const Layout = (props) => {
  return (
    <Fragment>
      <ShowCart/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
