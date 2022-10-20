
import Soldoutdetail_upper from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const Soldoutdetail_upperStory = (args, { loaded: {soldoutdetail} }) => <Soldoutdetail_upper {...args} {...soldoutdetail} />;
Soldoutdetail_upperStory.args = {
};


Soldoutdetail_upperStory.loaders = [
  async () => ({
    soldoutdetail: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Soldout/component/Soldoutdetail_upper',
  component: Soldoutdetail_upper,
  argTypes: {
    
  },
};

