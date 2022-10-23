import Predictlose_top_wing from ".";
import getAPI_Upper from "./util";

export const Upper_2Story = (args, { loaded: { upper } }) => (
  <Predictlose_top_wing {...args} {...upper} />
);
Upper_2Story.args = {};

Upper_2Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_wings/elements/Predictlose_top_wing",
  component: Predictlose_top_wing,
  argTypes: {},
};
