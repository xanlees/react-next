import Predictlose_lower_2 from ".";
import getAPI_Lower from "./util";

export const Lower_2Story = (args, { loaded: { lower } }) => (
  <Predictlose_lower_2 {...args} {...lower} />
);
Lower_2Story.args = {};

Lower_2Story.loaders = [
  async () => ({
    lower: (await getAPI_Lower()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_2/elements/Predictlose_lower_2",
  component: Predictlose_lower_2,
  argTypes: {},
};
