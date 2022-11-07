import { getAxios } from "../../../utils/get-axios";

export default async function postAPI(method, url, formdata, formdataa) {
  let register_agent_url = url.register_agent_url;
  let commission_url = url.commission_url;
  let deposit_url = url.deposit_url;

  const response_register_agent = await getAxios()[method](
    register_agent_url,
    formdata
  );
  if (response_register_agent.status !== 200) return response_register_agent;
  const data = response_register_agent.data;
  const user_id = data.user.id;
  formdata.append("user", user_id);
  const response_commision = await getAxios()[method](commission_url, formdata);
  const response_deposit = await getAxios()[method](deposit_url, formdata);

  return response_deposit;
}
