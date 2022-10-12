import React from "react";
import LotteryFrom from "../../components/LotteryForm";
import AdminLayout from "../../layouts/AdminLayout";

export default function index() {
  return (
    <>
      <AdminLayout>
        <LotteryFrom></LotteryFrom>
      </AdminLayout>
    </>
  );
}
