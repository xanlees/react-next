import Totalsales_summary from "../Totalsales_summary";
import getAPI_totalsales_summary_top from "./Totalsales_summary_top/util";
import getAPI_totalsales_summary_bottom from "./Totalsales_summary_bottom/util";

export const Story = (args, { loaded: { totalsales_summary_top, totalsales_summary_bottom } }) => (
  <Totalsales_summary {...args} {...totalsales_summary_top} {...totalsales_summary_bottom} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    totalsales_summary_top: (await getAPI_totalsales_summary_top()).props,
    totalsales_summary_bottom: (await getAPI_totalsales_summary_bottom()).props,
  }),
];

export default {
  title: "Totalsales_summary",
  component: Totalsales_summary,
  argTypes: {},
};
