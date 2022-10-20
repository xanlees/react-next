import Khus_upper from "."
import getAPI from "./util";

export const Khus_upperStory = (args, { loaded: {upper} }) => <Khus_upper {...args} {...upper} />;
Khus_upperStory.args = {
};

Khus_upperStory.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];



export default {
  title: 'Predictpaymentlose/Predictpaymentlose_khus_kick/Khus_upper',
  component: Khus_upper,
  argTypes:  {
  }
}
