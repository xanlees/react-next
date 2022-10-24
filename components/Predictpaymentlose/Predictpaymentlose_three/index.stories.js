import Predictpaymentlose_three from "../Predictpaymentlose_three";
import getAPI_Lower from "./Predictlose_top_three/util";
import getAPI_Upper from "./Predictlose_bottom_three/util";

export const Story = (args, { loaded: { upper, lower } }) => (
  <Predictpaymentlose_three {...args} {...upper} {...lower} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_three",
  component: Predictpaymentlose_three,
  argTypes: {},
};