import Kick_lower from "."
import getAPI from "./util";

export const Kick_lowerStory = (args, { loaded: {lower} }) => <Kick_lower {...args} {...lower} />;
Kick_lowerStory.args = {
};

Kick_lowerStory.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_khus_kick/Kick_lower',
  component: Kick_lower,
  argTypes:  {
  }
}
