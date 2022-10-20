import React from "react";
import AgentLayout from "../../layouts/AgentLayout";
import ListOfCustomer from "../../components/Agents/Customers/Listcustomer";
import getAPI from "../../components/Agents/Customers/Listcustomer/util";
const index = (prop) => {
  return (
    <>
      <AgentLayout>
        <ListOfCustomer {...prop} />
      </AgentLayout>
    </>
  );
};
export async function getServerSideProps() {
  return getAPI();
}
export default index;
