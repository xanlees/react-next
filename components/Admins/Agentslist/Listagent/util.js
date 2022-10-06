import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI() {
  const listagent_url = "http://localhost:8000/api/v1/createagent/?page=1";
  const method = "get";
  const response = await getAxios()[method](listagent_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        listagent: data,
      },
    };
  };

