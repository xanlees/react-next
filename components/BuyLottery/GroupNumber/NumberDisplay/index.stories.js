import NumberDisplay from ".";

export const Story = (args) => (
  <NumberDisplay lottery_number="01" index="1" {...args} />
);

export default {
  title: "BuyLottery/GroupNumber/NumberDisplay",
  component: NumberDisplay,
  argTypes: {
    lottery_number: { control: "text" },
    index: { control: "text" },
  },
};
