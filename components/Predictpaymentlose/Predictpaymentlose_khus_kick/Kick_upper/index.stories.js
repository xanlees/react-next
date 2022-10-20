import Kick_upper from "."
import getAPI from "./util";

export const Kick_upperStory = (args, { loaded: {upper} }) => <Kick_upper {...args} {...upper} />;
Kick_upperStory.args = {
};

Kick_upperStory.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_khus_kick/Kick_upper',
  component: Kick_upper,
  argTypes:  {
  }
}
