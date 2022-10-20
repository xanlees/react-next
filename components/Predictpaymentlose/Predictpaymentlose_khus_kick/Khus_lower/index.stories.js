import Khus_lower from "."
import getAPI from "./util";


export const Khus_lowerStory = (args, { loaded: {lower} }) => <Khus_lower {...args} {...lower} />;
Khus_lowerStory.args = {
};

Khus_lowerStory.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_khus_kick/Khus_lower',
  component: Khus_lower,
  argTypes:  {
  }
}
