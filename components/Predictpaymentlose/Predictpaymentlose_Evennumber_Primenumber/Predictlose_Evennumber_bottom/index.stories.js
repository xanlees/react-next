import Predictlose_Evennumber_bottom from "."
import getAPI_evennumber_bottom from "./util";

export const Khus_upperStory = (args, { loaded: {evennumber_bottom} }) => <Predictlose_Evennumber_bottom {...args} {...evennumber_bottom} />;
Khus_upperStory.args = {
};

Khus_upperStory.loaders = [
  async () => ({
    evennumber_bottom: (await getAPI_evennumber_bottom()).props}),
];



export default {
  title: 'Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber/Predictlose_Evennumber_bottom',
  component: Predictlose_Evennumber_bottom,
  argTypes:  {
  }
}
