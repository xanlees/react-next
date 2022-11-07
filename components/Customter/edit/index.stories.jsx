import Customer from '.'
import getAPI from './util'

// Here we export a variant of the default template passing props
export const Story = (args, { loaded: { customer } }) => <Customer {...args} {...customer} />;
Story.args = {
};
Story.loaders = [
  async (e) => ({
    customer: (await getAPI(e.args.id))?.props
  }),
];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Customer/edit',
  component: Customer,
  argTypes: {
    id: { defaultValue: "2" },
  },
};