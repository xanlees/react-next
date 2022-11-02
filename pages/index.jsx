import React from "react";
import CustomerLayout from "../layouts/CustomerLayout/index";
import LotteryList from "../components/LotteryList";
import getAPI from "../components/LotteryList/uitil";
import getAPISidebar from "../layouts/CustomerLayout/Sidebar/util";
const index = (props) => {
  console.log(props);
  return (
    <div>
      <CustomerLayout {...props}>
        <LotteryList {...props} />
      </CustomerLayout>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  return getAPI();
}
export async function getClientSideProps() {
  return getAPISidebar();
}
