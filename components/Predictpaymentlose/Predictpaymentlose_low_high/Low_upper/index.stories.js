import Low_upper from "."
import getAPI from "./util";


export const Low_upperStory = (args, { loaded: {upper} }) => <Low_upper {...args} {...upper} />;
Low_upperStory.args = {
};

Low_upperStory.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];

export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Low_upper',
  component: Low_upper,
  argTypes:  {
  }
}
