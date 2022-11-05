import Customer from '.'


// Here we export a variant of the default template passing props
export const Story = (args) => <Customer {...args}/>;

Story.parameters = {
    nextRouter: {
      path: "/customer/[id]",
      asPath: "/customer/1",
      query: {
        id: "1",
      },
    },
  };
// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/edit',
  component: Customer,
  argTypes: {
  },
};