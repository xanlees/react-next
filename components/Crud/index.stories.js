import Crud from ".";
import getAPI from "./util"

export const CrudStory = (args, { loaded: {listcustomer} }) => <Crud {...args} {...listcustomer}/>;
CrudStory.args = {
};


CrudStory.loaders = [
  async () => ({
    listcustomer: (await getAPI()).props}),
];


export default {
  title: "Crud",
  component: Crud,
  argTypes: {},
};
