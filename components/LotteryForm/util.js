import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, sentdata) {
  try {
    const response = await getAxios()[method](url, sentdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
  } catch (error) {
    console.log("request error ", error);
  }
}
