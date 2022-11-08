import { getAxios } from "../../../../utils/get-axios";

export default async function postAPI({ url, method }) {
  let register_agent_url = url.register_agent_url;
  console.log(register_agent_url);
  const response_register_agent = await getAxios()[method](register_agent_url);
  if (response_register_agent.status !== 200) return response_register_agent;
  console.log(response_register_agent);
  return response_register_agent;
}
