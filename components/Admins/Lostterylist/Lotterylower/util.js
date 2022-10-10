import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI() {
  const lotterylower_url = "";
  const method = "get";
  const response = await getAxios()[method](lotterylower_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        lotterylower: data,
      },
    };
  };

