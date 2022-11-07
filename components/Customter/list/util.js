import { getAxios } from "../../../utils/get-axios";

export default async function getAPI() {
  const user_url = "http://localhost:8000/api/v1/user?is_staff=false";
  const method = "get";
  const response = await getAxios()[method](user_url, null);
  const data = await response.data;

  if (!data) return { props: {} };

  return {
    props: {
      cell_data: data.results,
    },
  };
}
