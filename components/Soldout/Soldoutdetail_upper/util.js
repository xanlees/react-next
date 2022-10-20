import { getAxios } from '../../../utils/get-axios';

export default async function getAPI() {
  const soldoutdetail_url = "http://localhost:8000/api/v1/three_lower";
  const method = "get";
  const response = await getAxios()[method](soldoutdetail_url,null);
  console.log(response)
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        soldoutdetail: data,
      },
    };
  };

