import Agent from ".";

export const Story = (args) => <Agent method="post" {...args} />;
Story.args = {};

export default {
  title: "Agent/create",
  component: Agent,
  argTypes: {
    url: {
      defaultValue: {
        register_agent_url: "http://localhost:8000/api/v1/user/register_agent",
        commission_url: "http://localhost:8000/api/v1/commission",
        deposit_url: "http://localhost:8000/api/v1/deposit",
      },
    },
  },
};
