import { getAxios } from '../../../utils/get-axios';

export default async function getAPI() {
  const totalpredict_url = "http://localhost:8000/api/v1/lottery_period";
  const totalpredict_total = "http://localhost:8000/api/v1/lottery?is_latest=true";
  const method = "get";
  const response = await getAxios()[method](totalpredict_url,null);
  const response_total = await getAxios()[method](totalpredict_total);
    const data = await response.data;
    const total_data = await response_total.data;
    if (!data )  return { props: {} };
    // if (data ,total_data)  return { props: {} };
   
  
    return {
      props: {
        totalpredict: data,
        totalpredict_total: total_data,
      },
    };
  };

