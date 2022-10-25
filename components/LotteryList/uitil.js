import { getAxios } from "../../utils/get-axios";

export default async function getAPI() {
  const user_url = "http://localhost:8000/api/v1/lottery?is_latest=true";
  const method = "get";
  const response = await getAxios()[method](user_url, null);
  const data = await response.data.results;

  return {
    props: {
      lotteries: data,
    },
  };
}
