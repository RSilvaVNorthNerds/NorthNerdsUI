import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../components/ui/button";

const meta = {
  title: "NorthNerdsUI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Button",
  },
};

export const StyledButton: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    style: {
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "1px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
  },
};
