import Deposit from '.'


// Here we export a variant of the default template passing props
export const Story = (args) => <Deposit {...args}  />;

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/Deposit/create',
  component: Deposit,
  argTypes: {
    deposit_url: {
      defaultValue: "http://localhost:8000/api/v1/deposit",
    },
    user_id: {
      defaultValue: "7", control: { type: 'number' }
    
    }
  },
};


