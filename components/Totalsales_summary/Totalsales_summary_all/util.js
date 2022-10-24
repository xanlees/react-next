import { getAxios } from '../../../utils/get-axios';

export default async function getAPI_totalsales_summary() {
  const totalsales_summary_url = "http://localhost:8000/api/v1/lottery";
  const method = "get";
  const response = await getAxios()[method](totalsales_summary_url,null);
  console.log(response)
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        totalsales_summary: data,
      },
    };
  };

