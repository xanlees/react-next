
import Listcustomer from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const ListcustomerStory = (args, { loaded: {listcustomer, deposit} }) => <Listcustomer {...args} {...listcustomer} {...deposit} />;
ListcustomerStory.args = {
};


ListcustomerStory.loaders = [
  async () => ({
    listcustomer: (await getAPI()).props}),
];

ListcustomerStory.loaders = [
  async () => ({
    deposit: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Agents/Customers/Elements/Listcustomer',
  component: Listcustomer,
  argTypes: {
    
  },
};

