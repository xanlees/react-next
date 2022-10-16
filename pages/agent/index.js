import React from "react";
import AgentLayout from "../../layouts/AgentLayout";
import ListOfCustomer from "../../components/Agents/Customers/Listcustomer";
import getAPI from "../../components/Agents/Customers/Listcustomer/util";
import bodyParser from "body-parser";
import { promisify } from "util";

export default function index(props) {
  return (
    <>
      <AgentLayout>
        <ListOfCustomer {...props} />
      </AgentLayout>
    </>
  );
}

const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  if (req.method === "POST") {
    await getBody(req, res);
    // call POST API here
  }
  return getAPI();
}
