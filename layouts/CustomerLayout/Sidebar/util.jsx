import { getAxios } from "../../../utils/get-axios";
import Cookies from "js-cookie";
import { verify } from "jsonwebtoken";

export default async function getAPI_sidebar() {
  var token = Cookies.get("token");
  var decode = verify(
    token,
    "bMFZFfDdzpgqlcQZklCdPldjAWAiMxfNZCIHvTtfHhSLyukxLz"
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
