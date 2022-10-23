import Predictpaymentlose_two from "../Predictpaymentlose_two";
import getAPI_Lower from "./Predictlose_top_two/util";
import getAPI_Upper from "./Predictlose_bottom_two/util";

export const Story = (args, { loaded: { upper, lower } }) => (
  <Predictpaymentlose_two {...args} {...upper} {...lower} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    upper: (await getAPI_Upper()).props,
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_two",
  component: Predictpaymentlose_two,
  argTypes: {},
};
