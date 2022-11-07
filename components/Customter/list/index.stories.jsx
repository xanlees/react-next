import Customer from ".";
import getAPI from "./util";
import { thead } from "./header";

// Here we export a variant of the default template passing props

export const Story = (args, { loaded: { listcustomer } }) => (
  <Customer {...args} {...listcustomer} />
);
Story.args = {};

Story.loaders = [
  async () => ({
    listcustomer: (await getAPI()).props,
  }),
];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Customer/List",
  component: Customer,
  argTypes: {
    header: { defaultValue: thead },
  },
};
