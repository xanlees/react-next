import Predictlose_low_top from "."
import getAPI_low_top from "./util";


export const Low_lowerStory = (args, { loaded: {low_top} }) => <Predictlose_low_top {...args} {...low_top} />;
Low_lowerStory.args = {
};

Low_lowerStory.loaders = [
  async () => ({
    low_top: (await getAPI_low_top()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Predictlose_low_top',
  component: Predictlose_low_top,
  argTypes:  {
  }
}
