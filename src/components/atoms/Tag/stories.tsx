import { withKnobs, text } from "@storybook/addon-knobs";
import type { Story, Meta } from "@storybook/react";
import Tag from ".";

const meta: Meta = {
  title: "atoms/Tag",
  component: Tag,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  const className = text("className", "");
  const tagText = text("tagText", "This is a tag");
  return <Tag className={className}>{tagText}</Tag>;
};
