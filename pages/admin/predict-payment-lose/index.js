import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import PredictTwoNumber from "../../../components/Predictpaymentlose/Predictpaymentlose_2";
import getAPI_Lower from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Lower_2/util";
// import getAPI_Upper from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Upper_2/util";

const index = (lower) => {
  return (
    <>
      <AdminLayout>
        <PredictTwoNumber {...lower} />
      </AdminLayout>
    </>
  );
};

export async function getServerSideProps() {
  return getAPI_Lower();
}

export default index;
