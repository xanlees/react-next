
import Editagent from '../Editagent'

const CreateagentMock = {

}

const Story = (props) => <Editagent {...props} />

// Here we export a variant of the default template passing props
export const EditagentStory = Story.bind({})
EditagentStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Agentslist/Elements/Editagent',
  component: Editagent,
  argTypes: {
  },
};
export const Post = (args) => <Editagent method="post" { ...args }/>;