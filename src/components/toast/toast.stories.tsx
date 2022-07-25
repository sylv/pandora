import { Story } from "@storybook/react";
import { FC } from "react";
import { Button } from "../button/button";
import { ToastProvider } from "./toast-provider";
import { useToasts } from "./useToasts";

export default {
  title: "Toasts",
  component: ToastProvider,
  decorators: [
    (Story: FC) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

const Template: Story = () => {
  const createToast = useToasts();

  return (
    <Button
      onClick={() =>
        createToast({
          text: "An interesting toast",
        })
      }
    >
      Show toast
    </Button>
  );
};

export const Default = Template.bind({});
