import Agent from ".";
import getAPI from "./util";

export const Story = (args) => <Agent method="post" {...args} />;
Story.args = {};

// Story.loaders = [
//   async () => ({
//     agent: (await getAPI()).props,
//   }),
// ];

export default {
  title: "Agent/create",
  component: Agent,
  argTypes: {
    url: {
      defaultValue: {
        registeragent_url: "http://localhost:8000/api/v1/user/register_agent",
        commission_url: "http://localhost:8000/api/v1/commission",
      },
    },
  },
};
