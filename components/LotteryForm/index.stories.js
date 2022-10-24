import LotteryForm from ".";

export const Story = (args) => <LotteryForm method="post" {...args} />;

export default {
  title: "LotteryForm/components/LotteryForm",
  component: LotteryForm,
  argTypes: {
    url: { defaultValue: "http://localhost:8000/api/v1/lottery" },
  },
};
