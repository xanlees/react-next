import Predictlose_Evennumber_top from "."
import getAPI_evennumber_top from "./util";


export const Khus_lowerStory = (args, { loaded: {evennumber_top} }) => <Predictlose_Evennumber_top {...args} {...evennumber_top} />;
Khus_lowerStory.args = {
};

Khus_lowerStory.loaders = [
  async () => ({
    evennumber_top: (await getAPI_evennumber_top()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber/Predictlose_Evennumber_top',
  component: Predictlose_Evennumber_top,
  argTypes:  {
  }
}
