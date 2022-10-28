import NumberButton from ".";

export const Story = (args) => <NumberButton lottery_number="01" {...args} />;

export default {
  title: "BuyLottery/GroupNumber/NumberButton",
  component: NumberButton,
  argTypes: {
    lottery_number: { control: "text" },
  },
};
