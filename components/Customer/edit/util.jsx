import { getAxios } from "../../../utils/get-axios";

export default async function getAPI(id) {
  const user_url = `http://localhost:8000/api/v1/user/${id}?is_staff=false`;
  const method = "get";
  const response = await getAxios()[method](user_url, null);
  const data = await response.data;

  if (!data) return { props: {} };

  return {
    props: {
      customer: data,
    },
  };
}

export async function patchAPI(url, data) {
  try {
    const url_customer = url.customer_url + data.id;
    const response_customer = await update_record(url_customer, data);

    if (response_customer.status !== 200) return response_customer;
    const data_deposit = data.deposit[0];
    const url_deposit =  url.deposit_url + data_deposit.id
    
    const response_deposit = await update_record(url_deposit, data_deposit);

    if (response_deposit.status !== 200) return response_deposit;

    return {
      status: 200,
    };
  } catch {
    return {
      status: 400,
    };
  }
}

async function update_record(url, data) {
  const method = "patch";
  try {
    const response= await getAxios()[method](url, data);
    if (response.status !== 200) return response;

    return response;
  } catch {
    return {
      status: 400,
    };
  }
}

