import React from "react";
import AdminLayout from "../../../../layouts/AdminLayout";
import CreateAgent from "../../../../components/Admins/Agentslist/Createagent";

const index = (props) => {
  return (
    <>
      <AdminLayout>
        <CreateAgent method="post" {...props} />
      </AdminLayout>
    </>
  );
};
CreateAgent.defaultProps = {
  url: {
    registeragent_url: "http://localhost:8000/api/v1/user/register_agent",
    commission_url: "http://localhost:8000/api/v1/commission",
  },
};
export default index;
