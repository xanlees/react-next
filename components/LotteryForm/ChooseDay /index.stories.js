import ChooseDay from ".";

export const Story = (args) => <ChooseDay method="post" {...args} />;

export default {
  title: "LotteryForm/elements/ChooseDay",
  component: ChooseDay,
  argTypes: {
    url: { defaultValue: "http://localhost:8000/api/v1/lottery_time" },
  },
};
