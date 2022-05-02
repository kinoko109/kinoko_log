import { withKnobs, text } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import { HatenaBookmarks } from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "atoms/HatenaBookmarks",
  component: HatenaBookmarks,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  // TODO: useAppHooks を使用すると title の変更が反映されない
  useAppHooks();
  const title = text("title", "このページをはてなブックマークに追加");
  return <HatenaBookmarks title={title} />;
};
