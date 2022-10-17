import React from "react";
// import LotteryFrom from "../../components/LotteryForm/DayForm/FormTime";
// import Lotterytime from "../../components/LotteryForm/ChooseDay";
import AdminLayout from "../../layouts/AdminLayout";
import ListOfLottery from "../../components/Admins/Lostterylist/Listlottery";
import getAPI from "../../components/Admins/Lostterylist/Listlottery/util";

export default function index(props) {
  return (
    <>
      <AdminLayout>
        <ListOfLottery {...props} />
        {/* <LotteryFrom />
        <Lotterytime /> */}
      </AdminLayout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  if (req.method === "POST") {
    await getBody(req, res);
    // call POST API here
  }
  return getAPI();
}
