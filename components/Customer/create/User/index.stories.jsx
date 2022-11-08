import User from '.'


// Here we export a variant of the default template passing props
export const Story = (args) => <User {...args}  />;

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/User/create',
  component: User,
  argTypes: {
    url: {
      defaultValue: "http://localhost:8000/api/v1/user/register",
    }
  },
};


