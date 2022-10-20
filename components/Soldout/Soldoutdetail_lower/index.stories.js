
import Soldoutdetail_lower from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const Soldoutdetail_lowerStory = (args, { loaded: {soldoutdetail} }) => <Soldoutdetail_lower {...args} {...soldoutdetail} />;
Soldoutdetail_lowerStory.args = {
};


Soldoutdetail_lowerStory.loaders = [
  async () => ({
    soldoutdetail: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Soldout/component/Soldoutdetail_lower',
  component: Soldoutdetail_lower,
  argTypes: {
    
  },
};

