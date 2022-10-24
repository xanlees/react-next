import { getAxios } from '../../utils/get-axios';

export default async function getAPI() {
  const financial_reports_url = "http://localhost:8000/api/v1/wing";
  const method = "get";
  const response = await getAxios()[method](financial_reports_url,null);
  console.log(response)
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        financial_reports : data,
      },
    };
  };

