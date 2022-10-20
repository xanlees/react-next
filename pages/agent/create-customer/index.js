import React from "react";
import CreateCustomer from "../../../components/Agents/Customers/Createcustomer";
import AgentLayout from "../../../layouts/AgentLayout";
const index = (props) => {
  return (
    <AgentLayout>
      <CreateCustomer method="post" {...props} />
    </AgentLayout>
  );
};
CreateCustomer.defaultProps = {
  url: {
    register_url: "http://localhost:8000/api/v1/user/register",
    deposit_url: "http://localhost:8000/api/v1/deposit",
  },
};
export default index;
