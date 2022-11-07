import Agent from ".";
import getAPI from "./util";
import { thead } from "./header";

export const Story = (args, { loaded: { agent_list } }) => (
  <Agent {...args} {...agent_list} />
);
Story.args = {};

Story.loaders = [
  async () => ({
    agent_list: (await getAPI()).props,
  }),
];

export default {
  title: "Agent/List",
  component: Agent,
  argTypes: {
    header: { defaultValue: thead },
  },
};
