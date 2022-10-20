import Upper_wing from "."
import getAPI from "./util";


export const Upper_wingStory = (args, { loaded: {upper} }) => <Upper_wing {...args} {...upper} />;
Upper_wingStory.args = {
};

Upper_wingStory.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];



export default {
  title: 'Predictpaymentlose/Predictpaymentlose_wing/Upper_wing',
  component: Upper_wing,
  argTypes:  {
  }
}
