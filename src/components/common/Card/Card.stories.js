import { Card } from "./Card";
import ProductImage from "asserts/product-image-1.svg";

export default {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Card {...args}></Card>;
export const ExploreNewCard = Template.bind({});
ExploreNewCard.args = {
  position: "yes",
  tag: "hot",
  img: ProductImage,
  type: "pant",
  quantity: 200,
};
