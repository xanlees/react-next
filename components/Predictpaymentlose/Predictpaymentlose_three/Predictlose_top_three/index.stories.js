import Predictlose_top_three from ".";
import getAPI_Upper from "./util";

export const Predictlose_upper_3Story = (args, { loaded: { upper } }) => (
  <Predictlose_top_three {...args} {...upper} />
);
Predictlose_upper_3Story.args = {};

Predictlose_upper_3Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_three/elements/Predictlose_top_three",
  component: Predictlose_top_three,
  argTypes: {},
};
