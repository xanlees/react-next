
import Lotterydeter from '../Lotterydeter'


export const LoginStory = (args) => <Lotterydeter method="post"  { ...args }/>;


// Here we export a variant of the default template passing props



// Here we export the default component that
// will be used by Storybook to show it inside the sidebar

export default {
  title: 'Admins/Lostterylist/Elements/Lotterydeter',
  component: Lotterydeter,
  argTypes:  {
    url: { defaultValue: 'http://localhost:8000/api/v1/login/' },
  },
};
