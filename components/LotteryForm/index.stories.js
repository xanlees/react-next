<<<<<<< HEAD
import LotteryForm from "."


export const Story = (args) => <LotteryForm { ...args }/>;
=======
import LotteryForm from ".";
>>>>>>> 1a4f8fd5bd166ce7d31a367efdb75068aeaea5c1

export const LotteryFormStory = (args) => (
  <LotteryForm method="post" {...args} />
);

export default {
  title: "LotteryForm/components/LotteryForm",
  component: LotteryForm,
<<<<<<< HEAD
  argTypes:  {
  }
}
=======
  argTypes: {},
};
>>>>>>> 1a4f8fd5bd166ce7d31a367efdb75068aeaea5c1
