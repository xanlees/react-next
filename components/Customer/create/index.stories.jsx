import Customer from '.'



// Here we export a variant of the default template passing props
export const Story = (args) => <Customer {...args}  />;

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/create',
  component: Customer,
  argTypes: {
    register_url: {
      defaultValue: "http://localhost:8000/api/v1/user/register",
    },
    deposit_url: {
      defaultValue:  "http://localhost:8000/api/v1/deposit",
    }
  },
};


