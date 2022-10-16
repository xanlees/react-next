import { getAxios } from "../../../../utils/get-axios";

export default async function postAPI(method, url, formdata) {

  let registeragent_url = url.registeragent_url
  console.log(registeragent_url)
  let commission_url = url.commission_url

  const response_registeragent = await getAxios()[method](registeragent_url, formdata)
  console.log(response_registeragent)
  if (response_registeragent.status !== 200)
    return response_registeragent
  const data = response_registeragent.data
  const user_id = data.user.id
  console.log('user_id', user_id)

  formdata.append('user', user_id)

  const response_commision = await getAxios()[method](commission_url, formdata)
  console.log('response_commision', response_commision)
  return response_commision;
  
}
