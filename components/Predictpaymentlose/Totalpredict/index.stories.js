import Totalpredict from "."
import getAPI from "./util";


export const TotalpredictStory = (args, { loaded: {totalpredict, totalpredict_total} }) => <Totalpredict {...args} {...totalpredict} {...totalpredict_total}/>;
TotalpredictStory.args = {
};


TotalpredictStory.loaders = [
  async () => ({
    totalpredict: (await getAPI()).props}),
 
];

// console.log("TotalpredictStory3333",props)
export default {
  title: 'Predictpaymentlose/Totalpredict',
  component: Totalpredict,
  argTypes:  {
  }
}
