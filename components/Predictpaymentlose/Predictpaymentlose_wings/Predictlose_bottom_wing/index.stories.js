import Predictlose_bottom_wing from ".";
import getAPI_Lower from "./util";

export const Lower_2Story = (args, { loaded: { lower } }) => (
  <Predictlose_bottom_wing {...args} {...lower} />
);
Lower_2Story.args = {};

Lower_2Story.loaders = [
  async () => ({
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_wings/elements/Predictlose_bottom_wing",
  component: Predictlose_bottom_wing,
  argTypes: {},
};
