import Predictpaymentlose_Evennumber_Primenumber from "../Predictpaymentlose_Evennumber_Primenumber";
import getAPI_evennumber_top from "./Predictlose_Evennumber_top/util";
import getAPI_prime_top from "./Predictlose_Primenumber_top/util";
import getAPI_evennumber_bottom from "./Predictlose_Evennumber_bottom/util";
import getAPI_prime_bottom from "./Predictlose_Primenumber_bottom/util";

export const Story = (args, { loaded: { evennumber_top, primenumber_top, evennumber_bottom, primenumber_bottom   } }) => (
  <Predictpaymentlose_Evennumber_Primenumber {...args} {...evennumber_top} {...primenumber_top} {...evennumber_bottom} {...primenumber_bottom} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    evennumber_top: (await getAPI_evennumber_top()).props,
    primenumber_top: (await getAPI_prime_top()).props,
    evennumber_bottom: (await getAPI_evennumber_bottom()).props,
    primenumber_bottom: (await getAPI_prime_bottom()).props,
  }),
];

export default {
  title: "Predictpaymentlose/Predictpaymentlose_Evennumber_Primenumber",
  component: Predictpaymentlose_Evennumber_Primenumber,
  argTypes: {},
};
