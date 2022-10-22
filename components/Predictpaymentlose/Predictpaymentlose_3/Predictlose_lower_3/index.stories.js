import Predictlose_lower_3 from "../Predictlose_lower_3"
import getAPI_lower from "./util";

export const Story = (args, { loaded: {lower} }) => <Predictlose_lower_3 {...args} {...lower} />;
Story.args = {
};

Story.loaders = [
  async () => ({
    lower: (await getAPI_lower()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_3/Predictlose_lower_3',
  component: Predictlose_lower_3,
  argTypes:  {
  }
}
