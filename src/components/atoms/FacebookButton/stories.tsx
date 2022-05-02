import { withKnobs, text } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import { FacebookButton } from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "atoms/FacebookButton",
  component: FacebookButton,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  useAppHooks();
  const url = text("url", "https://kinoko_log.io/");
  return (
    <div>
      <FacebookButton url={url} />
    </div>
  );
};
