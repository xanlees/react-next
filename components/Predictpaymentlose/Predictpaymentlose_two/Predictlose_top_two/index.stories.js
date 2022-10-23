import Predictlose_top_two from ".";
import getAPI_Upper from "./util";

export const Upper_2Story = (args, { loaded: { upper } }) => (
  <Predictlose_top_two {...args} {...upper} />
);
Upper_2Story.args = {};

Upper_2Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_two/elements/Predictlose_top_two",
  component: Predictlose_top_two,
  argTypes: {},
};
