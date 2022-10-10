import Card from "."

export const Story = (args) => <Card { ...args }/>;


export default {
  title: 'LotteryList/elements/Card',
  component: Card,
  argTypes:  {
    lottery: { defaultValue: {
        image: "https://www.laos-guide-999.com/images/Flag-of-LaoPDR.png",
        name: "Lao Lotto",
        code: "Code: L001",
        open_date: "12/10/2022",
        closing_time: "12:30:30"
        
    } },
  },
};
