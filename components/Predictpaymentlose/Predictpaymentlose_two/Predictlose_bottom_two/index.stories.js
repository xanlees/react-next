import Predictlose_bottom_two from ".";
import getAPI_Lower from "./util";

export const Lower_2Story = (args, { loaded: { bottom } }) => (
  <Predictlose_bottom_two {...args} {...bottom} />
);
Lower_2Story.args = {};

Lower_2Story.loaders = [
  async () => ({
    bottom: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_two/elements/Predictlose_bottom_two",
  component: Predictlose_bottom_two,
  argTypes: {},
};
