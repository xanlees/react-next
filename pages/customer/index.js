import React from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import LotteryList from "../../components/LotteryList";
import getAPI from "../../components/LotteryList/uitil";
// import Lottery from "../../components/LotteryForm";

export default function index(props) {
  return (
    <>
      <CustomerLayout>
        <LotteryList {...props} />
        {/* <Lottery /> */}
      </CustomerLayout>
    </>
  );
}
export async function getServerSideProps() {
  return getAPI();
}
