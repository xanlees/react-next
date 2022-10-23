import Predictlose_Primenumber_bottom from "."
import getAPI_prime_bottom from "./util";

export const Kick_upperStory = (args, { loaded: {primenumber_bottom} }) => <Predictlose_Primenumber_bottom {...args} {...primenumber_bottom} />;
Kick_upperStory.args = {
};

Kick_upperStory.loaders = [
  async () => ({
    primenumber_bottom: (await getAPI_prime_bottom()).props}),
];


export default {
  title: 'Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber/Predictlose_Primenumber_bottom',
  component: Predictlose_Primenumber_bottom,
  argTypes:  {
  }
}
