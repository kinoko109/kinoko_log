import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import BaseLayout from ".";
import { useAppHooks } from "../../../pageHooks/_app";

const meta: Meta = {
  title: "templates/BaseLayout",
  component: BaseLayout,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  useAppHooks();
  const metaForComponent = {
    title: "kinoko_log",
    description: "This is a description.",
    ogpImage: "/default_ogp.png",
    ogpImageAlt: "kinoko_log",
    url: "https://kinoko_log.io/",
  };
  const content = text("content", "This is a content.");
  const isHome = boolean("isHome", false);
  return (
    <BaseLayout meta={metaForComponent} isHome={isHome}>
      {content}
    </BaseLayout>
  );
};
