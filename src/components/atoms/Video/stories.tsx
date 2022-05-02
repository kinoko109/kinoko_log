import { withKnobs, text } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import { Video } from ".";

const meta: Meta = {
  title: "atoms/Video",
  component: Video,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  const targetFile = text(
    "targetFile",
    "/ux-considerations-from-sky-updates/sky_gif01"
  );
  return <Video targetFile={targetFile} />;
};
