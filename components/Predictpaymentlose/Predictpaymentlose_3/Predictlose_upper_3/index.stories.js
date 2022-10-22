import Predictlose_upper_3 from "../Predictlose_upper_3"
import getAPI_upper from "./util";

export const Story = (args, { loaded: {upper} }) => <Predictlose_upper_3 {...args} {...upper} />;
Story.args = {
};

Story.loaders = [
  async () => ({
    upper: (await getAPI_upper()).props}),
];

export default {
  title: 'Predictpaymentlose/Predictpaymentlose_3/Predictlose_upper_3',
  component: Predictlose_upper_3,
  argTypes:  {
  }
}
