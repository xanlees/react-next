
import Totalsales_summary_bottom from '.'
import getAPI_totalsales_summary_bottom  from './util' 

// Here we export a variant of the default template passing props

export const Totalsales_summary_bottomStory = (args, { loaded: {totalsales_summary_bottom} }) => <Totalsales_summary_bottom {...args} {...totalsales_summary_bottom} />;
Totalsales_summary_bottomStory.args = {
};


Totalsales_summary_bottomStory.loaders = [
  async () => ({
    totalsales_summary_bottom: (await getAPI_totalsales_summary_bottom()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Totalsales_summary/component/Totalsales_summary_bottom',
  component: Totalsales_summary_bottom,
  argTypes: {
    
  },
};

