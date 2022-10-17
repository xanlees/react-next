import Totalpredict from "."
import getAPI from "./util";


export const TotalpredictStory = (args, { loaded: {typelottery} }) => <Totalpredict {...args} {...typelottery} />;
TotalpredictStory.args = {
};

TotalpredictStory.loaders = [
  async () => ({
    typelottery: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Totalpredict',
  component: Totalpredict,
  argTypes:  {
  }
}
