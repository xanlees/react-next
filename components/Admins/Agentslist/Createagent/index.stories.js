
import Createagent from '../Createagent'


export const CreateagentStory = (args) => (
  <Createagent method="post" {...args} />
);

// Here we export a variant of the default template passing props


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Agentslist/Elements/Createagent',
  component: Createagent,
  argTypes: {
    url: {
      defaultValue: {
        register_url: "http://localhost:8000/api/v1/user/register",
        deposit_url: "http://localhost:8000/api/v1/deposit",
      }
    },
  },
};
