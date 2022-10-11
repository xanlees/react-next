import React from "react";
import LotteryFrom from "../../components/LotteryForm";
import AdminLayout from "../../layouts/AdminLayout";
import Form from "../../components/LotteryForm/DayForm";
import Fromm from "../../components/LotteryForm/DayForm/Formm";

export default function index() {
  return (
    <>
      <AdminLayout>
        {/* <LotteryFrom></LotteryFrom> */}
        <Fromm />
      </AdminLayout>
    </>
  );
}
