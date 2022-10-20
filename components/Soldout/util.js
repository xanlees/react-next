import { getAxios } from '../../utils/get-axios';

export default async function getAPI() {
  const soldout_url = "http://localhost:8000/api/v1/three_lower";
  const method = "get";
  const response = await getAxios()[method](soldout_url,null);
  console.log(response)
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        soldout: data,
      },
    };
  };

