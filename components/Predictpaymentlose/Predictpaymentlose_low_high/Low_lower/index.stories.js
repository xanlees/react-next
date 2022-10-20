import Low_lower from "."
import getAPI from "./util";


export const Low_lowerStory = (args, { loaded: {lower} }) => <Low_lower {...args} {...lower} />;
Low_lowerStory.args = {
};

Low_lowerStory.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Low_lower',
  component: Low_lower,
  argTypes:  {
  }
}
