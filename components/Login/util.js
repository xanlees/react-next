import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata, res) {
  try {
    const response = await getAxios()[method](url, formdata);
    return response;
  } catch {
    return {
      status: 400,
    };
  }
}
