import { getAxios } from "../../../../utils/get-axios";

export default async function postAPI(method, url, formdata) {

<<<<<<< HEAD
  let register_url = url.register_url
  console.log(register_url)
  let deposit_url = url.deposit_url

  const response_register = await getAxios()[method](register_url, formdata)
  console.log(response_register)
  if (response_register.status !== 200)
    return response_register
  const data = response_register.data
=======
  let registeragent_url = url.registeragent_url
  console.log(registeragent_url)
  let commission_url = url.commission_url

  const response_registeragent = await getAxios()[method](registeragent_url, formdata)
  console.log(response_registeragent)
  if (response_registeragent.status !== 200)
    return response_registeragent
  const data = response_registeragent.data
>>>>>>> main
  const user_id = data.user.id
  console.log('user_id', user_id)

  formdata.append('user', user_id)

<<<<<<< HEAD
  const response_deposit = await getAxios()[method](deposit_url, formdata)
  console.log('response_deposit', response_deposit)
  return response_deposit;
=======
  const response_commision = await getAxios()[method](commission_url, formdata)
  console.log('response_commision', response_commision)
  return response_commision;
>>>>>>> main
  
}
