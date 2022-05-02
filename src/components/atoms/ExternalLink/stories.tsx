import { withKnobs, text } from "@storybook/addon-knobs";
import type { Story, Meta } from "@storybook/react";
import { ExternalLink } from ".";

const meta: Meta = {
  title: "atoms/ExternalLink",
  component: ExternalLink,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  const href = text("href", "https://google.com");
  const linkText = text("linkText", "This is a external link");
  return <ExternalLink href={href}>{linkText}</ExternalLink>;
};
