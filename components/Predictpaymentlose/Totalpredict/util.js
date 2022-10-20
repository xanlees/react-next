import { getAxios } from '../../../utils/get-axios';

export default async function getAPI() {
  const typelotery_url = "http://localhost:8000/api/v1/three_lower";
  const method = "get";
  const response = await getAxios()[method](typelotery_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        typelottery: data,
      },
    };
  };

