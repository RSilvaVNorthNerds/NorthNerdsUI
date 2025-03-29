import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const meta = {
  title: "NorthNerdsUI/SwitchToggle",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onCheckedChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    function SwitchToggleDemo() {
      const [checked, setChecked] = useState(args.checked);

      return (
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={checked}
            onCheckedChange={(value) => {
              setChecked(value);
            }}
          />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      );
    }

    return <SwitchToggleDemo />;
  },
};
