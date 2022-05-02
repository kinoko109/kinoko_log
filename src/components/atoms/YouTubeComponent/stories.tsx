import { withKnobs, text } from "@storybook/addon-knobs";
import type { Story, Meta } from "@storybook/react";
import YouTubeComponent from ".";

const meta: Meta = {
  title: "atoms/YouTubeComponent",
  component: YouTubeComponent,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  // cspell:disable
  const id = text("id", "hTWKbfoikeg");
  /* cSpell:enable */
  return <YouTubeComponent id={id} />;
};
