import Createcustomer from "../Createcustomer";

export const CreatecustomerStory = (args) => (
  <Createcustomer method="post" {...args} />
);

// Here we export a variant of the default template passing props

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Agents/Customers/Elements/Createcustomer",
  component: Createcustomer,
  argTypes: {
    url: {
      defaultValue: {
        register_url: "http://localhost:8000/api/v1/user/register",
        deposit_url: "http://localhost:8000/api/v1/deposit",
      },
    },
  },
};
