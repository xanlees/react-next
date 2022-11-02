import Sidebar from ".";
import getAPISidebar from "./util";

export const SidebarStory = (args, { loaded: { sidebar_user_profile } }) => (
  <Sidebar {...args} {...sidebar_user_profile} />
);
SidebarStory.args = {};
SidebarStory.loaders = [
  async () => ({
    sidebar_user_profile: (await getAPISidebar())?.props,
  }),
];

export default {
  title: "CustomerLayout/components/Sidebar",
  component: Sidebar,
  argTypes: {},
};
