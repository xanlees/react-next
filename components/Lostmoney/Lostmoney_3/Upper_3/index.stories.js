import Upper_3 from "."
import getAPI from "./util";

export const Upper_3Story = (args, { loaded: {upper} }) => <Upper_3 {...args} {...upper} />;
Upper_3Story.args = {
};

Upper_3Story.loaders = [
  async () => ({
    upper: (await getAPI()).props}),
];

export default {
  title: 'Lostmoney/Lostmoney_3/elements/Upper_3',
  component: Upper_3,
  argTypes:  {
  }
}
