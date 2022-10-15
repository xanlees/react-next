
import Soldout from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const SoldoutStory = (args, { loaded: {soldout} }) => <Soldout {...args} {...soldout} />;
SoldoutStory.args = {
};


SoldoutStory.loaders = [
  async () => ({
    soldout: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Soldout/component/Soldout',
  component: Soldout,
  argTypes: {
    
  },
};

