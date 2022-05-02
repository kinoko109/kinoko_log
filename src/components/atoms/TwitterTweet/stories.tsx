import { withKnobs, text } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import TwitterTweet from ".";

const meta: Meta = {
  title: "atoms/TwitterTweet",
  component: TwitterTweet,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  const id = text("id", "20");
  return <TwitterTweet id={id} />;
};
