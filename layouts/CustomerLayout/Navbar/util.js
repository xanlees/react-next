import { getAxios } from "../../../utils/get-axios";

export default async function getAPI_navbar() {
  const navbar = "http://localhost:8000/api/v1/user/";
  const method = "get";
  const response = await getAxios()[method](navbar, null);
  const data = await response.data;
  if (!data) return { props: {} };
  return {
    props: {
      upper: data,
    },
  };
}
