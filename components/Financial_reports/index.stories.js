import Financial_reports from ".";
import getAPI  from './util'

// Here we export a variant of the default template passing props

export const Financial_reportsStory = (args, { loaded: { financial_reports } }) => (
  <Financial_reports {...args} {...financial_reports} />
);
Financial_reportsStory.args = {};

Financial_reportsStory.loaders = [
  async () => ({
    financial_reports: (await getAPI()).props}),
];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Financial_reports",
  component: Financial_reports,
  argTypes: {},
};
