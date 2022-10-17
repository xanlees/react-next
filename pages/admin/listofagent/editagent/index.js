import React from "react";
import AdminLayout from "../../../../layouts/AdminLayout";
import EditAgent from "../../../../components/Admins/Agentslist/Editagent";

const index = () => {
  return (
    <>
      <AdminLayout>
        <EditAgent />
      </AdminLayout>
    </>
  );
};

export default index;
