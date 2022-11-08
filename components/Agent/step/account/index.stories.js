import Account from ".";

export const Story = (args) => <Account method="post" {...args} />;
Story.args = {};

export default {
  title: "Agent/step/elements/account",
  component: Account,
  argTypes: {
    url: {
      defaultValue: {
        register_agent_url: "http://localhost:8000/api/v1/user/register_agent",
      },
    },
  },
};
