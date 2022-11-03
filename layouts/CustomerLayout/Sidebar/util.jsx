import { getAxios } from "../../../utils/get-axios";
import Cookies from "js-cookie";
import { verify } from "jsonwebtoken";

export default async function getAPI_sidebar() {
  var token = Cookies.get("token");
  var decode = verify(
    token,
    "django-insecure-v6-x4d#e1wkcv4jila4!l)*url$o@jy8$&018rl7--dvegw%pj"
  );
  var { user_id } = decode;
  const user_url = "http://localhost:8000/api/v1/user/" + user_id;
  const method = "get";
  try {
    const response = await getAxios()[method](user_url, null);
    const data = await response.data;
    if (!data) return { props: {} };
    return {
      props: {
        sidebar_user_profile: data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
