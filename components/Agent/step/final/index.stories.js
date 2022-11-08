import Final from ".";

export const Story = (args) => <Final method="post" {...args} />;
Story.args = {};

export default {
  title: "Agent/step/elements/final",
  component: Final,
  argTypes: {
    url: {
      defaultValue: {
        register_agent_url: "http://localhost:8000/api/v1/user/register_agent",
      },
    },
  },
};
