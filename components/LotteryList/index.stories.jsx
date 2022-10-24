import LotteryList from ".";
import getAPI from "./uitil";

export const Story = (args, { loaded: { lotteries } }) => (
  <LotteryList {...args} {...lotteries} />
);

Story.args = {};
Story.loaders = [
  async () => ({
    lotteries: (await getAPI())?.props,
  }),
];

export default {
  title: "LotteryList/components/LotteryList",
  component: LotteryList,
  argTypes: {},
};
