import React from "react";
import AgentLayout from "../../../layouts/AgentLayout";
import Predictpaymentlose_Evennumber_Primenumber from "../../../components/Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber";

const index = (prop) => {
  return (
    <AgentLayout>
      <Predictpaymentlose_Evennumber_Primenumber {...prop} />
    </AgentLayout>
  );
};

// export async function getServerSideProps() {
//   return getAPI();
// }

export default index;
