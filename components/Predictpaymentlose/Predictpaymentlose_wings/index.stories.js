import Predictpaymentlose_wings from "../Predictpaymentlose_wings";
import getAPI_Lower from "./Predictlose_top_wing/util";
import getAPI_Upper from "./Predictlose_bottom_wing/util";

export const Story = (args, { loaded: { upper, lower } }) => (
  <Predictpaymentlose_wings {...args} {...upper} {...lower} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_wings",
  component: Predictpaymentlose_wings,
  argTypes: {},
};
