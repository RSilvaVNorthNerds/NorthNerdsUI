import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "../../components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "NorthNerdsUI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: "Text Input",
    type: "text",
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: "Number Input",
    type: "number",
  },
};

export const FileInput: Story = {
  args: {
    placeholder: "File Input",
    type: "file",
  },
};

export const WithLabelInput: Story = {
  args: {
    placeholder: "With Label Input",
    type: "text",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="input">Input</Label>
      <Input id="input" {...args} />
    </div>
  ),
};
