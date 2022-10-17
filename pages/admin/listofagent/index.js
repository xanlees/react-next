import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import ListOfAgent from "../../../components/Admins/Agentslist/Listagent/";
import getAPI from "../../../components/Admins/Agentslist/Listagent/util";

const index = (props) => {
  return (
    <>
      <AdminLayout>
        <ListOfAgent {...props} />
      </AdminLayout>
    </>
  );
};
export async function getServerSideProps() {
  return getAPI();
}

export default index;
