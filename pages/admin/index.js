import React from "react";
import LotteryFrom from "../../components/LotteryForm/DayForm/FormTime";
import Lotterytime from "../../components/LotteryForm/ChooseDay ";
import AdminLayout from "../../layouts/AdminLayout";

export default function index() {
  return (
    <>
      <AdminLayout>
        <LotteryFrom />
        // <Lotterytime />
      </AdminLayout>
    </>
  );
}
