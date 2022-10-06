import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI() {
  const lotteryon_url = "";
  const method = "get";
  const response = await getAxios()[method](lotteryon_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        lotteryon: data,
      },
    };
  };

