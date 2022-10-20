import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import ListOfCustomer from "../../../components/Admins/Customers/Listcustomer";
import getAPI from "../../../components/Admins/Customers/Listcustomer/util";
const index = (prop) => {
  return (
    <div>
      <AdminLayout>
        <ListOfCustomer {...prop} />
      </AdminLayout>
    </div>
  );
};
export async function getServerSideProps() {
  return getAPI();
}
export default index;
