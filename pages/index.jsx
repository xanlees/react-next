import React from "react";
import CustomerLayout from "../layouts/CustomerLayout/index";
import LotteryList from "../components/LotteryList";
import getAPI from "../components/LotteryList/uitil";
const index = (props) => {
  return (
    <div>
      <CustomerLayout>
        <LotteryList {...props} />a
      </CustomerLayout>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  return getAPI();
}
