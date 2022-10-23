import Predictlose_high_bottom from "."
import getAPI_high_bottom from "./util";



export const High_upperStory = (args, { loaded: {high_bottom} }) => <Predictlose_high_bottom {...args} {...high_bottom} />;
High_upperStory.args = {
};

High_upperStory.loaders = [
  async () => ({
    high_bottom: (await getAPI_high_bottom()).props}),
];

export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Predictlose_high_bottom',
  component: Predictlose_high_bottom,
  argTypes:  {
  }
}
