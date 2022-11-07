import { getAxios } from "../../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  let register_agent_url = url.register_agent_url;
  let commission_url = url.commission_url;
  let deposit_url = url.deposit_url;
  console.log(
    "register_agent_url",
    register_agent_url,
    "commission_url",
    commission_url,
    "deposit_url",
    deposit_url
  );

  const response_register_agent = await getAxios()[method](
    register_agent_url,
    formdata
  );
  console.log(response_register_agent);
  if (response_register_agent.status !== 200) return response_register_agent;
  const data_id = response_register_agent.data;
  const user_id = data_id.user.id;
  console.log("user_id", user_id);

  formdata.append("user", user_id);

  const response_commision = await getAxios()[method](commission_url, formdata);
  console.log("response_commision", response_commision);

  const response_deposit = await getAxios()[method](deposit_url);
  console.log("response_deposit", response_deposit);

  return response_commision;
}
