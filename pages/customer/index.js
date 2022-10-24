import React from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import LotteryList from "../../components/LotteryList";
import getAPI from "../../components/LotteryList/uitil";

export default function index(props) {
  return (
    <>
      <CustomerLayout>
        <LotteryList {...props} />
      </CustomerLayout>
    </>
  );
}
export async function getServerSideProps() {
  return getAPI();
}
