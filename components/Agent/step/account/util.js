import { getAxios } from "../../../../utils/get-axios";

export default async function postAPI(method, url) {
  let register_agent_url = url.register_agent_url;
  const response_register_agent = await getAxios()[method](register_agent_url);
  return response_register_agent;
}
