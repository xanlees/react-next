import CustomerLayout from ".";
import getAPI_sidebar from "./Sidebar/util";

export const Story = (args, { loaded: { sidebar_user_profile } }) => (
  <CustomerLayout {...args} {...sidebar_user_profile} />
);

Story.args = {};

Story.loaders = [
  async () => ({
    sidebar_user_profile: (await getAPI_sidebar()).props,
  }),
];

export default {
  title: "CustomerLayout/UI/CustomerLayout",
  component: CustomerLayout,
  argTypes: {},
};
