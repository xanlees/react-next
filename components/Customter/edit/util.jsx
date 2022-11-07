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

export async function putAPI(method, url, formdata, res) {
    try {
        const response = await getAxios()[method](url, formdata);
        return response;
      } catch {
        return {
          status: 400,
        };
  
  }
}
