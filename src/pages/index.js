import "../styles/global.module.scss";
import * as React from "react";
import Layout from "../components/Layout/Layout";
import Verification from "../components/Verification/Verification";

const VerificationPage = () => {
  return (
    <Layout fullScreen>
      <Verification />
    </Layout>
  );
};

export default VerificationPage;
