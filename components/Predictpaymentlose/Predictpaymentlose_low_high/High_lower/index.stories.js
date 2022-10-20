import High_lower from "."
import getAPI from "./util";



export const High_lowerStory = (args, { loaded: {lower} }) => <High_lower {...args} {...lower} />;
High_lowerStory.args = {
};

High_lowerStory.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/High_lower',
  component: High_lower,
  argTypes:  {
  }
}
