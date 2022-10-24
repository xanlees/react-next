import Predictlose_low_bottom from "."
import getAPI_low_bottom from "./util";


export const Low_upperStory = (args, { loaded: {low_bottom} }) => <Predictlose_low_bottom {...args} {...low_bottom} />;
Low_upperStory.args = {
};

Low_upperStory.loaders = [
  async () => ({
    low_bottom: (await getAPI_low_bottom()).props}),
];

export default {
  title: 'Predictpaymentlose/Predictpaymentlose_low_high/Predictlose_low_bottom',
  component: Predictlose_low_bottom,
  argTypes:  {
  }
}
