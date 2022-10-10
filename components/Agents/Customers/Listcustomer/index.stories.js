
import Listcustomer from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

<<<<<<< HEAD
export const ListcustomerStory = (args, { loaded: {listcustomer, deposit} }) => <Listcustomer {...args} {...listcustomer} {...deposit} />;
=======
export const ListcustomerStory = (args, { loaded: {listcustomer} }) => <Listcustomer {...args} {...listcustomer}/>;
>>>>>>> main
ListcustomerStory.args = {
};


ListcustomerStory.loaders = [
  async () => ({
    listcustomer: (await getAPI()).props}),
];

<<<<<<< HEAD
ListcustomerStory.loaders = [
  async () => ({
    deposit: (await getAPI()).props}),
];


=======
>>>>>>> main
// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Agents/Customers/Elements/Listcustomer',
  component: Listcustomer,
  argTypes: {
    
  },
};

