import { getAxios } from "../../../../utils/get-axios";

export default async function getAPI() {
  const user_url = ("http://localhost:8000/api/v1/user?page=1");
  const deposit_url = ("http://localhost:8000/api/v1/deposit?page=1");

  const method = "get";
  const response = await getAxios()[method](user_url, deposit_url, null);
  const data = await response.data;
  

  if (!data) return { props: {} };

  return {
    props: {
      listcustomer: data,
      deposit: data,
    },
  };
}
