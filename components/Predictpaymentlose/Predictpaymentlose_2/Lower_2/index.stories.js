import Lower_2 from "."
import getAPI from "./util";



export const Lower_2Story = (args, { loaded: {lower} }) => <Lower_2 {...args} {...lower} />;
Lower_2Story.args = {
};

Lower_2Story.loaders = [
  async () => ({
    lower: (await getAPI_lowe()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_2/elements/Lower_2',
  component: Lower_2,
  argTypes:  {
  }
}
