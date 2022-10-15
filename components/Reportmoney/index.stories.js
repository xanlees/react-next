import Moneyreport from ".";
// import getAPI  from './util'

// Here we export a variant of the default template passing props

export const MoneyreportStory = (args, { loaded: { moneyreport } }) => (
  <Moneyreport {...args} {...moneyreport} />
);
MoneyreportStory.args = {};

// MoneyreportStory.loaders = [
//   async () => ({
//     moneyreport: (await getAPI()).props}),
// ];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Reportmoney/component/Moneyreport",
  component: Moneyreport,
  argTypes: {},
};
