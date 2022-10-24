
import Totalsales_summary_all from '.'
import getAPI_totalsales_summary  from './util' 

// Here we export a variant of the default template passing props

export const Totalsales_summary_allStory = (args, { loaded: {totalsales_summary} }) => <Totalsales_summary_all {...args} {...totalsales_summary} />;
Totalsales_summary_allStory.args = {
};


Totalsales_summary_allStory.loaders = [
  async () => ({
    totalsales_summary: (await getAPI_totalsales_summary()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Totalsales_summary/component/Totalsales_summary_all',
  component: Totalsales_summary_all,
  argTypes: {
    
  },
};

