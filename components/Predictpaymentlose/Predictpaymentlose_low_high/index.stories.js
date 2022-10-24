import Predictpaymentlose_low_high from "../Predictpaymentlose_low_high";
import getAPI_high_top from "./Predictlose_high_top/util";
import getAPI_low_top from "./Predictlose_low_top/util";
import getAPI_high_bottom from "./Predictlose_high_bottom/util";
import getAPI_low_bottom from "./Predictlose_low_bottom/util";

export const Story = (args, { loaded: { high_top, low_top, high_bottom , low_bottom } }) => (
  <Predictpaymentlose_low_high {...args} {...high_top} {...low_top} {...high_bottom} {...low_bottom} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    high_top: (await getAPI_high_top()).props,
    low_top: (await getAPI_low_top()).props,
    high_bottom: (await getAPI_high_bottom()).props,
    low_bottom: (await getAPI_low_bottom()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_low_high",
  component: Predictpaymentlose_low_high,
  argTypes: {},
};
