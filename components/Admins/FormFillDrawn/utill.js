import { getAxios } from "../../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  const fillDrawNumber = url.fillDrawNumber;
  const response = await getAxios()[method](fillDrawNumber, formdata);
  if (response.status !== 200) return response;
  const data = response.data;
  return data;
}
