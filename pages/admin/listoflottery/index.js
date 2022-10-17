import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import getAPI from "../../../components/Admins/Lostterylist/Listlottery/util";
import ListOfLottery from "../../../components/Admins/Lostterylist/Listlottery";
const index = (props) => {
  return (
    <>
      <AdminLayout>
        <ListOfLottery {...props} />
      </AdminLayout>
    </>
  );
};
export async function getServerSideProps() {
  return getAPI();
}
export default index;
