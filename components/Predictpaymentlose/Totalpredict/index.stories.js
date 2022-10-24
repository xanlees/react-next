import Totalpredict from "."
import getAPI from "./util";


export const TotalpredictStory = (args, { loaded: {totalpredict} }) => <Totalpredict {...args} {...totalpredict} />;
TotalpredictStory.args = {
};

TotalpredictStory.loaders = [
  async () => ({
    totalpredict: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Totalpredict',
  component: Totalpredict,
  argTypes:  {
  }
}
