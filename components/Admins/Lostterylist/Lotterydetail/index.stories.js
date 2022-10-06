
import Lotterydetail from '.'
import getAPI  from './util'



// Here we export a variant of the default template passing props

export const LotterydetailStory = (args, { loaded: {lotterydetail} }) => <Lotterydetail {...args} {...lotterydetail} />;
LotterydetailStory.args = {
};


LotterydetailStory.loaders = [
  async () => ({
    lotterydetail: (await getAPI()).props}),
];



// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Lostterylist/Elements/Lotterydetail',
  component: Lotterydetail,
  argTypes: {
    
  },
 
};

