
import Lotteryon from '.'
import getAPI  from './util'


// Here we export a variant of the default template passing props
export const LotteryonStory = (args, { loaded: {lotteryon} }) => <Lotteryon {...args} {...lotteryon} />;
LotteryonStory.args = {
};


LotteryonStory.loaders = [
  async () => ({
    lotteryon: (await getAPI()).props}),
];



// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Lostterylist/Elements/Lotteryon',
  component: Lotteryon,
  argTypes: {
    
  },
 
};

