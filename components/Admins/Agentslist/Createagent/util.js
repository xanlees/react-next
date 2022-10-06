import { getAxios } from "../../../../utils/get-axios";

export default async function postAPI(method, url, formdata) {

  let register_url = url.register_url
  console.log(register_url)
  let deposit_url = url.deposit_url

  const response_register = await getAxios()[method](register_url, formdata)
  console.log(response_register)
  if (response_register.status !== 200)
    return response_register
  const data = response_register.data
  const user_id = data.user.id
  console.log('user_id', user_id)

  formdata.append('user', user_id)

  const response_deposit = await getAxios()[method](deposit_url, formdata)
  console.log('response_deposit', response_deposit)
  return response_deposit;
  
}
