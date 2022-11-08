import Details from ".";

export const Story = (args) => <Details method="post" {...args} />;
Story.args = {};

export default {
  title: "Agent/step/elements/details",
  component: Details,
  argTypes: {
    url: {
      defaultValue: {
        register_agent_url: "http://localhost:8000/api/v1/user/register_agent",
      },
    },
  },
};
