
import Editcustomer from '../Editcustomer'

const EditcustomerMock = {

}

const Story = (props) => <Editcustomer {...props} />

// Here we export a variant of the default template passing props
export const EditcustomerStory = Story.bind({})
EditcustomerStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Agents/Customers/Elements/Editcustomer',
  component: Editcustomer,
  argTypes: {
  },
};
export const Post = (args) => <Editcustomer method="post" { ...args }/>;