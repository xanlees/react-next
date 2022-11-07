import Agent from ".";

export const Story = (args) => <Agent {...args} />;
Story.args = {};

Story.loaders = [async () => ({})];

export default {
  title: "Agent/create",
  component: Agent,
  argTypes: {},
};
