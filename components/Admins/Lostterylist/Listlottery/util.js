import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI() {
  const listlottery_url = "http://localhost:8000/api/v1/lottery?is_latest=true";
  const method = "get";
  const response = await getAxios()[method](listlottery_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        listlottery: data,
      },
    };
  };

