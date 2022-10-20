
import Listcustomer from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const ListcustomerStory = (args, { loaded: {listcustomer} }) => <Listcustomer {...args} {...listcustomer}/>;
ListcustomerStory.args = {
};


ListcustomerStory.loaders = [
  async () => ({
    listcustomer: (await getAPI()).props}),
];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Customers/component/Listcustomer',
  component: Listcustomer,
  argTypes: {
    
  },
};

