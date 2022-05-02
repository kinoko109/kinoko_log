import { withKnobs, text } from "@storybook/addon-knobs";
import type { Story, Meta } from "@storybook/react";
import { TweetButton, TweetButtonProps } from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "atoms/TweetButton",
  component: TweetButton,
  decorators: [withKnobs],
};

export default meta;

const Template = ({ isLarge }: Pick<TweetButtonProps, "isLarge">) => {
  // TODO: useAppHooks を使用すると title, url の変更が反映されない
  const title = text("title", "This is a tweet.");
  const url = text("url", "https://kinoko_log.io/");
  return (
    <div>
      <TweetButton title={title} url={url} isLarge={isLarge} />
    </div>
  );
};

export const Normal: Story = () => {
  useAppHooks();
  return Template({ isLarge: false });
};

export const Large: Story = () => {
  useAppHooks();
  return Template({ isLarge: true });
};
