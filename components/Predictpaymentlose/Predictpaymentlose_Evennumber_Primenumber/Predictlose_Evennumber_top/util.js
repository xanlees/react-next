import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI_evennumber_top() {
  const lower_url = "http://localhost:8000/api/v1/evennumber_primenumber";
  const method = "get";
  const response = await getAxios()[method](lower_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        evennumber_top: data,
      },
    };
  };