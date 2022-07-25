import { Story } from "@storybook/react";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  args: {
    href: "#",
  },
};

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args}>Back</Breadcrumbs>;
export const Default = Template.bind({});
