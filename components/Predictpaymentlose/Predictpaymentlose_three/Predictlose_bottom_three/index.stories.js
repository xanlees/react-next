import Predictlose_bottom_three from ".";
import getAPI_Lower from "./util";

export const Predictlose_Lower_3Story = (args, { loaded: { lower } }) => (
  <Predictlose_bottom_three {...args} {...lower} />
);
Predictlose_Lower_3Story.args = {};

Predictlose_Lower_3Story.loaders = [
  async () => ({
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_three/elements/Predictlose_bottom_three",
  component: Predictlose_bottom_three,
  argTypes: {},
};
