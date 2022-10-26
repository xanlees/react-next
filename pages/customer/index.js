import React from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import LotteryList from "../../components/LotteryList";
import getAPI from "../../components/LotteryList/uitil";
import NumberModal from "../../components/BuyLottery/GroupNumber/Modal";

export default function index(props) {
  return (
    <>
      <CustomerLayout>
        <NumberModal />
        <LotteryList {...props} />
      </CustomerLayout>
    </>
  );
}
export async function getServerSideProps() {
  return getAPI();
}
