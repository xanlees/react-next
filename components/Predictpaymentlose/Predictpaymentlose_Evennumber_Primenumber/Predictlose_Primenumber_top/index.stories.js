import Predictlose_Primenumber_top from "."
import getAPI_prime_top from "./util";

export const Kick_lowerStory = (args, { loaded: {primenumber_top} }) => <Predictlose_Primenumber_top {...args} {...primenumber_top} />;
Kick_lowerStory.args = {
};

Kick_lowerStory.loaders = [
  async () => ({
    primenumber_top: (await getAPI_prime_top()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber/Predictlose_Primenumber_top',
  component: Predictlose_Primenumber_top,
  argTypes:  {
  }
}
