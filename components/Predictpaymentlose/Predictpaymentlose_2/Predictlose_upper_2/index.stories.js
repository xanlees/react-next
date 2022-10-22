import Predictlose_upper_2 from ".";
import getAPI_upper from "./util";

export const Upper_2Story = (args, { loaded: { upper } }) => (
  <Predictlose_upper_2 {...args} {...upper} />
);
Upper_2Story.args = {};

Upper_2Story.loaders = [
  async () => ({
    upper: (await getAPI_upper()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_2/elements/Predictlose_upper_2",
  component: Predictlose_upper_2,
  argTypes: {},
};
