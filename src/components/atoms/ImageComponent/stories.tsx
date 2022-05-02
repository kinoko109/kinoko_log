import { withKnobs, text, number } from "@storybook/addon-knobs";
import type { Meta, Story } from "@storybook/react";
import { ImageComponent } from ".";

const meta: Meta = {
  title: "atoms/ImageComponent",
  component: ImageComponent,
  decorators: [withKnobs],
};

export default meta;

export const Normal: Story = () => {
  const src = text("src", "https://placehold.jp/800x600.png");
  const height = number("height", 350);
  const width = number("width", 350);
  return <ImageComponent src={src} height={height} width={width} />;
};
