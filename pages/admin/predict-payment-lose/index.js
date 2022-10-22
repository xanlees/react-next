import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import PredictTwoNumberLower from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Lower_2";
import getAPI from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Lower_2/util";

const index = (prop) => {
  return (
    <>
      <AdminLayout>
        <PredictTwoNumberLower {...prop} />
      </AdminLayout>
    </>
  );
};
export async function getServerSideProps() {
  return getAPI();
}
export default index;
