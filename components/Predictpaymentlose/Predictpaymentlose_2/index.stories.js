import Predictpaymentlose_2 from "../Predictpaymentlose_2";
import getAPI_Lower from "./Predictlose_lower_2/util";
import getAPI_upper from "./Predictlose_upper_2/util";

export const Story = (args, { loaded: { upper, lower } }) => (
  <Predictpaymentlose_2 {...args} {...upper} {...lower} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    upper: (await getAPI_upper()).props,
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_2",
  component: Predictpaymentlose_2,
  argTypes: {},
};
