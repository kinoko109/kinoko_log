import { withKnobs, text } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import { ShareButtons } from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "molecules/ShareButtons",
  component: ShareButtons,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  useAppHooks();
  const url = text("url", "https://kinoko_log.io/");
  const title = text("title", "title");
  return <ShareButtons url={url} title={title} />;
};
