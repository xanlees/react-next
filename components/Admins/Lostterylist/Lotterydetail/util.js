import { getAxios } from '../../../../utils/get-axios';

export default async function getAPI() {
  const lotterydetail_url = "";
  const method = "get";
  const response = await getAxios()[method](lotterydetail_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        lotterydetail: data,
      },
    };
  };

