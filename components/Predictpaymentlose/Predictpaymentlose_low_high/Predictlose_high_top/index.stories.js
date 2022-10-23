import Predictlose_high_top from "."
import getAPI_high_top from "./util";



export const High_lowerStory = (args, { loaded: {high_top} }) => <Predictlose_high_top {...args} {...high_top} />;
High_lowerStory.args = {
};

High_lowerStory.loaders = [
  async () => ({
    high_top: (await getAPI_high_top()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Predictlose_high_top',
  component: Predictlose_high_top,
  argTypes:  {
  }
}
