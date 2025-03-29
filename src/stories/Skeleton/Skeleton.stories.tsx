import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/ui/skeleton";

const meta = {
  title: "NorthNerdsUI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonExample: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-50 h-50" />
      <Skeleton className="w-80 h-5" />
      <Skeleton className="w-60 h-5" />
      <Skeleton className="w-72 h-5" />
    </div>
  ),
};
