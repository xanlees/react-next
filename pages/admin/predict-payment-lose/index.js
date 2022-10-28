import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import PredictTwoNumber from "../../../components/Predictpaymentlose/Predictpaymentlose_two";
// import getAPI_Lower from "../../../components/Predictpaymentlose/Predictpaymentlose_two/";

const index = (lower) => {
  return (
    <>
      <AdminLayout>
        <PredictTwoNumber {...lower} />
      </AdminLayout>
    </>
  );
};

// export async function getServerSideProps() {
//   return getAPI_Lower();
// }

export default index;
