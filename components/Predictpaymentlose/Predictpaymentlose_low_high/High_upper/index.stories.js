import High_upper from "."
import getAPI from "./util";



export const High_upperStory = (args, { loaded: {upper} }) => <High_upper {...args} {...upper} />;
High_upperStory.args = {
};

High_upperStory.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];

export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/High_upper',
  component: High_upper,
  argTypes:  {
  }
}
