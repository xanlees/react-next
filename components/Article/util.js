import { getAxios } from "../../utils/get-axios";

const mock_data = {
  id: 1,
  author: "Mr Bamboo Shop",
  company: "Bamboo BI",
  image_url:
    "https://bamboobi.la/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbamboobi.3fededfc.webp&w=256&q=75",
  content: "Bamboo BI is a shoe shop with trust.",
}

export default async function getAPI() {
  const article_url = "http://localhost:3000/api/article";
  const method = "get";
  try {
    const response = await getAxios()[method](article_url, null);
    const data = await response.data;
    if (!data) return { props: {} };

    return {
      props: {
        article: data,
      },
    };
  } catch (e) {
    console.log("enter");
    return {
      props: {
        article: mock_data
      },
    };
  }
}
