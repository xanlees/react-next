import { getAxios } from '@utils/get-axios';

export async function postAPI(url, data) {
  const method = "post"
  console.log(url, data)
  try {
    const response = await getAxios()[method](url, data);
    return response;
  } catch {
    return {
      status: 400,
    };
  }
}