import { withKnobs, text } from "@storybook/addon-knobs";
import type { Story, Meta } from "@storybook/react";
import { LineButton } from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "atoms/LineButton",
  component: LineButton,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  useAppHooks();
  const url = text("url", "https://kinoko_log.io/");
  return (
    <div>
      <LineButton url={url} />
    </div>
  );
};
