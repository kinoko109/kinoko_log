import { FC } from "react";

type Props = {
  href: string;
};

export const ExternalLink: FC<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
