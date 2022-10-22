import React from "react";
import CreateCustomer from "../../../../components/Admins/Customers/Createcustomer";
import AdminLayout from "../../../../layouts/AdminLayout";
const index = (prop) => {
  return (
    <div>
      <AdminLayout>
        <CreateCustomer method="post" {...prop} />
      </AdminLayout>
    </div>
  );
};

CreateCustomer.defaultProps = {
  url: {
    register_url: "http://localhost:8000/api/v1/user/register",
    deposit_url: "http://localhost:8000/api/v1/deposit",
  },
};

export default index;
