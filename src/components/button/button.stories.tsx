import type { Story } from "@storybook/react";
import { Button, ButtonProps, ButtonStyle } from "./button";

export default {
  title: "Button",
  component: Button,
  args: {
    style: ButtonStyle.Primary,
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;
export const Primary = Template.bind({});

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
