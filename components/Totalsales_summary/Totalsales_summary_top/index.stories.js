
import Totalsales_summary_top from '.'
import getAPI_totalsales_summary_top  from './util' 

// Here we export a variant of the default template passing props

export const Totalsales_summary_topStory = (args, { loaded: {totalsales_summary_top} }) => <Totalsales_summary_top {...args} {...totalsales_summary_top} />;
Totalsales_summary_topStory.args = {
};


Totalsales_summary_topStory.loaders = [
  async () => ({
    totalsales_summary_top: (await getAPI_totalsales_summary_top()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Totalsales_summary/component/Totalsales_summary_top',
  component: Totalsales_summary_top,
  argTypes: {
    
  },
};

