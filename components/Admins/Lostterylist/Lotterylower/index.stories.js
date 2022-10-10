
import Lotterylower from '../Lotterylower'
import getAPI  from './util'


// Here we export a variant of the default template passing props
export const LotterylowerStory = (args, { loaded: {lotterylower} }) => <Lotterylower {...args} {...lotterylower} />;
LotterylowerStory.args = {
};


LotterylowerStory.loaders = [
  async () => ({
    lotterylower: (await getAPI()).props}),
];

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Lostterylist/Elements/Lotterylower',
  component: Lotterylower,
  argTypes: {
    
  },
};

