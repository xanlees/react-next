import Upper_2 from ".";
import getAPI_Upper from "./util";

export const Upper_2Story = (args, { loaded: { upper } }) => (
  <Upper_2 {...args} {...upper} />
);
Upper_2Story.args = {};

Upper_2Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_2/elements/Upper_2",
  component: Upper_2,
  argTypes: {},
};
