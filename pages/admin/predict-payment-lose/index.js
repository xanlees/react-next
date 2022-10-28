import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
<<<<<<< HEAD
import PredictTwoNumber from "../../../components/Predictpaymentlose/Predictpaymentlose_two";
// import getAPI_Lower from "../../../components/Predictpaymentlose/Predictpaymentlose_two/";
=======
// import PredictTwoNumber from "../../../components/Predictpaymentlose/Predictpaymentlose_2";
import getAPI_Lower from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Lower_2/util";
// import getAPI_Upper from "../../../components/Predictpaymentlose/Predictpaymentlose_2/Upper_2/util";
>>>>>>> ea668275925642d20189a5ee91da3e436ad91b3d

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
