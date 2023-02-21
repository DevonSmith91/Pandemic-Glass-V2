import * as React from "react";
import * as styles from "./Layout.module.scss";
import cn from "classnames";

const Layout = ({ children, fullScreen }) => {
  return (
    <div className={cn(styles.layout, fullScreen ? styles.fullScreen : "")}>
      {children}
    </div>
  );
};

export default Layout;
