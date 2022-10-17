import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import Dropdown from "../../../components/Lostmoney/Lostmoney_2/Dropdown_2";
// import PredictPaymentLose from "../../../components/Lostmoney/Lostmoney_2/Lower_2";
// import PredictPaymentLoseTotal from "../../../components/Lostmoney/Lostmoney_2/Typelottery_2/";
import PredictPaymentLoseLower from "../../../components/Lostmoney/Lostmoney_2/Lower_2";
import getAPI from "../../../components/Lostmoney/Lostmoney_2/Lower_2/util";
const index = (prop) => {
  return (
    <>
      <AdminLayout>
        <Dropdown />
        {/* <PredictPaymentLose /> */}
        <PredictPaymentLoseLower {...prop} />
      </AdminLayout>
    </>
  );
};
export async function getServerSideProps() {
  return getAPI();
}
export default index;
