import Lower_3 from "."
import getAPI from "./util";

export const Lower_3Story = (args, { loaded: {lower} }) => <Lower_3 {...args} {...lower} />;
Lower_3Story.args = {
};

Lower_3Story.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_3/Lower_3',
  component: Lower_3,
  argTypes:  {
  }
}
