import React from "react";
import AgentLayout from "../../../layouts/AgentLayout";
import CreateUser from "../../../components/Agents/Customers/Createcustomer/";

export default function index(props) {
  return (
    <>
      <AgentLayout>
        <CreateUser method="post" {...props} />
      </AgentLayout>
    </>
  );
}
CreateUser.defaultProps = {
  url: {
      register_url: "http://localhost:8000/api/v1/user/register",
      deposit_url: "http://localhost:8000/api/v1/deposit",
  },
};
