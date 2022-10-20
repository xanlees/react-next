import Lower_wing from "."
import getAPI from "./util";


export const Lower_wingStory = (args, { loaded: {lower} }) => <Lower_wing {...args} {...lower} />;
Lower_wingStory.args = {
};

Lower_wingStory.loaders = [
  async () => ({
    lower: (await getAPI()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_wing/Lower_wing',
  component: Lower_wing,
  argTypes:  {
  }
}
