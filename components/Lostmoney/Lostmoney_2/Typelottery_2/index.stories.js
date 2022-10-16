import Typelottery_2 from "."
import getAPI from "./util";


export const ListlotteryStory = (args, { loaded: {typelottery} }) => <Typelottery_2 {...args} {...typelottery} />;
ListlotteryStory.args = {
};

ListlotteryStory.loaders = [
  async () => ({
    typelottery: (await getAPI()).props}),
];


export default {
  title: 'Lostmoney/Lostmoney_2/elements/Typelottery_2',
  component: Typelottery_2,
  argTypes:  {
  }
}
