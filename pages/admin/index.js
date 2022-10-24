import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import ListOfLottery from "../../components/Admins/Lostterylist/Listlottery";
import getAPI from "../../components/Admins/Lostterylist/Listlottery/util";

export default function index(props) {
  return (
    <>
      <AdminLayout>
        <ListOfLottery {...props} />
      </AdminLayout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  if (req.method === "POST") {
    await getBody(req, res);
  }
  return getAPI();
}
