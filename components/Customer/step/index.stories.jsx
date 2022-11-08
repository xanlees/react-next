import Customer from '.'



// Here we export a variant of the default template passing props
export const Story = (args) => <Customer {...args}  />;

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/step',
  component: Customer,
  argTypes: {

    }
  }



