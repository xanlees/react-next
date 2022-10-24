import Predictpaymentlose_two from "../Predictpaymentlose_two";
import getAPI_Lower from "./Predictlose_top_two/util";
import getAPI_Upper from "./Predictlose_bottom_two/util";

export const Story = (args, { loaded: { top, bottom } }) => (
  <Predictpaymentlose_two {...args} {...top} {...bottom} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    top: (await getAPI_Upper()).props,
    bottom: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_two",
  component: Predictpaymentlose_two,
  argTypes: {},
};
