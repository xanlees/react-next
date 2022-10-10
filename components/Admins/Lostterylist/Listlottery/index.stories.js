
import Listlottery from '.'
import getAPI  from './util'



// Here we export a variant of the default template passing props

export const ListlotteryStory = (args, { loaded: {listlottery} }) => <Listlottery {...args} {...listlottery} />;
ListlotteryStory.args = {
};

ListlotteryStory.loaders = [
  async () => ({
    listlottery: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar

export default {
  title: 'Admins/Lostterylist/Elements/Listlottery',
  component: Listlottery,
  argTypes: {
    
  },
};

